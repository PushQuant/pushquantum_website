
import Link from "next/link";

const activities = [
    {
        title: "Community",
        href: "#",
        gradient: "bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#1e1b4b]",
    },
    {
        title: "Professional\nDevelopment",
        href: "#",
        gradient: "bg-gradient-to-br from-[#8b5cf6] via-[#d946ef] to-[#ec4899]",
    },
    {
        title: "Outreach",
        href: "#",
        gradient: "bg-gradient-to-br from-[#ec4899] via-[#a855f7] to-[#3730a3]",
    },
];

export function WhatWeDoSection() {
    return (
        <section className="py-20 px-6 bg-[#f3f4f6]">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-10">
                    {/* Left - Title and Description */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-4xl font-bold text-pq-dark-purple sm:text-5xl lg:text-6xl">
                            What We Do
                        </h2>
                        {/* Pink underline bar */}
                        <div className="mt-4 w-16 h-1 bg-pq-bright-pink" />
                        <p className="mt-6 text-pq-dark-purple leading-relaxed max-w-md text-lg">
                            We organize various activities to promote quantum computing education and research
                        </p>
                    </div>

                    {/* Right - Activity Cards */}
                    <div className="flex flex-col items-center lg:items-end gap-5">
                        {activities.map((activity) => (
                            <Link
                                key={activity.title}
                                href={activity.href}
                                className={`w-full max-w-[280px] rounded-2xl ${activity.gradient} px-8 py-10 text-white font-bold text-xl leading-tight hover:scale-[1.02] transition-transform duration-300 shadow-lg`}
                            >
                                <span className="whitespace-pre-line">{activity.title}</span>
                            </Link>
                        ))}


                    </div>
                </div>
            </div>
        </section>
    );
}

