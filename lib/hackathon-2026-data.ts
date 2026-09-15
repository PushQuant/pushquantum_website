// ============================================================
// Data for the standalone 2026 Conference + Hackathon page
// (app/hackathon/page.tsx). Kept separate from the main
// `events` array in events-data.ts so this event has its own
// dedicated /hackathon URL without also appearing as a
// duplicate entry on the general /events listing.
//
// Source material: 2026_hackathon/ (announcement carousel,
// preliminary Nov 20 kick-off agenda, and information.txt
// LinkedIn announcement copy). The Nov 20 hourly agenda is
// marked "PRELIMINARY — DO NOT DISTRIBUTE" in the source PDF,
// so double check it's final before this page goes live.
// ============================================================

import type { EventData } from "@/lib/events-data";

// ------------------------------------------------------------
// Challenge partners for the Hackathon deep-dive page
// (app/hackathon/challenge-partners/page.tsx).
//
// Placeholder copy — swap in the real challenge briefs once
// partners confirm them.
// ------------------------------------------------------------
export interface ChallengePartner {
    name: string;
    logo: string;
    description: string;
    challenge: string;
}

const CHALLENGE_TBA = "Challenge details to be announced closer to the event.";

export const challengePartners: ChallengePartner[] = [
    {
        name: "Aqarios",
        logo: "/logos/partners/aqarios/aqarios_logo_blue_vertical.png",
        description: "Quantum software company building optimization solutions for industry.",
        challenge: CHALLENGE_TBA,
    },
    {
        name: "Alice & Bob",
        logo: "/logos/partners/alice_bob/ALICE-ET-BOB.png",
        description: "Hardware company building fault-tolerant quantum computers from cat qubits.",
        challenge: CHALLENGE_TBA,
    },
    {
        name: "IQM Quantum Computers",
        logo: "/logos/partners/iqm/IQM_Quantum_Computers_Logo.jpg",
        description: "Superconducting quantum computer manufacturer for research and industry.",
        challenge: CHALLENGE_TBA,
    },
    {
        name: "Qoro",
        logo: "/logos/partners/qoro/Qoro-Quantum-Banner-600x400.png",
        description: "Distributed quantum computing software for scaling quantum applications.",
        challenge: CHALLENGE_TBA,
    },
];

