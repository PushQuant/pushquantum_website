import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
    events,
    getHighlightEvents,
    getUpcomingEvents,
    getPastEvents,
    getEventBySlug,
    type EventData,
    type EventTag,
} from "./events-data";

// ------------------------------------------------------------------
// Keep this list in sync with the `EventTag` union in events-data.ts.
// (TypeScript types are erased at runtime, so we need a runtime copy.)
// ------------------------------------------------------------------
const VALID_TAGS: EventTag[] = [
    "Recurring event",
    "Members only",
    "Sustainability",
    "Entrepreneurship",
    "Community",
    "Leadership",
    "Hackathon",
    "Conference",
    "Bootcamp",
    "Company Visit",
    "Workshop",
];

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/; // lowercase, digits, single dashes
const ISO_RE = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PUBLIC_DIR = path.resolve(process.cwd(), "public");

// ---- helpers ------------------------------------------------------
function isNonEmptyString(v: unknown): v is string {
    return typeof v === "string" && v.trim().length > 0;
}

function isPublicPath(v: unknown): v is string {
    return typeof v === "string" && v.startsWith("/");
}

/** True only for a real calendar date in strict YYYY-MM-DD form. */
function isValidISODate(s: string): boolean {
    if (!ISO_RE.test(s)) return false;
    const [y, m, d] = s.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    return (
        dt.getUTCFullYear() === y &&
        dt.getUTCMonth() === m - 1 &&
        dt.getUTCDate() === d
    );
}

// ==================================================================
// Collection-level checks
// ==================================================================
describe("events-data: collection", () => {
    it("contains at least one event", () => {
        expect(events.length).toBeGreaterThan(0);
    });

    it("has unique slugs", () => {
        const slugs = events.map((e) => e.slug);
        const dupes = [...new Set(slugs.filter((s, i) => slugs.indexOf(s) !== i))];
        expect(dupes, `duplicate slug(s): ${dupes.join(", ")}`).toEqual([]);
    });

    it("places every event in exactly one listing section", () => {
        const inHighlight = new Set(getHighlightEvents().map((e) => e.slug));
        const inUpcoming = new Set(getUpcomingEvents().map((e) => e.slug));
        const inPast = new Set(getPastEvents().map((e) => e.slug));

        for (const e of events) {
            const count = [
                inHighlight.has(e.slug),
                inUpcoming.has(e.slug),
                inPast.has(e.slug),
            ].filter(Boolean).length;
            expect(
                count,
                `"${e.slug}" must appear in exactly one section (highlight / upcoming / past), found ${count}`
            ).toBe(1);
        }
    });

    it("resolves every event via getEventBySlug", () => {
        for (const e of events) {
            expect(getEventBySlug(e.slug)?.slug).toBe(e.slug);
        }
    });
});

