
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const offerings = [
    {
        title: "Quantum Entrepreneurship Laboratory",
        href: "/events/quantum-entrepreneurship-laboratory",
        description:
            "One-semester, project-based interdisciplinary course, in collaboration with TUM and UnternehmerTUM. Form a team with technical and business students to explore the startup world in deep tech.",
    },
    {
        title: "Quantum Hackathon",
        href: "/hackathon",
        description:
            "Join us at the Research Campus Garching for a day of talks, science slam and networking, followed by 24 hours of turning real quantum challenges into working prototypes.",
    },
    {
        title: "Quantenträume",
        href: "https://www.deutsches-museum.de/forschung/forschungsinstitut/projekte/detailseite/quantentraeume#c30272",
        description:
            "An interactive outreach project focused on making quantum technologies accessible to the general public. In collaboration with Deutsches Museum, Technoseum, PhotonLab, Max Planck Institute of Quantum Optics and Fraunhofer Institute for Systems and Innovation Research (ISI).",
    },
    {
        title: "International Exchanges",
        href: "#",
        description:
            "Explore the vibrant quantum community by organizing an exchange to another quantum hub—ETH, Delft, Leiden, and beyond.",
    },
    {
        title: "Company Visits",
        href: "/events/company-visits",
        description:
            "Visit quantum companies and research centers to explore industrial applications, learn directly from their teams and discover career opportunities in quantum technology.",
    },
    {
        title: "Workshops",
        href: "/events",
        description:
            "Take part in hands-on, interdisciplinary workshops and contribute to projects spanning applied quantum technology and academic research.",
    },
    {
        title: "Journal Club / Seminar",
        href: "/events/journal-club-seminar",
        description:
            "An interdisciplinary series of talks discussing experimental and theoretical physics and hosting speakers from both academia and industry.",
    },
    {
        title: "Qurie - Women in Quantum",
        href: "#",
        description:
            "Join our Women-in-Quantum initiative community to exchange experiences, networks and guidance.",
    },
];

export function OfferingsSection() {
    const [activeOffering, setActiveOffering] = useState<(typeof offerings)[number] | null>(null);

    return (
        <section className="relative min-h-[600px] bg-[#0a0a12] overflow-hidden">
            {/* Background wave mesh image - full width, no repeat */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
                style={{ backgroundImage: "url('/images/main_background.jpg')" }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-24">
                <div
                    className="grid items-center gap-10 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-16"
                    onMouseLeave={() => setActiveOffering(null)}
                >
                    {/* Glowing card on the left */}
                    <div className="relative w-full max-w-md">
                        {/* Glow effect */}
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-pq-bright-pink via-pq-bright-pink/50 to-pq-bright-pink/20 blur-[2px]" />

                        {/* Card */}
                        <div className="relative rounded-2xl bg-[#0d1033]/90 backdrop-blur-sm border border-pq-bright-pink/30 p-8 lg:p-10">
                            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">
                                Our Project Highlights
                            </h2>

                            <nav className="flex flex-col">
                                {offerings.map((offering) => (
                                    <Link
                                        key={offering.title}
                                        href={offering.href}
                                        onMouseEnter={() => setActiveOffering(offering)}
                                        onFocus={() => setActiveOffering(offering)}
                                        className="group py-3 text-foreground hover:text-primary focus-visible:text-primary transition-colors border-b border-transparent hover:border-primary/20 focus-visible:border-primary/20 outline-none"
                                    >
                                        <span className="flex items-center justify-between gap-4">
                                            <span className="text-base font-medium lg:text-lg">
                                                {offering.title}
                                            </span>
                                            <ChevronRight className="size-5 shrink-0 text-pq-bright-pink transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                                        </span>
                                        <span className="mt-2 block text-sm leading-relaxed text-gray-300 lg:hidden">
                                            {offering.description}
                                        </span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Hover details on desktop */}
                    <div
                        aria-live="polite"
                        className={`hidden min-h-64 rounded-2xl border border-pq-bright-pink/30 bg-[#0d1033]/90 p-8 shadow-2xl shadow-pq-bright-pink/10 backdrop-blur-sm transition-all duration-300 lg:flex lg:flex-col lg:justify-center ${activeOffering
                            ? "translate-x-0 opacity-100"
                            : "pointer-events-none translate-x-4 opacity-0"
                            }`}
                    >
                        {activeOffering && (
                            <>
                                <h3 className="text-2xl font-bold text-white">
                                    {activeOffering.title}
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-gray-300">
                                    {activeOffering.description}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