export const hackathon2026: EventData = {
    slug: "conference-hackathon-2026",
    title: "Conference + Hackathon 2026",
    shortDescription:
        "Frontiers in Quantum Science and Technology — three days, two experiences: a one-day quantum conference and a 24-hour hackathon in Munich/Garching.",
    image: "/images/events/placeholder-quantum-1.png",
    tags: ["Hackathon", "Conference"],
    date: "Friday 20 - Sunday 22 November, 2026",
    dateISO: "2026-11-20",
    isHighlight: true,
    signUpUrl: "https://docs.google.com/forms/d/e/1FAIpQLScQZfBAFH1mqYaGkGaKFY_72TNoa969YvVwJaF8S1DwU2eLww/viewform",
    heroDescription:
        "**Three days, two experiences, your choice.** Join us at the Research Campus Garching for a day of talks, science slam and networking, followed by 24 hours of turning real quantum challenges into working prototypes.",
    keyFacts: {
        when: "Friday 20 - Sunday 22 November 2026. Early bird registration benefits: Sep 15-30. Science Slam video applications: Sep 15-Oct 31.",
        where: "Munich / Research Campus Garching",
        forWhom:
            "Master's and PhD students planning their next step in quantum tech, plus researchers and tech enthusiasts of all backgrounds. Choose the Conference, the Hackathon, or both.",
        whatToExpect:
            "Conference (Nov 20): talks from leading researchers and pioneers, a Science Slam, poster session and industry meet & greet. Hackathon (Nov 20-22): team up in interdisciplinary groups and turn real-world challenges into working prototypes in 24 hours of hacking, with mentoring and networking with students, researchers and industry experts from across Europe. Conference only €5 · Hackathon only €10 · Both events €15.",
    },
    agenda: [
        {
            label: "Friday, Nov 20 - Conference & Hackathon Kick-off",
            description:
                "A full day of talks at the Garching Research Campus, closing with the mandatory hackathon kick-off and challenge presentations.",
            entries: [
                { time: "8:30 - 9:00", title: "Arrival" },
                { time: "9:00 - 9:15", title: "Welcome" },
                { time: "9:15 - 10:00", title: "Scientific Talk (TBA)" },
                {
                    time: "10:00 - 10:45",
                    title: "TBA - Prof. Dr. Annabelle Bohrdt (LMU)",
                },
                { time: "10:45 - 11:15", title: "Coffee Break & Speaker Meet & Greet" },
                {
                    time: "11:15 - 12:00",
                    title:
                        "TBA - Prof. Dr. Dominik Bucher (TUM) / Company Speed Dating (prior registration)",
                },
                {
                    time: "12:00 - 12:45",
                    title: "TBA - Prof. Dr. Barbara Kraus (TUM)",
                },
                {
                    time: "12:45 - 14:15",
                    title: "Lunch Break & Speaker Meet & Greet / MCQST Poster Session",
                },
                { time: "14:15 - 15:45", title: "Science Slam" },
                { time: "15:45 - 16:15", title: "Coffee Break" },
                { time: "16:15 - 16:30", title: "PushQuantum Presentation" },
                {
                    time: "16:30 - 17:00",
                    title: "Keynote - Prof. Dr. Ignacio Cirac (MPQ)",
                },
                { time: "17:00 - 17:45", title: "Munich Ecosystem Presentations" },
                { time: "17:45 - 18:00", title: "Coffee Break" },
                {
                    time: "18:00 - 19:45",
                    title: "Partner & Challenge Presentations (Hackathon Kick-off)",
                },
                { time: "19:45 - 22:00", title: "Dinner" },
            ],
        },
        {
            label: "Saturday, Nov 21 - Hackathon",
            description:
                "24 hours of hacking begins: interdisciplinary teams build and prototype real quantum challenges with mentoring, access to quantum hardware, and technology from our partners. Detailed hourly schedule to be announced.",
            entries: [],
        },
        {
            label: "Sunday, Nov 22 - Hackathon",
            description:
                "The 24-hour hacking session wraps up with final prototypes, demos, feedback from mentors and judges, and the closing awards ceremony. Detailed hourly schedule to be announced.",
            entries: [],
        },
    ],
    partners: [
        { name: "TUM Venture Labs", logo: "/logos/partners/tum_vl/png/tumvl_logo_schwarz_rgb.png" },
        { name: "Munich Quantum Valley", logo: "/logos/partners/mqv/mqv_new.png" },
        {
            name: "Munich Center for Quantum Science and Technology (MCQST)",
            logo: "/logos/partners/mcqst/MCQST_Logo_BlueBlack.png",
        },
        {
            name: "Max Planck Institute of Quantum Optics",
            logo: "/logos/partners/mpq/mpq.png",
        },
        { name: "Aqora", logo: "/logos/partners/aquora/Aqora.png" },
        { name: "Alice & Bob", logo: "/logos/partners/alice_bob/ALICE-ET-BOB.png" },
        { name: "Aqarios", logo: "/logos/partners/aqarios/aqarios_logo_blue_vertical.png" },
        { name: "IQM Quantum Computers", logo: "/logos/partners/iqm/IQM_Quantum_Computers_Logo.jpg" },
        { name: "Qoro", logo: "/logos/partners/qoro/Qoro-Quantum-Banner-600x400.png" }
    ],
    faq: [
        {
            question: "What's the difference between the Conference and the Hackathon?",
            answer:
                "The Conference (Nov 20) is a day of talks by leading researchers and pioneers, industry x research x student networking, a Science Slam and a poster session. The Hackathon (Nov 20-22) kicks off on the afternoon of Nov 20, then teams get 24 hours to turn real-world quantum challenges from industry and research into working prototypes, with mentoring, access to quantum tech, and final demos & awards.\n Hackathon and conference participants will come together in the afternoon and are welcome to stay for relaxed networking into the evening.",
        },
        {
            question: "Do I have to join both the Conference and the Hackathon?",
            answer:
                "No — you choose your experience, or combine both for the full weekend. Join the Conference only, the Hackathon only, or both. Hackathon participants must also attend the mandatory kick-off on the afternoon of November 20.",
        },
        {
            question: "Is the hackathon kick-off mandatory?",
            answer:
                "Yes. All hackathon participants are required to attend the kick-off on the afternoon of November 20, where challenges are presented by our partners and teams get started.",
        },
        {
            question: "How much does it cost?",
            answer:
                "Conference only: €5. Hackathon only: €10. Both events: €15.",
        },
        {
            question: "How do I apply for the Science Slam?",
            answer:
                "Science Slam video applications are open September 15 - October 31. Selected speakers present live during the Conference on November 20.",
        },
        {
            question: "When does registration open?",
            answer:
                "Early bird registration benefits run September 15-30. Join the waitlist to be notified as soon as full registration opens.",
        },
    ],
    organizers: [
        {
            name: "Felizia Braun",
            position: "President, PushQuantum",
            image: "/department_leads/Felizia.jpg",
            email: "felizia@pushquantum.tech",
        },
        {
            name: "Tjorven Oevermann",
            position: "Vice President, PushQuantum",
            image: "/department_leads/Tjorven.jpg",
            email: "tjorven@pushquantum.tech",
        },
    ],
};