// ==================================================================
// Per-event field validation (one test group per event, keyed by slug)
// ==================================================================
describe.each(events.map((e) => [e.slug, e] as const))(
    "event: %s",
    (_slug, event: EventData) => {
        it("has a URL-safe slug", () => {
            expect(isNonEmptyString(event.slug)).toBe(true);
            expect(event.slug, `slug "${event.slug}" must be lowercase-with-dashes`).toMatch(
                SLUG_RE
            );
        });

        it("has required text fields", () => {
            expect(isNonEmptyString(event.title), "title is required").toBe(true);
            expect(
                isNonEmptyString(event.shortDescription),
                "shortDescription is required"
            ).toBe(true);
            expect(isNonEmptyString(event.date), "date (human label) is required").toBe(true);
        });

        it("has a public image path", () => {
            expect(
                isPublicPath(event.image),
                `image must start with "/" (got: "${event.image}")`
            ).toBe(true);
        });

        it("has only valid tags", () => {
            expect(Array.isArray(event.tags), "tags must be an array").toBe(true);
            for (const tag of event.tags) {
                expect(VALID_TAGS, `unknown tag "${tag}"`).toContain(tag);
            }
        });

        it("has a valid dateISO (real YYYY-MM-DD date)", () => {
            expect(
                isValidISODate(event.dateISO),
                `dateISO "${event.dateISO}" is not a valid YYYY-MM-DD date`
            ).toBe(true);
        });

        it("uses boolean section flags and is not both highlight and past", () => {
            if (event.isHighlight !== undefined)
                expect(typeof event.isHighlight).toBe("boolean");
            if (event.isPast !== undefined) expect(typeof event.isPast).toBe("boolean");
            expect(
                !(event.isHighlight && event.isPast),
                "an event cannot be both isHighlight and isPast"
            ).toBe(true);
        });

        it("has valid optional top-level fields", () => {
            if (event.heroDescription !== undefined)
                expect(isNonEmptyString(event.heroDescription)).toBe(true);
            if (event.signUpUrl !== undefined)
                expect(isNonEmptyString(event.signUpUrl)).toBe(true);
        });

        it("has a valid keyFacts block (if present)", () => {
            if (!event.keyFacts) return;
            expect(typeof event.keyFacts).toBe("object");
            for (const k of ["when", "where", "forWhom", "whatToExpect"] as const) {
                const v = event.keyFacts[k];
                if (v !== undefined)
                    expect(isNonEmptyString(v), `keyFacts.${k} must be non-empty`).toBe(true);
            }
        });

        it("has a valid agenda (if present)", () => {
            if (!event.agenda) return;
            expect(Array.isArray(event.agenda)).toBe(true);
            for (const day of event.agenda) {
                expect(isNonEmptyString(day.label), "agenda day needs a label").toBe(true);
                if (day.description !== undefined)
                    expect(isNonEmptyString(day.description)).toBe(true);
                expect(Array.isArray(day.entries), "agenda day needs an entries array").toBe(
                    true
                );
                for (const entry of day.entries) {
                    // time may be intentionally empty (continuation lines)
                    expect(typeof entry.time).toBe("string");
                    expect(isNonEmptyString(entry.title), "agenda entry needs a title").toBe(
                        true
                    );
                }
            }
        });

        it("has valid sponsors (if present)", () => {
            if (!event.sponsors) return;
            for (const s of event.sponsors) {
                expect(isNonEmptyString(s.name)).toBe(true);
                expect(isPublicPath(s.logo), `sponsor "${s.name}" logo must start with "/"`).toBe(
                    true
                );
                expect(isNonEmptyString(s.description)).toBe(true);
                if (s.url !== undefined) expect(isNonEmptyString(s.url)).toBe(true);
            }
        });

        it("has valid partners (if present)", () => {
            if (!event.partners) return;
            for (const p of event.partners) {
                expect(isNonEmptyString(p.name)).toBe(true);
                expect(isPublicPath(p.logo), `partner "${p.name}" logo must start with "/"`).toBe(
                    true
                );
                if (p.url !== undefined) expect(isNonEmptyString(p.url)).toBe(true);
            }
        });

        it("has valid faq (if present)", () => {
            if (!event.faq) return;
            for (const f of event.faq) {
                expect(isNonEmptyString(f.question), "faq item needs a question").toBe(true);
                expect(isNonEmptyString(f.answer), "faq item needs an answer").toBe(true);
            }
        });

        it("has valid organizers (if present)", () => {
            if (!event.organizers) return;
            for (const o of event.organizers) {
                expect(isNonEmptyString(o.name)).toBe(true);
                expect(isNonEmptyString(o.position)).toBe(true);
                expect(
                    isPublicPath(o.image),
                    `organizer "${o.name}" image must start with "/"`
                ).toBe(true);
                expect(o.email, `organizer "${o.name}" has an invalid email`).toMatch(EMAIL_RE);
                if (o.linkedin !== undefined) expect(isNonEmptyString(o.linkedin)).toBe(true);
            }
        });
    }
);

// ==================================================================
// Image files actually exist on disk.
// Checks each event's main card/hero image. Logos and organizer
// avatars are NOT checked here (they may be added later or live
// elsewhere). Remove this block if it's too strict for your workflow.
// ==================================================================
describe("events-data: image files exist in /public", () => {
    it.each(events.map((e) => [e.slug, e.image] as const))(
        "%s → %s",
        (_slug, image) => {
            const rel = image.replace(/^\//, "");
            const abs = path.join(PUBLIC_DIR, rel);
            expect(fs.existsSync(abs), `missing image file: public/${rel}`).toBe(true);
        }
    );
});
