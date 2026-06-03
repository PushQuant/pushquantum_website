# Managing Events

Everything that shows up under the **Events** tab is driven by a single file:

```
/lib/events-data.ts
```

You almost never need to touch the React components. To add, edit, or move an event between sections, you edit the `events` array in that file. This guide explains how.

---

## 1. The big picture

There are two kinds of pages, both generated automatically from the data:

| Page | File | What it shows |
| --- | --- | --- |
| **Events listing** | `app/events/page.tsx` | The hero, plus three sections: Highlights, Upcoming, Past |
| **Single event page** | `app/events/[slug]/page.tsx` | One full page per event, generated from its `slug` |

When you add an event object to the `events` array, **both** its card (on the listing) and its own detail page (`/events/<slug>`) are created for you. No routing changes required.

---

## 2. Which section does an event land in?

This is controlled entirely by two optional flags: `isHighlight` and `isPast`.

| Flags set | Section it appears in |
| --- | --- |
| `isHighlight: true` | **Highlights** (the 3-up grid near the top) |
| neither flag | **Upcoming Events** (filterable, grouped by month) |
| `isPast: true` | **Past Events** (grouped by year) |

The logic lives in the helper functions at the bottom of `events-data.ts`:

```ts
getHighlightEvents()  // e.isHighlight
getUpcomingEvents()   // !e.isPast && !e.isHighlight
getPastEvents()       // e.isPast
```

### Moving an event between sections

Just flip the flag — nothing else needs to change.

- **Promote an event to Highlights:** add `isHighlight: true`.
- **Send an event to Past:** add `isPast: true` (and remove `isHighlight` if it had it).
- **Back to Upcoming:** remove both flags.

> **Note:** an event with `isHighlight: true` is excluded from Upcoming, but it is **not** automatically excluded from Past. Don't set both `isHighlight` and `isPast` on the same event unless you deliberately want it in both places. Pick one.

> **Tip:** there's no hard limit on the number of highlights, but the grid is designed for **3** (it's a 3-column layout). Keeping it to 3 looks best.

---

## 3. Adding a new event

Add a new object to the `events` array. Only a handful of fields are required; everything else is optional and only appears on the detail page when you fill it in.

### Minimal event (required fields only)

```ts
{
    slug: "my-new-event-2026",           // unique, URL-safe, lowercase-with-dashes
    title: "My New Event",
    shortDescription: "One or two sentences shown on the card.",
    image: PH1,                          // a placeholder, or "/images/events/my-photo.jpg"
    tags: ["Community"],                 // see the tag list in section 5
    date: "Tuesday 15 September, 2026",  // human-readable, shown on the card
    dateISO: "2026-09-15",               // machine-readable, used for sorting
},
```

That alone gives you a card in **Upcoming Events** and a detail page at `/events/my-new-event-2026`.

### `date` vs `dateISO` — important

- **`date`** is the label humans see on the card. Write it however reads best, e.g. `"Recurring event"`, `"Each semester"`, `"Friday 28 - Sunday 30 November, 2025"`.
- **`dateISO`** is what the code uses to **sort** events and to **group** them by month (Upcoming) and year (Past). It must be a valid date string: `"YYYY-MM-DD"`.

If an event has no fixed date (e.g. a recurring offering), still give `dateISO` a sensible date so it groups/sorts in a reasonable spot.

---

## 4. Filling in the detail page

The single-event page is assembled from these optional blocks **in this order**. Each block hides itself completely if you leave its field out, so a sparse event still looks clean.

| Field | Renders | Hidden when |
| --- | --- | --- |
| `heroDescription` | The hero paragraph (supports **bold**, see below) | falls back to `shortDescription` |
| `signUpUrl` | "Sign up" buttons (hero, key facts, FAQ, contact) | omitted |
| `keyFacts` | The "Key facts" block (When / Where / For whom / What to expect) | field omitted |
| `agenda` | The "Agenda" accordion | field omitted or empty |
| `sponsors` | The "Company challenges" block | field omitted or empty |
| `partners` | The "Our partners" logo strip | field omitted or empty |
| `faq` | The "FAQs" accordion | field omitted or empty |
| `organizers` | The "Contact" block with avatars | field omitted or empty |

