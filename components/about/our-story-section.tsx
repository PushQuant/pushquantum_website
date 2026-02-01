
"use client";

import { useState } from "react";
import Image from "next/image";

const timelineYears = [
    { year: "2020", description: "PushQuantum was founded" },
    { year: "2021", description: "First hackathon organized" },
    { year: "2022", description: "Expanded partnerships" },
    { year: "2023", description: "Launched bootcamps" },
    { year: "2024", description: "Growing community" },
];

export function OurStorySection() {
    const [activeYear, setActiveYear] = useState<string | null>(null);

    return (
        <section className="relative min-h-[600px] py-32 px-6 overflow-hidden bg-pq-dark-purple">

            {/* Background logo (blurred, padded, centered) */}
            <div className="absolute inset-x-0 inset-y-24 flex items-center justify-center pointer-events-none">
                <div className="relative w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] opacity-60 blur-xl scale-110">
                    <Image
                        src="/logos/pq/main_pq_logo_no_background.svg"
                        alt=""
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Our Story
                    </h2>
                    <div className="mx-auto mt-3 w-12 h-1 bg-[#e91e8c]" />
                </div>

                {/* Timeline */}
                <div className="relative flex items-center justify-center">

                    {/* Connecting line */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-0.5 bg-white/30" />

                    {/* Year nodes */}
                    <div className="relative flex items-center justify-between w-full max-w-3xl">
                        {timelineYears.map((item) => (
                            <button
                                key={item.year}
                                type="button"
                                className="relative flex flex-col items-center group"
                                onMouseEnter={() => setActiveYear(item.year)}
                                onMouseLeave={() => setActiveYear(null)}
                            >
                                {/* Dot */}
                                <div className="absolute -top-6 w-3 h-3 rounded-full bg-[#e91e8c] opacity-70" />

                                {/* Year box */}
                                <div
                                    className={`w-20 h-20 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-300 ${activeYear === item.year
                                        ? "bg-[#e91e8c] text-white scale-110"
                                        : "bg-white text-black"
                                        }`}
                                >
                                    {item.year}
                                </div>

                                {/* Tooltip */}
                                {activeYear === item.year && (
                                    <div className="absolute top-24 bg-white text-black text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                                        {item.description}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

