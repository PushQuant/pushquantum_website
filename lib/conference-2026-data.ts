// ============================================================
// Data for the Conference deep-dive page
// (app/hackathon/conference/page.tsx).
//
// Talk abstracts are placeholder Lorem Ipsum text — swap them
// for the real abstracts once speakers confirm them. Everything
// else (names, affiliations, itinerary slot) comes from
// 2026_hackathon/2026 Conference & Hackathon Kick-Off.pdf.
// ============================================================

export interface ConferenceTalk {
    time: string;
    speaker: string;
    affiliation?: string;
    kind: "Scientific Talk" | "Keynote";
    title: string;
    abstract: string;
}

const LOREM = "TBA";

export const conferenceTalks: ConferenceTalk[] = [
    {
        time: "9:15 - 10:00",
        speaker: "Speaker to be confirmed",
        kind: "Scientific Talk",
        title: "Topic to be confirmed",
        abstract: LOREM,
    },
    {
        time: "10:00 - 10:45",
        speaker: "Prof. Dr. Annabelle Bohrdt",
        affiliation: "LMU Munich",
        kind: "Scientific Talk",
        title: "TBA",
        abstract: LOREM,
    },
    {
        time: "11:15 - 12:00",
        speaker: "Prof. Dr. Dominik Bucher",
        affiliation: "TUM",
        kind: "Scientific Talk",
        title: "TBA",
        abstract: LOREM,
    },
    {
        time: "12:00 - 12:45",
        speaker: "Prof. Dr. Barbara Kraus",
        affiliation: "TUM",
        kind: "Scientific Talk",
        title: "TBA",
        abstract: LOREM,
    },
    {
        time: "16:30 - 17:00",
        speaker: "Prof. Dr. Ignacio Cirac",
        affiliation: "Max Planck Institute of Quantum Optics",
        kind: "Keynote",
        title: "TBA",
        abstract: LOREM,
    },
];

export const scienceSlam = {
    intro:
        "A science slam is a fast-paced, accessible research pitch competition — no jargon, no slides packed with equations, just researchers making their work exciting for a general audience in a few minutes on stage.",
    format:
        "Selected speakers each get a short slot on the Main Stage to present their research in an engaging, accessible way. The audience votes for their favorite talk at the end.",
    applicationWindow: "September 15 - October 31, 2026",
    applicationNote:
        "Apply with a short video submission introducing yourself and your research topic. Selected speakers are notified ahead of the Conference and present live on November 20.",
    slot: "14:15 - 15:45, Main Stage",
};
