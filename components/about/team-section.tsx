"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
// Leadership - President and Vice Presidents (highlighted row)
const leadership = [
    {
        name: "Alexander Orlov",
        role: "President",
        image: "/department_leads/Alex.jpg",
        roleColor: "bg-[#1a1a2e]",
        email: "alexander@pushquantum.tech",
    },
    {
        name: "Axel Karger",
        role: "Vice President",
        image: "/department_leads/Axel.jpeg",
        roleColor: "bg-[#1a1a2e]",
        email: "axel@pushquantum.tech",
    },
    {
        name: "Jessica Link",
        role: "Vice President",
        image: "/department_leads/Jessica.png",
        roleColor: "bg-[#1a1a2e]",
        email: "jessica@pushquantum.tech",
    },
];

// Department heads - all other team members
const departmentHeads = [
    {
        name: "Leart Zuka",
        role: "IT Administration",
        image: "/department_leads/Leart.jpg",
        roleColor: "bg-[#1a1a2e]",
        email: "leart@pushquantum.tech",
    },
    {
        name: "Jannik Pflieger",
        role: "Quanten(t)räume",
        image: "/department_leads/Jannik.jpg",
        roleColor: "bg-[#1a1a2e]",
        email: "jannik@pushquantum.tech",
    },
    {
        name: "Emily Haworth",
        role: "Quanten(t)räume & Sustainability",
        image: "/department_leads/Emily.jpg",
        roleColor: "bg-[#1a1a2e]",
        email: "emily@pushquantum.tech",
    },
    {
        name: "Lisa Krüger",
        role: "Thinktank",
        image: "/department_leads/Lisa.jpg",
        roleColor: "bg-[#e91e8c]",
        email: "lisa@pushquantum.tech",
    },
    {
        name: "Dimitris Vasileiadis",
        role: "Partners",
        image: "/department_leads/Dimitros.jpg",
        roleColor: "bg-[#4169e1]",
        email: "dimitris@pushquantum.tech",
    },
    {
        name: "Ginevra Fulco",
        role: "Marketing",
        image: "/department_leads/Ginevra.png",
        roleColor: "bg-[#4169e1]",
        email: "ginevra@pushquantum.tech",
    },
    {
        name: "Felizia Braun",
        role: "Offerings",
        image: "/department_leads/Felizia.jpg",
        roleColor: "bg-[#4169e1]",
        email: "felizia@pushquantum.tech",
    },
    {
        name: "Ioana Milea",
        role: "Offerings",
        image: "/department_leads/Ioana.jpg",
        roleColor: "bg-[#4169e1]",
        email: "ioana@pushquantum.tech",
    },
    {
        name: "Aaron Sander",
        role: "Quantum Entrepreneurship Lab",
        image: "/department_leads/Aaron.JPG",
        roleColor: "bg-[#4169e1]",
        email: "aaron@pushquantum.tech",
    },
    {
        name: "Tjorven Oevermann",
        role: "Community",
        image: "/department_leads/Tjorven.jpg",
        roleColor: "bg-[#4169e1]",
        email: "tjorven@pushquantum.tech",
    },
    {
        name: "Lasse Dierich",
        role: "Legal & Finance",
        image: "/department_leads/Lasse.jpeg",
        roleColor: "bg-[#4169e1]",
        email: "lasse@pushquantum.tech",
    },
];

// Alumni - Past PushQuantum members
const alumni = [
    {
        name: "Former Member 1",
        role: "Alumni",
        image: "/department_leads/placeholder.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Former Member 2",
        role: "Alumni",
        image: "/department_leads/placeholder.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Former Member 3",
        role: "Alumni",
        image: "/department_leads/placeholder.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Former Member 4",
        role: "Alumni",
        image: "/department_leads/placeholder.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Former Member 5",
        role: "Alumni",
        image: "/department_leads/placeholder.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Former Member 6",
        role: "Alumni",
        image: "/department_leads/placeholder.jpg",
        roleColor: "bg-gray-500",
    },
];

function TeamMemberCard({
    member,
    size = "normal",
}: {
    member: {
        name: string;
        role: string;
        image: string;
        roleColor: string;
        email?: string;
    };
    size?: "small" | "normal" | "large";
}) {
    const avatarSize = size === "large" ? "w-48 h-48" : (size === "normal" ? "w-42 h-42" : "w-36 h-36");
    const hasEmail = !!member.email;

    const content = (
        <>
            {/* Role Badge */}
            <span
                className={`${member.roleColor} text-white text-xs px-3 py-1 rounded-full mb-3`}
            >
                {member.role}
            </span>

            {/* Avatar with email hover overlay */}
            <div
                className={`relative ${avatarSize} rounded-full overflow-hidden mb-3 bg-gray-200`}
            >
                <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className={`object-cover transition-all duration-300 ${hasEmail ? "group-hover:brightness-50" : ""}`}
                    sizes={size === "large" ? "112px" : "96px"}
                />
                {/* Email icon overlay on hover - only show if email exists */}
                {hasEmail && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                )}
            </div>

            {/* Name */}
            <h3
                className={`font-semibold text-[#1a1a2e] ${hasEmail ? "group-hover:text-[#e91e8c]" : ""} transition-colors`}
            >
                {member.name}
            </h3>
        </>
    );

    if (hasEmail) {
        return (
            <a
                href={`mailto:${member.email}`}
                className="group flex flex-col items-center text-center cursor-pointer"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="flex flex-col items-center text-center">{content}</div>
    );
}

export function TeamSection() {
    const [showAlumni, setShowAlumni] = useState(false);

    return (
        <section className="py-20 px-6 bg-white">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
                        Our Team
                    </h2>
                </div>

                {/* Leadership Row - President & Vice Presidents */}
                <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12">
                    {leadership.map((member) => (
                        <TeamMemberCard key={member.name} member={member} size="large" />
                    ))}
                </div>

                {/* Divider */}
                <div className="w-24 h-1 bg-[#e91e8c] mx-auto mb-12" />

                {/* Department Heads Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8">
                    {departmentHeads.map((member) => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </div>


            </div>

            {/* Alumni Toggle Button */}
            <div className="flex justify-center mt-12">
                <Button
                    onClick={() => setShowAlumni(!showAlumni)}
                    variant="outline"
                    className="rounded-full text-white bg-pq-bright-pink hover:bg-white hover:text-pq-bright-pink hover:border hover:border-pq-bright-pink px-8 py-3 flex items-center gap-2"
                >
                    {showAlumni ? "Hide Alumni" : "Show Alumni"}
                    {showAlumni ? (
                        <ChevronUp className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </Button>
            </div>

            {/* Alumni Section */}
            {showAlumni && (
                <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-300">
                    {/* Alumni Header */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-[#1a1a2e]">
                            Our Alumni
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Former PushQuantum members who helped shape our community
                        </p>
                    </div>

                    {/* Alumni Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
                        {alumni.map((member) => (
                            <TeamMemberCard key={member.name} member={member} size="small" />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

