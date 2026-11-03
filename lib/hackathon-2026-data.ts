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
    /** Paragraphs about the company, shown when the card is expanded. */
    details?: string[];
    /** Partner website, linked below the details. */
    website?: string;
    /** The partner's mentors / contact persons, shown below the details. */
    contacts?: ChallengePartnerContact[];
}

export interface ChallengePartnerContact {
    name: string;
    /** Optional job title shown under the name. */
    role?: string;
    image: string;
    /** Paragraphs of the contact's self-introduction. */
    intro: string[];
}

export const challengePartners: ChallengePartner[] = [
    {
        name: "Aqarios",
        logo: "/logos/partners/aqarios/aqarios_logo_blue_vertical.png",
        description: "Quantum software company building optimization solutions for industry.",
    },
    {
        name: "Alice & Bob",
        logo: "/logos/partners/alice_bob/ALICE-ET-BOB.png",
        description: "Hardware company building fault-tolerant quantum computers from cat qubits.",
    },
    {
        name: "IQM Quantum Computers",
        logo: "/logos/partners/iqm/IQM_Quantum_Computers_Logo.jpg",
        description: "Superconducting quantum computer manufacturer for research and industry.",
        details: [
            "IQM is a global leader in building quantum computers. IQM provides on-premises quantum computers for supercomputing centres, enterprises, and research labs and offers full access to its hardware. IQM also has a quantum computing cloud offering “IQM Resonance.”",
            "IQM’s commercial quantum computers include Finland’s ongoing commercial 50-qubit quantum computer co-development project with VTT, IQM-led consortium’s (Q-Exa) HPC quantum accelerator in Germany, and IQM processors will also be used in the first quantum accelerator in Spain.",
            "IQM has over 300+ employees, with offices in Espoo, Madrid, Munich, Palo Alto, Paris, Singapore, and Warsaw.",
        ],
        website: "https://www.iqm.tech",
        contacts: [{
            name: "Niklas",
            image: "/images/hackathon/challenge-partners/iqm-niklas.jpg",
            intro: [
                "Hi, I’m Niklas! I started working in quantum computing four years ago, when I was hired by Fraunhofer FOKUS in Berlin to work on the Quantum SDK Qrisp. Since then, I have developed multiple algorithms as well as core modules of Qrisp, co-authored papers, and presented research at conferences. If you developed with Qrisp before you might have already stumbled across some of my work!",
                "Since then I moved on to a community focused role at IQM, where I support everybody that works with the tools in the IQM ecosystem.",
                "Everything we do here is to support you, our community members get the most out of IQM ecosystem and to learn and develop together!",
                "Join us on this journey!",
            ],
        }],
    },
    {
        name: "Qoro",
        logo: "/logos/partners/qoro/Qoro-Quantum-Banner-600x400.png",
        description: "Distributed quantum computing software for scaling quantum applications.",
        contacts: [{
            name: "Dr. Stephen DiAdamo",
            image: "/images/hackathon/challenge-partners/qoro-stephen.png",
            intro: [
                "Dr. Stephen DiAdamo is the CTO and Co-Founder of Qoro Quantum. With a deep focus on quantum software, computing infrastructure, and tech innovation, Stephen leads Qoro Quantum’s technical strategy to make quantum computing accessible and impactful. He is passionate about supporting emerging developers and fostering the next wave of deep-tech innovation.",
            ],
        }],
    },
    {
        name: "planqc",
        logo: "/logos/partners/planqc/planqc.svg",
        description: "Neutral-atom quantum computer developer based in Garching near Munich.",
        details: [
            "planqc develops quantum computers based on neutral atoms, offering the fastest path to scalable quantum processors for industrial applications. Founded in April 2022 in Garching near Munich by Alexander Glätzle, Sebastian Blatt, and Johannes Zeiher, planqc is the first spin-off from the Max Planck Institute for Quantum Optics under the Munich Quantum Valley initiative. The company leverages a strong partnership with the Max Planck Institute and builds on decades of leading research in neutral-atom quantum technology.",
            "In its Series A round, planqc raised €50 million, led by CATRON Holding and DTCF, with support from Bayern Kapital, the Max-Planck Foundation, UVC Partners, Speedinvest, and a BMBF grant.",
        ],
        website: "https://www.planqc.eu",
        contacts: [
            {
                name: "Adam Prystupiuk",
                image: "/images/hackathon/challenge-partners/planqc-adam.jpg",
                intro: [
                    "I joined planqc after studying theoretical and mathematical physics at LMU and TUM, so it's great to be back as a mentor. Earlier, I did research in condensed matter physics, neuromorphic computing and fundamental quantum theory. At planqc, I develop quantum optimization algorithms, especially methods based on imaginary-time evolution. I like combining analytical insight with numerical simulation to tackle hard problems. I'm looking forward to seeing your approaches to the challenge we prepared for the PushQuantum Hackathon. Come talk to me about formulating optimization problems or with algorithm related questions! Outside of work, you can often find me mountaineering in the Alps.",
                ],
            },
            {
                name: "Keefe Huang",
                image: "/images/hackathon/challenge-partners/planqc-keefe.jpg",
                intro: [
                    "I'm a Quantum Algorithms Engineer with a focus on Optimization problems and compilation for quantum devices. I joined planqc after my doctorate at the Technical University on compilation on quantum devices and tensor network methods. At planqc, I currently investigate and develop implementations of quantum algorithms while considering devices constraints and error-correction methods. I enjoy investigating multi-disciplinary problems that overlap different research fields. I'm glad to be a mentor in this upcoming hackathon and am greatly interested in seeing you tackle our proposed challenge. Feel free to approach me regarding the compilation process and related algorithms.",
                ],
            },
        ],
    },
    {
        name: "Quantinuum",
        logo: "/logos/partners/quantinuum/quantinuum.svg",
        description: "The world’s largest integrated quantum company, building quantum computers and software.",
        details: [
            "As the world’s largest integrated quantum company, Quantinuum is leading the development of the most powerful quantum computers and the most advanced quantum software solutions. With our full-stack technology and world-class scientists, we are rapidly scaling quantum computing to solve tomorrow’s biggest challenges. We are making the impossible possible.",
        ],
        website: "https://www.quantinuum.com",
        contacts: [
            {
                name: "Dr. Sheng-Hsuan Lin",
                role: "Advanced R&D Scientist – Materials",
                image: "/images/hackathon/challenge-partners/quantinuum-sheng-hsuan.png",
                intro: [
                    "Sheng-Hsuan joined Quantinuum in 2024. He works on developing classical simulation methods for validating or optimizing quantum circuits.",
                ],
            },
            {
                name: "Dr. Travis Thompson",
                role: "Sr Advanced Compiler Engineer R&D - Computational Design & Theory",
                image: "/images/hackathon/challenge-partners/quantinuum-travis.png",
                intro: [
                    "After a PhD in Quantum Chemistry working on high-performance implementations of explicitly correlated wave-function methods at the LMU Munich, Travis pivoted into software engineering and joined Quantinuum in 2022 to work on ion-routing algorithms for trapped-ion QCCD architectures. He now works on multiple levels of Quantinuum's compiler and emulation stack within the Nexus Developer Platform.",
                ],
            },
        ],
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
        when: "Friday 20 - Sunday 22 November 2026. Early bird registration benefits: Sep 15- Oct 09. Science Slam video applications: Sep 15-Oct 31.",
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
                {
                    time: "9:15 - 10:00",
                    title: "Prof. Dr. Annabelle Bohrdt (LMU): Neural Quantum State for strongly correlated two-dimensional systems: what we have learned so far",
                },
                {
                    time: "10:00 - 10:45",
                    title: "Prof. Dr. Andreas Reiserer (TUM): Erbium Dopants for Quantum Networks",
                },
                { time: "10:45 - 11:15", title: "Breakfast Break & Speaker Meet & Greet" },
                {
                    time: "11:15 - 12:00",
                    title:
                        "Prof. Dr. Dominik Bucher (TUM): Optically Addressable Spins: From Solid-State Materials to Biochemical Systems / Company Speed Dating (prior registration)",
                },
                {
                    time: "12:00 - 12:45",
                    title: "Prof. Dr. Barbara Kraus (TUM): Challenges and Opportunities in Quantum Information Processing",
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