### Bold text in `heroDescription`

The hero supports `**double-asterisk**` for bold, like Markdown:

```ts
heroDescription:
    "Join **100+ students** for a weekend of hacking in Munich, **Nov 28-30**.",
```

This is the **only** field that parses bold markers. Everywhere else, text is shown as-is.

### `keyFacts`

All four sub-fields are optional; only the ones you provide are shown.

```ts
keyFacts: {
    when: "29 November - 1 December 2024",
    where: "Garching Research Campus, Munich",
    forWhom: "Students from all universities.",
    whatToExpect: "Lab tours, a company fair, and 24h of hacking.",
},
```

### `agenda`

A list of "days". A day can either be **expandable with timed entries**, or just a **one-line description**.

```ts
agenda: [
    {
        label: "Day 1 - 29. Nov.",
        entries: [
            { time: "11:00 - 13:00", title: "Welcome Reception" },
            { time: "13:30", title: "Start of the program" },
        ],
    },
    {
        label: "Day 2 - 30. Nov.",
        description: "Full day of hacking.",  // shown when there are no entries
        entries: [],
    },
],
```

- If a day has `entries`, the card becomes a click-to-expand accordion.
- If a day has only a `description` and an empty `entries: []`, it shows the description inline (no accordion).

### `sponsors`

Despite the name, this block is titled **"Company challenges"** on the page. Each needs a `name`, `logo`, and `description`; `url` is optional (adds a "Learn more" button).

```ts
sponsors: [
    {
        name: "Quandela",
        logo: "/logos/partners/quandela/Quandela.png",
        description: "A photonic quantum computing company founded in 2017.",
        url: "https://www.quandela.com",   // optional
    },
],
```

### `partners`

A simple logo strip. `url` is optional.

```ts
partners: [
    { name: "Munich Quantum Valley", logo: "/logos/partners/mqv/MQV.png" },
    { name: "TUM Venture Labs", logo: "/placeholder.svg" },
],
```

### `faq`

```ts
faq: [
    {
        question: "Do I have to be a quantum expert?",
        answer: "Not at all — curiosity and motivation matter most.",
    },
],
```

### `organizers`

Shown in the "Contact" block. `linkedin` is optional.

```ts
organizers: [
    {
        name: "Felizia Braun",
        position: "President, PushQuantum",
        image: "/department_leads/Felizia.jpg",
        email: "felizia@pushquantum.tech",
        linkedin: "https://www.linkedin.com/in/...",  // optional
    },
],
```

---

## 5. Tags and filtering

Tags do two things: they show as badges on the card, and they power the filter buttons on the **Upcoming** section.

### Available tags

The allowed values are defined by the `EventTag` type at the top of `events-data.ts`:

```ts
"Recurring event" | "Members only" | "Sustainability" | "Entrepreneurship"
| "Community" | "Leadership" | "Hackathon" | "Conference"
| "Bootcamp" | "Company Visit" | "Workshop"
```

You can put any combination of these on an event. Using a tag that isn't in this list is a TypeScript error.

### Filter buttons (Upcoming section)

The filter tabs are a **separate, shorter list** defined in:

```
src/components/events/upcoming-events-section.tsx  →  filterTabs
```

Currently: `All events`, `Sustainability`, `Entrepreneurship`, `Community`, `Leadership`.

