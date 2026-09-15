import type { Metadata } from "next";
import { ConferenceHero } from "@/components/conference/conference-hero";
import { EventAgenda } from "@/components/events/event-agenda";
import { ConferenceTalks } from "@/components/conference/conference-talks";
import { ConferenceScienceSlam } from "@/components/conference/conference-science-slam";
import { hackathon2026 } from "@/lib/hackathon-2026-data";

export const metadata: Metadata = {
    title: "Conference - PushQuantum Hackathon 2026",
    description:
        "Frontiers in Quantum Science and Technology — talks, itinerary and Science Slam details for the PushQuantum Conference on November 20, 2026.",
};

// Reuse the Nov 20 agenda already defined for the combined event,
// scoped down to just the Conference day.
const conferenceOnlyEvent = {
    ...hackathon2026,
    agenda: hackathon2026.agenda ? [hackathon2026.agenda[0]] : [],
};

export default function ConferencePage() {
    return (
        <>
            <ConferenceHero />
            <EventAgenda event={conferenceOnlyEvent} />
            <ConferenceTalks />
            <ConferenceScienceSlam />
        </>
    );
}
