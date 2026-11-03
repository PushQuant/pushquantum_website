// ============================================================
// Data for the Conference deep-dive page
// (app/hackathon/conference/page.tsx).
//
// Talk titles and abstracts as provided by the speakers. The
// keynote (Cirac) is still TBA. Keep times in sync with the
// Nov 20 agenda in lib/hackathon-2026-data.ts.
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
        speaker: "Prof. Dr. Annabelle Bohrdt",
        affiliation: "LMU Munich",
        kind: "Scientific Talk",
        title:
            "Neural Quantum State for strongly correlated two-dimensional systems: what we have learned so far",
        abstract:
            "Numerically simulating two-dimensional strongly correlated systems is in general a daunting task. In recent years, neural quantum states have been emerged as a promising new tool: here, the expressivity of a neural network is used to represent the quantum many-body state of interest. In this talk I will introduce the basics of neural quantum states and discuss our current understanding of their capabilities regarding common measures such as entanglement, routes towards interpretability, and possible design choices. I will highlight some of our recent results on applying neural quantum states to strongly interacting electronic systems relevant for unconventional superconductivity, showcasing how we can use this novel technique to simulate increasingly realistic models for quantum materials.",
    },
    {
        time: "10:00 - 10:45",
        speaker: "Prof. Dr. Andreas Reiserer",
        affiliation: "TUM",
        kind: "Scientific Talk",
        title: "Erbium Dopants for Quantum Networks",
        abstract:
            "Despite decades of research into various physical systems, demonstrating a scalable platform for quantum networks and distributed quantum information processing remains an outstanding challenge. In this context, our group investigates the use of erbium dopants in silicon and silicate crystals. This platform offers unique potential for up-scaling: First, erbium dopants can exhibit second-long coherence in a temperature range accessible with 4He cryocoolers. Second, the optical transition of erbium is among the narrowest spectral features ever measured in a solid. Thus, frequency-multiplexed addressing of individual dopants gives access to an unprecedented qubit density. Finally, by embedding dopants in high-quality-factor optical resonators, the optical lifetime can be reduced via the Purcell effect. This has enabled lifetime-limited photon emission in the telecommunications C-band, where optical fiber losses are minimal. This establishes individual erbium dopants as a promising new hardware platform for the upscaling of quantum networks. I will discuss these recent results and give a perspective on the open challenges.",
    },
    {
        time: "11:15 - 12:00",
        speaker: "Prof. Dr. Dominik Bucher",
        affiliation: "TUM",
        kind: "Scientific Talk",
        title: "Optically Addressable Spins: From Solid-State Materials to Biochemical Systems",
        abstract:
            "Optically addressable spins have emerged as one of the key platforms for quantum technologies. In my talk, I will provide an overview of the field, starting with established solid-state systems such as the nitrogen-vacancy center in diamond and the boron-vacancy center in hexagonal boron nitride. I will then move beyond conventional materials to discuss recent advances in optically addressable spins in biological systems, including proteins and DNA. The talk will also address possible applications of these systems.",
    },
    {
        time: "12:00 - 12:45",
        speaker: "Prof. Dr. Barbara Kraus",
        affiliation: "TUM",
        kind: "Scientific Talk",
        title: "Challenges and Opportunities in Quantum Information Processing",
        abstract:
            "Quantum information processing promises fundamentally new ways of computing, communicating, and understanding complex quantum systems. But what are the main obstacles on the way toward useful quantum technologies? In this talk, I will introduce some of the key challenges we currently face and discuss why solving them is both difficult and exciting.",
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
