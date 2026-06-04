// ============================================================
// Events Data Model
// To add a new event, simply add a new object to the
// `events` array following the EventData type structure.
//
// NOTE ON IMAGES:
// All events currently point to the quantum-themed placeholder
// images in /public/images/events/ (placeholder-quantum-*.png).
// Swap the `image` field for a real photo whenever one is
// available — everything else will keep working.
// ============================================================

export type EventTag =
    | "Recurring event"
    | "Members only"
    | "Sustainability"
    | "Entrepreneurship"
    | "Community"
    | "Outreach"
    | "Professional Develpoment"
    | "Leadership"
    | "Hackathon"
    | "Conference"
    | "Bootcamp"
    | "Company Visit"
    | "Workshop";

export interface AgendaEntry {
    time: string;
    title: string;
}

export interface AgendaDay {
    label: string; // e.g. "Day 1 - 29. Nov. 2024"
    description?: string; // short tagline
    entries: AgendaEntry[];
}

export interface Sponsor {
    name: string;
    logo: string; // path to logo image
    description: string;
    url?: string;
}

export interface Organizer {
    name: string;
    position: string;
    image: string;
    email: string;
    linkedin?: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface EventData {
    // Identification
    slug: string;

    // Display on listing page
    title: string;
    shortDescription: string;
    image: string; // hero / card image
    tags: EventTag[];
    date: string; // human-readable e.g. "Friday 22 - Sunday 24 June, 2025"
    dateISO: string; // for sorting, e.g. "2025-06-22"
    isHighlight?: boolean;
    isPast?: boolean;

    // Individual event page
    heroDescription?: string; // supports **bold** markers
    signUpUrl?: string;

    // Key Facts
    keyFacts?: {
        when?: string;
        where?: string;
        forWhom?: string;
        whatToExpect?: string;
    };

    // Agenda
    agenda?: AgendaDay[];

    // Sponsors / Key Speakers (hidden if empty)
    sponsors?: Sponsor[];

    // Partners (hidden if empty)
    partners?: {
        name: string;
        logo: string;
        url?: string;
    }[];

    // FAQ (hidden if empty)
    faq?: FaqItem[];

    // Organizers / Contact
    organizers?: Organizer[];
}

// Placeholder images (cycled so cards look varied but cohesive).
const PH1 = "/images/events/placeholder-quantum-1.png";
const PH2 = "/images/events/placeholder-quantum-2.png";
const PH3 = "/images/events/placeholder-quantum-3.png";
const PH4 = "/images/events/placeholder-quantum-4.png";

// ============================================================
// EVENTS DATA
// ============================================================

export const events: EventData[] = [
    // ============================================================
    // ---- HIGHLIGHTS (flagship offerings) ----
    // ============================================================
    {
        slug: "quantum-entrepreneurship-laboratory",
        title: "Quantum Entrepreneurship Laboratory",
        shortDescription:
            "A project-based course that brings together students from different backgrounds to work on industry-relevant quantum computing problems and pitch them as commercial products.",
        image: PH3,
        tags: ["Recurring event", "Entrepreneurship"],
        date: "Each semester",
        dateISO: "2026-04-01",
        isHighlight: true,
        heroDescription:
            "Learn to build quantum tech from the best, by working on **real-world challenges**. Interdisciplinary | Applied Quantum Research | **6 ECTS** (Technical), **3 ECTS** (Business).",
        signUpUrl: "https://forms.gle/wY96XiJuDcUyUxZc8",
        keyFacts: {
            when: "Runs each semester. Technical students take part the entire semester (6 ECTS); business students join at the midterm (3 ECTS).",
            where: "Munich (TUM) — in cooperation with TUM Venture Lab Quantum / Semicon",
            forWhom:
                "Students of different backgrounds — technical students working on applied quantum research, and business students assessing commercial viability.",
            whatToExpect:
                "Delve deep into an applied research topic as a group, learn to think like an entrepreneur, and pitch your idea as a startup in front of a panel of quantum industry and academic experts.",
        },
        agenda: [
            {
                label: "1. Ideation Phase",
                description:
                    "Technical students meet, are presented a list of industry-relevant research topics, get assigned into groups of three, and begin digging into their idea alongside topic-specific lectures.",
                entries: [],
            },
            {
                label: "2. Midterm Phase",
                description:
                    "Business students join. Technical teams pitch their projects; business and technical teams are matched to assess ideas and decide where a product could be developed.",
                entries: [],
            },
            {
                label: "3. Demo Day",
                description:
                    "Interdisciplinary teams build a true startup pitch and present it in front of a panel of experts.",
                entries: [],
            },
            {
                label: "4. Final Deliverables Phase",
                description:
                    "After exams, teams develop a technical paper detailing the research and a business white paper outlining the product's viability and the costs of creating a startup.",
                entries: [],
            },
        ],
        partners: [
            {
                name: "TUM Venture Lab Quantum / Semicon",
                logo: "/placeholder.svg",
            },
            { name: "IQM", logo: "/placeholder.svg" },
            { name: "BMW", logo: "/placeholder.svg" },
            { name: "E.ON", logo: "/placeholder.svg" },
            { name: "Airbus", logo: "/placeholder.svg" },
        ],
        organizers: [
            {
                name: "Aaron Sander",
                position: "PhD Student TUM, PushQuantum",
                image: "/department_leads/Aaron.JPG",
                email: "aaron@pushquantum.tech",
            },
            {
                name: "Julius Gerheuser",
                position: "PushQuantum",
                image: "/department_leads/placeholder.jpg",
                email: "hello@pushquantum.tech",
            },
        ],
    },

    {
        slug: "pushquantum-hackathon-2025",
        title: "PushQuantum Hackathon 2025",
        shortDescription:
            "One weekend of quantum innovation in Munich. 100+ students and industry experts solving real-world quantum challenges on real quantum hardware.",
        image: PH1,
        tags: ["Hackathon", "Entrepreneurship"],
        date: "Friday 28 - Sunday 30 November, 2025",
        dateISO: "2025-11-28",
        isHighlight: true,
        heroDescription:
            "Join **100+ students** for real-world quantum challenges and a weekend of learning and collaboration, in Munich, **November 28-30**. Three days, **24 hours of hacking**, food and drinks provided.",
        signUpUrl: "https://aqora.io/events/pushquantum-2025#register",
        keyFacts: {
            when: "Friday 28 - Sunday 30 November 2025. Registrations were open until November 9, 2025.",
            where: "Munich / Garching Research Campus",
            forWhom:
                "Students and early-career researchers from all backgrounds — from quantum beginners to advanced coders.",
            whatToExpect:
                "Solve a real-world problem with a quantum tech company, run your code on real quantum hardware, and work together with peers and mentors from all across Europe. 3+ challenges, provided by Quandela, Haiqu & Qoro Quantum.",
        },
        agenda: [
            {
                label: "Friday, Nov 28",
                description: "Welcome event with networking & team formation.",
                entries: [],
            },
            {
                label: "Saturday, Nov 29",
                description:
                    "Kick-off of the 24h hacking session, coding & midnight-special.",
                entries: [],
            },
            {
                label: "Sunday, Nov 30",
                description:
                    "Prototype finalization, pitches and closing ceremony.",
                entries: [],
            },
        ],
        sponsors: [
            {
                name: "Quandela",
                logo: "/logos/partners/quandela/Quandela.png",
                description:
                    "A photonic quantum computing company founded in 2017 in Paris. Develops hardware, middleware, and software solutions across materials, computing & cryptography, finance, and life sciences.",
            },
            {
                name: "Haiqu",
                logo: "/placeholder.svg",
                description:
                    "Quantum software company building middleware to make today's noisy quantum hardware more useful and accessible.",
            },
            {
                name: "Qoro Quantum",
                logo: "/placeholder.svg",
                description:
                    "Develops middleware for distributed quantum and HPC computing, orchestrating workloads across quantum and classical resources.",
            },
        ],
        partners: [
            { name: "Munich Quantum Valley", logo: "/placeholder.svg" },
            { name: "TUM Venture Labs Quantum / Semicon", logo: "/placeholder.svg" },
            { name: "Aqora", logo: "/placeholder.svg" },
        ],
        faq: [
            {
                question: "Do I have to be a quantum expert to participate?",
                answer:
                    "Not at all! Our hackathon is open to everyone. Some prior exposure to quantum computing or coding can help, but curiosity and motivation are what matter most. To refresh your knowledge of quantum circuits beforehand, check out our Qiskit Fall Fest, featuring an introduction to Qiskit and a mini-challenge.",
            },
            {
                question: "Do I need to arrive at the hackathon with a team?",
                answer:
                    "No — teams can be formed on site up to Friday at 23:59. You'll have plenty of time to meet potential teammates during the welcome event. We highly encourage forming interdisciplinary teams.",
            },
            {
                question: "Are travel or accommodation costs covered?",
                answer:
                    "Unfortunately, we cannot reimburse travel or accommodation. We recommend booking transport early (after your participation is confirmed) and connecting with local students to share accommodation.",
            },
            {
                question: "Can I participate remotely?",
                answer:
                    "No, the PushQuantum Hackathon is an in-person event held in Munich / Garching.",
            },
            {
                question: "Is food provided during the event?",
                answer:
                    "Yes! We'll keep you fueled throughout the weekend with snacks, drinks, and full meals (including vegetarian and vegan options). There'll also be plenty of coffee for the late-night hacking sessions.",
            },
            {
                question: "Is there a participation fee?",
                answer:
                    "Yes, the participation fee is 10 €. This small contribution helps us ensure that everyone who signs up actually attends — and you'll receive food, drinks, and goodies worth more than that in return.",
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
                name: "Alexander Orlov",
                position: "PushQuantum",
                image: "/department_leads/placeholder.jpg",
                email: "alexander@pushquantum.tech",
            },
        ],
    },

    {
        slug: "frontier-tech-conference-2025",
        title: "Frontier Tech Conference 2025",
        shortDescription:
            "PushQuantum x The Entrepreneurial Group brought together 100+ students, founders, and industry leaders to exchange insights on deep-tech entrepreneurship.",
        image: PH2,
        tags: ["Conference", "Entrepreneurship"],
        date: "Wednesday 10 December, 2025",
        dateISO: "2025-12-10",
        isHighlight: true,
        heroDescription:
            "PushQuantum x The Entrepreneurial Group. Join **100+ students, founders and industry leaders** to learn their lessons in Deep-Tech Entrepreneurship. **Munich, December 10.**",
        signUpUrl: "https://luma.com/cyr1ctl9",
        keyFacts: {
            when: "Wednesday 10 December 2025",
            where: "Munich",
            forWhom:
                "Open to everybody with a strong interest in deep-tech entrepreneurship — from quantum tech to aerospace, automotive and robotics.",
            whatToExpect:
                "Keynotes where founders share their success stories, panels on team building and fundraising, and hands-on workshops to build practical entrepreneurship skills. Engage with 15+ deep-tech companies like Quandela, IQM, NVIDIA and Google.",
        },
        agenda: [
            {
                label: "Keynotes",
                description: "Founders share their success stories.",
                entries: [],
            },
            {
                label: "Panels",
                description:
                    "Insights and lessons on topics like team building and fundraising.",
                entries: [],
            },
            {
                label: "Workshops",
                description:
                    "Hands-on sessions to build practical entrepreneurship skills.",
                entries: [],
            },
        ],
        sponsors: [
            {
                name: "Jan Goetz",
                logo: "/placeholder.svg",
                description:
                    "Highlight Speaker — Co-founder and CEO of IQM Quantum Computers.",
            },
        ],
        partners: [
            { name: "The Entrepreneurial Group (TEG)", logo: "/placeholder.svg" },
            { name: "TUM Venture Labs", logo: "/placeholder.svg" },
        ],
        organizers: [
            {
                name: "Felizia Braun",
                position: "President, PushQuantum",
                image: "/department_leads/Felizia.jpg",
                email: "felizia@pushquantum.tech",
            },
            {
                name: "Alexander Orlov",
                position: "PushQuantum",
                image: "/department_leads/placeholder.jpg",
                email: "alexander@pushquantum.tech",
            },
        ],
    },

    // ============================================================
    // ---- UPCOMING / RECURRING OFFERINGS ----
    // ============================================================
    {
        slug: "leadership-series",
        title: "Leadership Series",
        shortDescription:
            "Career talks from various leaders across different fields of quantum, sharing their journeys and advice for future innovators.",
        image: PH4,
        tags: ["Recurring event", "Leadership"],
        date: "Recurring event",
        dateISO: "2026-02-01",
        signUpUrl: "https://pushquantum.tech/leadership-in-quantum",
    },

    {
        slug: "qiskit-bootcamp",
        title: "Qiskit Bootcamp",
        shortDescription:
            "A beginner-friendly, community-driven introduction to quantum computing with Qiskit — talks, workshops, a mini-challenge and a career session, run as part of the global Qiskit Fall Fest.",
        image: PH1,
        tags: ["Recurring event", "Bootcamp", "Community"],
        date: "Recurring event",
        dateISO: "2026-01-15",
        heroDescription:
            "A compact, beginner-friendly and community-driven introduction to quantum computing with **Qiskit**. Get a fast intro, a bite-sized challenge, and a career session — plus time to meet peers.",
        signUpUrl: "https://pushquantum.tech/qiskit_fall_fest_2025",
        keyFacts: {
            forWhom:
                "Students, researchers, developers and everyone else. Beginner-friendly (basic Python helpful).",
            whatToExpect:
                "Quantum & Qiskit 101, networking, a guided mini challenge, and a career talk. IBM participation certificates provided.",
        },
    },

    {
        slug: "company-visits",
        title: "Company Visits",
        shortDescription:
            "PushQuantum's Start-up & Company Visit series — explore quantum companies and research centers, hear presentations, and connect with teams over drinks and snacks.",
        image: PH3,
        tags: ["Recurring event", "Members only", "Company Visit"],
        date: "Recurring event",
        dateISO: "2026-03-01",
        signUpUrl: "https://pushquantum.tech/company-visits",
    },

    {
        slug: "seminar-quantum-tuesday",
        title: "Seminar — Quantum Tuesday",
        shortDescription:
            "A recurring seminar series where PushQuantum members and guests present quantum science and technology topics in an accessible format.",
        image: PH2,
        tags: ["Recurring event", "Community"],
        date: "Recurring event",
        dateISO: "2026-02-15",
        signUpUrl: "https://pushquantum.tech/seminar",
    },

    // ============================================================
    // ---- PAST EVENTS ----
    // ============================================================
    {
        slug: "qiskit-fall-fest-2025",
        title: "Qiskit Fall Fest 2025",
        shortDescription:
            "Our 2025 Qiskit Fall Fest edition — a compact, beginner-friendly intro to quantum computing with Qiskit, a mini challenge, and a career talk with IBM participation certificates.",
        image: PH4,
        tags: ["Bootcamp", "Community"],
        date: "Friday 7 - Friday 14 November, 2025",
        dateISO: "2025-11-07",
        isPast: true,
        heroDescription:
            "A compact, beginner-friendly and community-driven introduction to quantum computing with **Qiskit** — featuring a '100 Years of Quantum' keynote, Quantum & Qiskit 101, a mini challenge, and a career talk.",
        keyFacts: {
            when: "07 - 14 November 2025 (CET, Berlin)",
            where: "Hybrid sessions + online challenge",
            forWhom: "Students, researchers, developers and everyone else (basic Python helpful).",
            whatToExpect:
                "Quantum & Qiskit 101, networking, a guided mini challenge, and a career talk & winner announcement. IBM participation certificates provided.",
        },
        agenda: [
            {
                label: "07/11/25 (Hybrid)",
                description:
                    "100 Years of Quantum Impressions • Quantum & Qiskit 101 • Networking",
                entries: [],
            },
            {
                label: "08/11/25 (Online)",
                description: "Mini Challenge Kickoff",
                entries: [],
            },
            {
                label: "09/11/25 (Online)",
                description: "Challenge Deadline (End of Day)",
                entries: [],
            },
            {
                label: "14/11/25 (Hybrid)",
                description: "Career Talk & Winner Announcement",
                entries: [],
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
                name: "Jannik Pflieger",
                position: "PushQuantum",
                image: "/department_leads/Jannik.jpg",
                email: "jannik@pushquantum.tech",
            },
        ],
    },

    {
        slug: "early-stage-startups-quantum-tech-2025",
        title: "Early-Stage Startups in Quantum Tech",
        shortDescription:
            "Engage with quantum tech founders and gain first-hand insights into the challenges and lessons of their startup journey, from early-stage hurdles to breakthrough moments.",
        image: PH1,
        tags: ["Entrepreneurship", "Community"],
        date: "Friday 4 July, 2025",
        dateISO: "2025-07-04",
        isPast: true,
        keyFacts: {
            when: "July 4, 2025, from 17:00",
            where: "StudiTUM Garching, Room 0.002, Ground Floor — Lichtenbergstrasse 3, 85748 Garching",
        },
    },

    {
        slug: "fast-track-innovation-camp-quantum-sensing-2025",
        title: "Fast Track Innovation Camp — Quantum Sensing for Sustainability",
        shortDescription:
            "Together with Fraunhofer IAO, a one-day workshop exploring how quantum sensing technologies can contribute to sustainability — combining expert input with hands-on interdisciplinary group work.",
        image: PH2,
        tags: ["Sustainability", "Workshop"],
        date: "2025",
        dateISO: "2025-05-15",
        isPast: true,
        heroDescription:
            "Together with **Fraunhofer IAO**, we hosted a one-day workshop exploring how **quantum sensing** technologies can contribute to sustainability, combining expert input with hands-on group work.",
        keyFacts: {
            whatToExpect:
                "In the morning, experts discussed why sustainability must be considered from the beginning in the development of quantum technologies. In the afternoon, interdisciplinary teams tackled selected challenges, developing early concepts and prototypes through creative problem-solving.",
        },
    },

    {
        slug: "company-visit-qssys-2025",
        title: "Company Visit: qssys",
        shortDescription:
            "We explored qssys, which specializes in quantum communication systems and are experts in QKD component design & development, with consulting for terrestrial and space applications.",
        image: PH3,
        tags: ["Members only", "Company Visit"],
        date: "Monday 23 June, 2025",
        dateISO: "2025-06-23",
        isPast: true,
        keyFacts: {
            forWhom:
                "Number of participants limited to 20, with priority given to (active) PushQuantum members.",
            whatToExpect:
                "A company presentation followed by plenty of time to ask questions and chat with the team over free drinks and snacks.",
        },
    },

    {
        slug: "leadership-talk-ignacio-cirac-2024",
        title: "Leadership Series: Talk by Prof. Dr. Ignacio Cirac",
        shortDescription:
            "A special talk by Professor Ignacio Cirac, sharing his inspiring journey as a leader in quantum science and offering invaluable insights and advice for future innovators and leaders.",
        image: PH4,
        tags: ["Members only", "Leadership"],
        date: "Monday 9 December, 2024",
        dateISO: "2024-12-09",
        isPast: true,
        keyFacts: {
            when: "9th December 2024, 17:30 - 20:00",
            where: "Herbert Walther Lecture Hall, MPQ, Garching bei München",
        },
    },

    {
        slug: "pushquantum-hackathon-2024",
        title: "PushQuantum Hackathon 2024",
        shortDescription:
            "Connecting students and companies through interesting challenges over an exciting weekend — bringing together quantum enthusiasts from different countries and universities to work out innovative solutions.",
        image: PH1,
        tags: ["Hackathon", "Entrepreneurship"],
        date: "Friday 29 November - Sunday 1 December, 2024",
        dateISO: "2024-11-29",
        isPast: true,
        heroDescription:
            "The objective of the Hackathon is to connect students and companies through interesting challenges. Over an exciting weekend, we bring together many quantum enthusiasts to work out **innovative solutions** in a productive environment.",
        keyFacts: {
            when: "29 November - 1 December 2024",
            where: "Entrepreneurship Research Institute, Lichtenbergstraße 6, 85748 Garching",
            forWhom:
                "Students from all universities, as well as young professionals and early-stage PhD students.",
            whatToExpect:
                "Hacking framed by informative opening lectures, lab tours and a company fair, as well as joint networking times.",
        },
        agenda: [
            {
                label: "Day 1 - 29. Nov. 2024",
                entries: [
                    { time: "11:00 - 13:00", title: "Welcome Reception" },
                    { time: "13:30", title: "Start of the program" },
                    {
                        time: "14:30 - 15:00",
                        title: "Panel Discussion: Future Pathways for Quantum Technologies",
                    },
                    {
                        time: "15:00 - 17:00",
                        title: "Lab Tours around the main research institutes in Garching",
                    },
                    { time: "16:45 - 17:00", title: "Coffee break" },
                    { time: "17:00 - 18:00", title: "Hackathon Opening & Challenges" },
                    { time: "18:30", title: "Joint Dinner" },
                    { time: "23:00", title: "Deadline for Specifying the Teams" },
                ],
            },
            {
                label: "Day 2 - 30. Nov. 2024",
                description: "Full day of hacking on the company challenges.",
                entries: [],
            },
            {
                label: "Day 3 - 01. Dec. 2024",
                description: "Final pitches and closing ceremony.",
                entries: [],
            },
        ],
    },

    {
        slug: "qiskit-bootcamp-2024",
        title: "Qiskit Bootcamp 2024",
        shortDescription:
            "A 4-module quantum programming course on the basics of Qiskit, sponsored by IBM Quantum as part of the Qiskit Fall Fest 2024, with introductory and closing talks plus a career session.",
        image: PH2,
        tags: ["Bootcamp", "Community"],
        date: "Saturday 2 - Sunday 3 November & Saturday 30 November, 2024",
        dateISO: "2024-11-02",
        isPast: true,
        heroDescription:
            "The Qiskit Bootcamp is a **4-module** quantum programming course on the basics of Qiskit. Acquire fundamental knowledge of quantum computing concepts and learn to express them using the **Qiskit SDK**.",
        keyFacts: {
            whatToExpect:
                "Sponsored by IBM Quantum as part of the Qiskit Fall Fest 2024, providing introductory and closing talks, a special career session for anybody who completed the course, and IBM swag items.",
        },
    },

    {
        slug: "company-visit-lrz-2024",
        title: "Company Visit: Leibniz Supercomputing Centre (LRZ)",
        shortDescription:
            "A visit to Munich's HPC center, the LRZ — including a tour through the Quantum Integration Centre (IQM and AQT quantum systems) and a look at the SuperMUC-NG supercomputer.",
        image: PH3,
        tags: ["Members only", "Company Visit"],
        date: "Monday 1 July, 2024",
        dateISO: "2024-07-01",
        isPast: true,
        keyFacts: {
            when: "1st of July 2024, 16:00",
            where: "Boltzmannstraße 1, 85748 Garching",
            whatToExpect:
                "A tour through the Quantum Integration Centre (IQM and AQT quantum systems) and a look at one of the world's top-50 fastest supercomputers, SuperMUC-NG. Time to connect with the LRZ team over free drinks and snacks.",
        },
    },

    {
        slug: "welcome-event-ilyas-khan-2024",
        title: "Welcome Event ft. Ilyas Khan",
        shortDescription:
            "We kicked off the Summer Term 2024 with a special event featuring Ilyas Khan, co-founder and CPO of Quantinuum, welcoming over 20 new members to the PushQuantum community.",
        image: PH4,
        tags: ["Community"],
        date: "Summer Term 2024",
        dateISO: "2024-05-01",
        isPast: true,
        heroDescription:
            "We kicked off the Summer Term 2024 with a special event featuring **Ilyas Khan**, co-founder and CPO of Quantinuum, held at the TUM Think Tank.",
        keyFacts: {
            where: "TUM Think Tank",
            whatToExpect:
                "Ilyas Khan shared insights on quantum computing's impact on industry, research, and our lives. A panel discussion with TUM Professor Robert Wille and Fabienne Marco further explored the current state and future of quantum computing.",
        },
    },

    {
        slug: "sustainability-day-2024",
        title: "Sustainability Day",
        shortDescription:
            "PushQuantum's contribution to the TUM Sustainability Day, ensuring quantum technologies have a net positive impact on our planet and are part of the solution, not the problem.",
        image: PH1,
        tags: ["Sustainability", "Community"],
        date: "2024",
        dateISO: "2024-06-01",
        isPast: true,
        heroDescription:
            "We firmly believe quantum should not be perceived as a panacea for the crises we face. Our goal is to make certain that quantum, in and of itself, has a **net positive impact** on our planet.",
        signUpUrl: "https://pushquantum.tech/sustainability-guide",
    },

    {
        slug: "company-visit-linque-2023",
        title: "Company Visit: Linque",
        shortDescription:
            "A visit to Linque, a fresh start-up specialized in energy-efficient, faster computing hardware using integrated photonics for next-generation algorithms and computing needs.",
        image: PH2,
        tags: ["Members only", "Company Visit"],
        date: "Monday 11 December, 2023",
        dateISO: "2023-12-11",
        isPast: true,
        keyFacts: {
            when: "11th of December 2023, 18:00",
            where: "Main building of LMU, Geschwister-Scholl-Platz 1",
            whatToExpect:
                "A company presentation followed by time to connect with the Linque team over free drinks and snacks. Spots limited.",
        },
    },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getHighlightEvents(): EventData[] {
    return events.filter((e) => e.isHighlight);
}

export function getUpcomingEvents(): EventData[] {
    return events.filter((e) => !e.isPast && !e.isHighlight);
}

export function getPastEvents(): EventData[] {
    return events.filter((e) => e.isPast);
}

export function getEventBySlug(slug: string): EventData | undefined {
    return events.find((e) => e.slug === slug);
}

/**
 * Group events by month string e.g. "July 2025"
 */
export function groupEventsByMonth(
    eventsList: EventData[]
): { month: string; events: EventData[] }[] {
    const groups: Record<string, EventData[]> = {};
    for (const event of eventsList) {
        const d = new Date(event.dateISO);
        const key = d.toLocaleString("en-US", { month: "long", year: "numeric" });
        if (!groups[key]) groups[key] = [];
        groups[key].push(event);
    }
    return Object.entries(groups).map(([month, evts]) => ({ month, events: evts }));
}

/**
 * Group events by year string e.g. "2025"
 */
export function groupEventsByYear(
    eventsList: EventData[]
): { year: string; events: EventData[] }[] {
    const groups: Record<string, EventData[]> = {};
    for (const event of eventsList) {
        const d = new Date(event.dateISO);
        const key = d.getFullYear().toString();
        if (!groups[key]) groups[key] = [];
        groups[key].push(event);
    }
    return Object.entries(groups)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([year, evts]) => ({ year, events: evts }));
}

/**
 * Get all unique tags from upcoming events
 */
export function getAllTags(): EventTag[] {
    const tags = new Set<EventTag>();
    for (const event of getUpcomingEvents()) {
        for (const tag of event.tags) {
            tags.add(tag);
        }
    }
    return Array.from(tags);
}
