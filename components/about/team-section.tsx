"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
// Leadership - President and Vice Presidents (highlighted row)
const leadership = [
    {
        name: "Felizia Braun",
        role: "President",
        image: "/department_leads/Felizia.jpg",
        roleColor: "bg-[#090150]",
        email: "felizia@pushquantum.tech",
    },
    {
        name: "Tjorven Oevermann",
        role: "Vice President",
        image: "/department_leads/Tjorven.jpg",
        roleColor: "bg-[#090150]",
        email: "tjorven@pushquantum.tech",
    },
    {
        name: "Laura Rojo Guerrero",
        role: "Vice President",
        image: "/department_leads/Laura.jpg",
        roleColor: "bg-[#090150]",
        email: "laura@pushquantum.tech",
    },
];

// Department heads - all other team members
const departmentHeads = [
    {
        name: "Leart Zuka",
        role: "IT Administration",
        image: "/department_leads/Leart.jpg",
        roleColor: "bg-pq-dark-purple",
        email: "leart@pushquantum.tech",
    },
    {
        name: "Jannik Pflieger",
        role: "Quanten(t)räume",
        image: "/department_leads/Jannik.jpg",
        roleColor: "bg-pq-dark-purple",
        email: "jannik@pushquantum.tech",
    },
    {
        name: "Lisa Krüger",
        role: "Thinktank",
        image: "/department_leads/Lisa.jpg",
        roleColor: "bg-pq-bright-pink",
        email: "lisa@pushquantum.tech",
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
        name: "Dimitris Vasileiadis",
        role: "Partners",
        image: "/department_leads/Dimitros.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Emily Haworth",
        role: "Quanten(t)räume & Sustainability",
        image: "/department_leads/Emily.jpg",
        roleColor: "bg-gray-500",
    },

    {
        name: "Ginevra Fulco",
        role: "Marketing",
        image: "/department_leads/Ginevra.png",
        roleColor: "bg-gray-500",
    },
    {
        name: "Alexander Orlov",
        role: "President",
        image: "/alumnis/Alexander_Orlov.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Axel Karger",
        role: "Vice President",
        image: "/alumnis/Axel_Karger.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Jessica Link",
        role: "Vice President",
        image: "/alumnis/Jessica_Link.png",
        roleColor: "bg-gray-500",
    },
    {
        name: "Darius Haitsch",
        role: "Offerings Department Head",
        image: "/alumnis/Darius_Haitsch.JPG",
        roleColor: "bg-gray-500",
    },
    {
        name: "Marvin Scholz",
        role: "Partners Department Head",
        image: "/alumnis/Marvin_Scholz.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Marco Candido",
        role: "Offerings Department Head",
        image: "/alumnis/Marco_Candido.JPG",
        roleColor: "bg-gray-500",
    },
    {
        name: "Alessandro Palermo",
        role: "Marketing Department Head",
        image: "/alumnis/Alessandro_Palermo.JPG",
        roleColor: "bg-gray-500",
    },
    {
        name: "Franz von Silva-Tarouca",
        role: "President",
        image: "/alumnis/Franz_von_Silva_Tarouca.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Patrick Hopf",
        role: "IT Department Head",
        image: "/alumnis/Patrick_Hopf.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Lukas Vetter",
        role: "Vice President, Legal & Finance Dep. Head",
        image: "/alumnis/Lukas_Vetter.JPG",
        roleColor: "bg-gray-500",
    },
    {
        name: "Barty Bisgin",
        role: "Qiskit Advocat, Hackathons",
        image: "/alumnis/Bartu_Bisgin.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Gleb Neplyakh",
        role: "Working Group - Social Media",
        image: "/alumnis/Gleb_Neplyakh.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Vladimir Lugo Álvarez",
        role: "Former Head of Policymaking",
        image: "/alumnis/Vladimir_Lugo_Alvarez.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "David Cepeda",
        role: "Working Group - Social Media",
        image: "/alumnis/David_Cepeda.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Marina Fernández Fernández-Campoamor",
        role: "QEL v1 Teaching Assistant",
        image: "/alumnis/Marina_Fernandez_Fernandez_Campoamor.png",
        roleColor: "bg-gray-500",
    },
    {
        name: "Esteban Prado",
        role: "QEL v2 co-organizer, TA",
        image: "/alumnis/Esteban_Prado.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Aritra Sarkar",
        role: "QEL v1 Teaching Assistant",
        image: "/alumnis/Aritra_Sarkar.png",
        roleColor: "bg-gray-500",
    },
    {
        name: "Jannes Stubbemann",
        role: "Finance",
        image: "/alumnis/Jannes_Stubbemann.png",
        roleColor: "bg-gray-500",
    },
    {
        name: "Remy Goldstein",
        role: "QEL v1 Teaching Assistant",
        image: "/alumnis/Remy_Goldstein.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Alissa Wilms",
        role: "QEL v1 Teaching Assistant",
        image: "/alumnis/Alissa_Wilms.png",
        roleColor: "bg-gray-500",
    },
    {
        name: "Manuel Kolmet",
        role: "Co-Founder",
        image: "/alumnis/Manuel_Kolmet.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Giorgos Chnitidis",
        role: "Co-Founder",
        image: "/alumnis/Giorgos_Chnitidis.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Zeno Fox",
        role: "Co-Founder",
        image: "/alumnis/Zeno_Fox.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Christopher Masurek",
        role: "Co-Founder",
        image: "/alumnis/Christopher_Masurek.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Magomed Abdulaev",
        role: "Co-Founder",
        image: "/alumnis/Magomed_Abdulaev.png",
        roleColor: "bg-gray-500",
    },
    {
        name: "Thomas Hubregtsen",
        role: "Co-Founder, President",
        image: "/alumnis/Thomas_Hubregtsen.jpeg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Raúl Berganza Gómez",
        role: "Co Founder, President",
        image: "/alumnis/Raul_Berganza_Gomez.jpg",
        roleColor: "bg-gray-500",
    },
    {
        name: "Benjamin Schiffer",
        role: "Co-Founder, Head of Education",
        image: "/alumnis/Benjamin_Schiffer.JPG",
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
                className={`font-semibold text-pq-dark-purple ${hasEmail ? "group-hover:text-pq-bright-pink" : ""} transition-colors`}
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
                    <h2 className="text-3xl font-bold text-pq-dark-purple sm:text-4xl">
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
                <div className="w-24 h-1 bg-pq-bright-pink mx-auto mb-12" />

                {/* Department Heads Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
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
                        <h3 className="text-2xl font-bold text-pq-dark-purple">
                            Our Leadership Alumni
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

