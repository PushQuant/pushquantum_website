// ============================================================
// Events Data Model
// To add a new event, simply add a new object to the
// `events` array following the EventData type structure.
// ============================================================

export type EventTag =
    | "Recurring event"
    | "Members only"
    | "Sustainability"
    | "Entrepreneurship"
    | "Community"
    | "Leadership";

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
    heroDescription?: string; // supports HTML-like bold markers
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

// ============================================================
// SAMPLE EVENTS DATA
// ============================================================

export const events: EventData[] = [
    // ---- HIGHLIGHTS ----
    {
        slug: "pushquantum-hackathon-2025",
        title: "PushQuantum Hackathon",
        shortDescription:
            "A 3-day challenge of full immersion in the world of quantum technologies",
        image: "/images/events/hackathon.jpg",
        tags: ["Entrepreneurship"],
        date: "Friday 22 - Sunday 24 June, 2025",
        dateISO: "2025-06-22",
        isHighlight: true,
        heroDescription:
            "Join us for a **3-day of full immersion** in the world of quantum technologies. Discover **real-world use cases** and get in touch with **active start-ups** in the field!",
        signUpUrl: "#",
        keyFacts: {
            when: "29 November - 1 December",
            where:
                "Munich: Entrepreneurship Research Institute, Lichtenbergstraße 6, 85748 Garching",
            forWhom:
                "Students from all universities are welcome, as well as young professionals and early-stage PhD students",
            whatToExpect:
                "Form a 4-person team and participate in one of the challenges offered by our partners. Learn about practical use cases of quantum technologies and connect with the protagonist of the world of quantum tech. Moreover, get to know fellow students coming from different universities and young professionals in industry of academia.",
        },
        agenda: [
            {
                label: "Day 1 - 29. Nov. 2024",
                entries: [
                    { time: "11:00 - 13:00", title: "Welcome Reception" },
                    { time: "13:30", title: "Start of the program" },
                    {
                        time: "14:30 - 15:00",
                        title:
                            "Panel Discussion: Future Pathways for Quantum technologies",
                    },
                    {
                        time: "",
                        title:
                            "Panelists: Christopher Tschoppe (TUM Venture Lab Quantum), Dr. Nouh Jankhala (QSR Partner, Appications)",
                    },
                    {
                        time: "15:00 - 17:00",
                        title:
                            "Lab Tours around the main research institutes in Garching",
                    },
                    { time: "16:45 - 17:00", title: "Coffee break" },
                    {
                        time: "17:00 - 18:00",
                        title: "Hackathon Opening & Challenges",
                    },
                    {
                        time: "",
                        title:
                            "Opening Presentation by PushQuantum and Partners & Companies introducing themselves and the challenges",
                    },
                    { time: "18:30", title: "Joint Dinner" },
                    { time: "23:00", title: "Deadline for Specifying the Teams" },
                ],
            },
            {
                label: "Day 2 - 30. Nov. 2024",
                description:
                    "A 3-day challenge of full immersion in the world of quantum technologies",
            },
            {
                label: "Day 3 - 01. Dec. 2024",
                description:
                    "A 3-day challenge of full immersion in the world of quantum technologies",
            },
        ],
        sponsors: [
            {
                name: "Quandela",
                logo: "/logos/partners/quandela/Quandela.png",
                description:
                    "Founded in 2017 in Paris. A photonic quantum computing company. Develops hardware, middleware, and software solutions. Serves diverse industries including material, computing & cryptography, finance, pharma & life sciences.",
                url: "#",
            },
            {
                name: "Aqarios",
                logo: "/logos/partners/aquora/Aquora.svg",
                description:
                    "Spin-off from the University of Munich. Based in Munich, Germany. A leading company in quantum computing software. Apply tools to a range of industrial quantum applications and develop quantum computing algorithms, quantum ML strategies, quantum ML software solutions.",
                url: "#",
            },
            {
                name: "Classiq",
                logo: "/images/events/classiq-logo.png",
                description:
                    "Quantum software platform for designing, optimizing, analyzing, and executing quantum programs. Offers two interfaces: Python SDK and web-based IDE using the Classiq Portal. Collaborates with major quantum hardware providers and maintains the largest collection of quantum algorithms, applications, and tutorials for all experience levels.",
                url: "#",
            },
        ],
        partners: [
            { name: "MCQST", logo: "/logos/partners/mcqst/MCQST_Logo_BlueBlack.png" },
            { name: "MQV", logo: "/logos/partners/mqv/MQV.png" },
            {
                name: "Munich Quantum Institute",
                logo: "/logos/partners/mqi/MQI_logo_only_quantum_blue.svg",
            },
        ],
        faq: [
            {
                question:
                    "Do I have to pay for registering at the Hackathon?",
                answer:
                    'Answer: The frequently asked question "Is it a time restriction, a project description, or even a list".',
            },
            {
                question: "The registration gives me access to the event?",
                answer:
                    "Yes, registering secures your spot at the event. You will receive a confirmation email with all the details.",
            },
            {
                question: "Do I have to be a quantum expert to participate?",
                answer:
                    "No, the hackathon welcomes participants from all backgrounds. We provide introductory workshops and mentoring support.",
            },
        ],
        organizers: [
            {
                name: "Darius Haltsch",
                position: "Position in PushQuantum",
                image: "/department_leads/placeholder.jpg",
                email: "darius@pushquantum.tech",
                linkedin: "#",
            },
            {
                name: "Alessandro Palermo",
                position: "Position in PushQuantum",
                image: "/department_leads/placeholder.jpg",
                email: "alessandro@pushquantum.tech",
                linkedin: "#",
            },
        ],
    },

    {
        slug: "quantum-entrepreneurship-lab",
        title: "Quantum Entrepreneurship Lab",
        shortDescription:
            "A project-based course uniting students from diverse backgrounds",
        image: "/images/events/qel.jpg",
        tags: ["Entrepreneurship"],
        date: "Next date coming soon",
        dateISO: "2025-07-01",
        isHighlight: true,
        signUpUrl: "#",
    },

    {
        slug: "leadership-series",
        title: "Leadership Series",
        shortDescription:
            "Career talks of various leaders from different fields of quantum",
        image: "/images/events/leadership.jpg",
        tags: ["Recurring event", "Leadership"],
        date: "Recurring event",
        dateISO: "2025-07-01",
        isHighlight: true,
        signUpUrl: "#",
    },

    // ---- UPCOMING EVENTS ----
    {
        slug: "quantum-tuesday-how-to-build-quantum-computer",
        title: "Quantum Tuesday: How to build a Quantum Computer",
        shortDescription:
            "Interested in how to build a quantum computer? Jannik Pflieger from PushQuantum will talk about this topic in today's session of Quantum Tuesday. We are looking forward to seeing you there!",
        image: "/images/events/quantum-tuesday.jpg",
        tags: ["Recurring event"],
        date: "Tuesday 15 July, 2025",
        dateISO: "2025-07-15",
        signUpUrl: "#",
    },

    {
        slug: "leadership-talk-prof-ignacio",
        title: "Leadership Series: Talk by Prof. Dr. Ignacio",
        shortDescription:
            "Join us for a special talk by Professor Ignacio Cirac. He will share his inspiring journey as a leader in quantum science, offering invaluable insights and advice for future innovators and leaders.",
        image: "/images/events/leadership-ignacio.jpg",
        tags: ["Members only", "Leadership"],
        date: "Thursday 24 July, 2025",
        dateISO: "2025-07-24",
        signUpUrl: "#",
        keyFacts: {
            when: "17:30 to 20:00",
            where: "Herbert Walther Lecture Hall, MPQ, Garching (Munich)",
        },
    },

    {
        slug: "quantum-tuesday-100-years",
        title: "Quantum Tuesday: 100 Years of Quantum Science",
        shortDescription:
            "100 Years of Quantum Science and Technology! Leart Zuka from PushQuantum will talk about this topic in today's session of Quantum Tuesday. We are looking forward to seeing you there!",
        image: "/images/events/quantum-tuesday-100.jpg",
        tags: ["Recurring event"],
        date: "Tuesday 29 July, 2025",
        dateISO: "2025-07-29",
        signUpUrl: "#",
    },

    {
        slug: "quantum-tuesday-august-tbd",
        title: "Quantum Tuesday: Topic tbd",
        shortDescription:
            "Mark your calendars and save the date! A surprising and thought-provoking topic will be revealed soon -- stay tuned for details!",
        image: "/images/events/quantum-tuesday-aug.jpg",
        tags: ["Recurring event"],
        date: "Tuesday 12 August, 2025",
        dateISO: "2025-08-12",
        signUpUrl: "#",
    },

    {
        slug: "pushquantum-hackathon-aug-2025",
        title: "PushQuantum Hackathon",
        shortDescription:
            "Join us for 3 days of full immersion in the world of quantum technologies! Discover real-world use cases and get in touch with active start-ups in the field!",
        image: "/images/events/hackathon-aug.jpg",
        tags: [],
        date: "Friday 22 - Sunday 24 August, 2025",
        dateISO: "2025-08-22",
        signUpUrl: "#",
    },

    // ---- PAST EVENTS ----
    {
        slug: "qel-2024-25",
        title: "Quantum Entrepreneurship Laboratory",
        shortDescription:
            "The Quantum Entrepreneurship Laboratory is a project-based course that brings together students of different backgrounds to work on selected problems in quantum computing deemed industry-relevant.",
        image: "/images/events/qel-past.jpg",
        tags: ["Recurring event"],
        date: "Winter Semester 2024/25",
        dateISO: "2025-01-01",
        isPast: true,
    },

    {
        slug: "company-visit-qssys-2025",
        title: "Company Visit: qssys",
        shortDescription:
            "Thank you to all! We had the amazing opportunity to explore qssys, which specializes in quantum communication systems and are experts in QKD component design & development.",
        image: "/images/events/qssys.jpg",
        tags: ["Members only"],
        date: "Monday 23 June, 2025",
        dateISO: "2025-06-23",
        isPast: true,
    },

    {
        slug: "qiskit-bootcamp-2024",
        title: "Qiskit Bootcamp 2024",
        shortDescription:
            "The Qiskit Bootcamp is a 4-module quantum programming course on the basics of Qiskit, supported by IBM and complemented by a career-focused talk.",
        image: "/images/events/qiskit-bootcamp.jpg",
        tags: ["Recurring event"],
        date: "Saturday 2 - Sunday 3 November, 2024 & Saturday 30 - Sunday 30 November, 2024",
        dateISO: "2024-11-02",
        isPast: true,
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