- A tag can exist and show as a badge **without** having a filter button (e.g. `Hackathon` shows on cards but isn't a filter).
- To make a new tag **filterable**, do both:
  1. Add it to the `EventTag` union in `events-data.ts` (if it's not already there).
  2. Add an entry to `filterTabs` in `upcoming-events-section.tsx`:
     ```ts
     { label: "Hackathons", tag: "Hackathon" },
     ```

> Filtering only applies to the **Upcoming** section. Highlights and Past are not filtered.

---

## 6. Images

Image paths are relative to the `public/` folder.

### Placeholders

Until you have a real photo, use one of the quantum-themed placeholders in `public/images/events/`:

```
/images/events/placeholder-quantum-1.png
/images/events/placeholder-quantum-2.png
/images/events/placeholder-quantum-3.png
/images/events/placeholder-quantum-4.png
```

For convenience these are aliased near the top of `events-data.ts` as `PH1`–`PH4`, so you can write `image: PH2` instead of the full path. Cycle through them so neighbouring cards don't look identical.

### Swapping in a real photo

1. Drop the file into `public/images/events/`, e.g. `public/images/events/hackathon-2025.jpg`.
2. Change the event's `image` to the path **without** `public/`:
   ```ts
   image: "/images/events/hackathon-2025.jpg",
   ```

The same image is used for both the card and the detail-page hero, so pick something that works wide.

> **Format note:** placeholders are PNG/JPG on purpose. If you ever want to use an `.svg` as an event image, you'll need to enable `images.dangerouslyAllowSVG` in `next.config` — raster files avoid that.

---

## 7. Full annotated example

A complete event using every field:

```ts
{
    // --- required ---
    slug: "pushquantum-hackathon-2025",
    title: "PushQuantum Hackathon 2025",
    shortDescription:
        "One weekend of quantum innovation in Munich. 100+ students solving real challenges on real hardware.",
    image: PH1,
    tags: ["Hackathon", "Entrepreneurship"],
    date: "Friday 28 - Sunday 30 November, 2025",
    dateISO: "2025-11-28",

    // --- which section (optional) ---
    isHighlight: true,   // shows in the Highlights grid

    // --- detail page (all optional) ---
    heroDescription:
        "Join **100+ students** for real-world quantum challenges, **Nov 28-30**.",
    signUpUrl: "https://aqora.io/events/pushquantum-2025#register",

    keyFacts: {
        when: "Friday 28 - Sunday 30 November 2025",
        where: "Munich / Garching Research Campus",
        forWhom: "Students and early-career researchers from all backgrounds.",
        whatToExpect: "Run your code on real quantum hardware with mentors from across Europe.",
    },

    agenda: [
        { label: "Friday, Nov 28", description: "Welcome & team formation.", entries: [] },
        { label: "Saturday, Nov 29", description: "24h hacking session.", entries: [] },
        { label: "Sunday, Nov 30", description: "Pitches & closing.", entries: [] },
    ],

    sponsors: [
        {
            name: "Quandela",
            logo: "/logos/partners/quandela/Quandela.png",
            description: "A photonic quantum computing company.",
        },
    ],

    partners: [
        { name: "Munich Quantum Valley", logo: "/placeholder.svg" },
    ],

    faq: [
        {
            question: "Do I need a team?",
            answer: "No — teams form on site during the welcome event.",
        },
    ],

    organizers: [
        {
            name: "Felizia Braun",
            position: "President, PushQuantum",
            image: "/department_leads/Felizia.jpg",
            email: "felizia@pushquantum.tech",
        },
    ],
},
```

---

## 8. Quick checklist before committing

- [ ] `slug` is unique and URL-safe (lowercase, dashes, no spaces).
- [ ] `dateISO` is a real `YYYY-MM-DD` date (this drives sorting/grouping).
- [ ] Every `tag` is one of the allowed `EventTag` values.
- [ ] The right section flag is set (`isHighlight`, `isPast`, or neither).
- [ ] `image` points to a file that exists in `public/` (or a `PH1`–`PH4` placeholder).
- [ ] If you added a new filterable tag, you updated **both** `EventTag` and `filterTabs`.
- [ ] It type-checks: `npx tsc --noEmit` (or just let your editor flag errors).
