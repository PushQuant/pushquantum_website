"use client";

import { useState } from "react";
import { Users, Package, Handshake, Atom, Lightbulb, Megaphone, Scale, Code, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const departments = [
    {
        icon: Users,
        title: "Community",
        description: "Manage members, organize community and exclusive PQ team events.",
    },
    {
        icon: Package,
        title: "Offerings",
        description: "Organize PQ offerings for the upcoming semester.",
    },
    {
        icon: Handshake,
        title: "Partners",
        description: "Manage industry and academic partners, onboard new partners, create collaborations, and acquire sponsorships.",
    },
    {
        icon: Atom,
        title: "Outreach",
        description: "Organize PQs contribution to the Quanten(t)räume project.",
    },
    {
        icon: Lightbulb,
        title: "Entrepreneurship Laboratory",
        description: "Organize the next cohort, onboard speakers and challenge partners, organize lectures and workshops",
    },
    {
        icon: Megaphone,
        title: "Marketing",
        description: "Promote PQ and its events on all marketing channels and design PQ merch.",
    },
];

const additionalDepartments = [
    {
        icon: Scale,
        title: "Legal & Finance",
        description: "Handle legal matters, manage finances, and ensure compliance.",
    },
    {
        icon: Code,
        title: "IT Administration",
        description: "Manage technical infrastructure, website, and digital tools.",
    },
    {
        icon: BookOpen,
        title: "Thinktank",
        description: "Coordinate projects focused on quantum technology’s societal implications.",
    },
];

export function DepartmentsSection() {
    const [showMore, setShowMore] = useState(false);

    const visibleDepartments = showMore
        ? [...departments, ...additionalDepartments]
        : departments;

    return (
        <section className="py-16 px-6 bg-[#f3f4f6]">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
                        Our Departments
                    </h2>
                    <p className="mt-4 text-[#1a1a2e]/70">
                        you will join one of our startup-like departments!
                    </p>
                </div>

                {/* Departments Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleDepartments.map((dept) => (
                        <div
                            key={dept.title}
                            className="bg-white rounded-xl p-6 border border-gray-200"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#1a1a2e]/5 flex items-center justify-center mb-4">
                                <dept.icon className="w-6 h-6 text-[#1a1a2e]" />
                            </div>
                            <h3 className="font-semibold text-[#1a1a2e] mb-2">{dept.title}</h3>
                            <p className="text-sm text-[#1a1a2e]/70">{dept.description}</p>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                <div className="flex justify-center mt-8">
                    <Button
                        onClick={() => setShowMore(!showMore)}
                        className="rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white px-8"
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </Button>
                </div>
            </div>
        </section>
    );
}
