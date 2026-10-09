"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { challengePartners, type ChallengePartner } from "@/lib/hackathon-2026-data";

function ChallengePartnerCard({ partner }: { partner: ChallengePartner }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasDetails = Boolean(partner.details || partner.contact);

    const summary = (
        <>
            <div className="relative w-full h-16 mb-4">
                <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain object-left"
                    sizes="240px"
                />
            </div>
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="font-bold text-pq-dark-purple mb-1">
                        {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
                {hasDetails && (
                    <span className="text-pq-dark-purple flex-shrink-0 mt-0.5">
                        {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </span>
                )}
            </div>
        </>
    );

    return (
        <div className="flex flex-col rounded-xl border border-gray-200 overflow-hidden">
            {hasDetails ? (
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    className="w-full p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                    {summary}
                </button>
            ) : (
                <div className="p-6">{summary}</div>
            )}

            {isOpen && hasDetails && (
                <div className="border-t border-gray-100 p-6 bg-white flex flex-col gap-6">
                    {partner.details && (
                        <div className="flex flex-col gap-3">
                            {partner.details.map((paragraph) => (
                                <p key={paragraph} className="text-gray-600 text-sm">
                                    {paragraph}
                                </p>
                            ))}
                            {partner.website && (
                                <p className="text-gray-600 text-sm">
                                    More information:{" "}
                                    <a
                                        href={partner.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-pq-dark-purple underline hover:text-pq-bright-pink transition-colors"
                                    >
                                        {partner.website.replace(/^https?:\/\//, "")}
                                    </a>
                                </p>
                            )}
                        </div>
                    )}
                    {partner.contact && (
                        <div className="flex flex-col gap-3">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden">
                                <Image
                                    src={partner.contact.image}
                                    alt={partner.contact.name}
                                    fill
                                    className="object-cover"
                                    sizes="96px"
                                />
                            </div>
                            {partner.contact.intro.map((paragraph) => (
                                <p key={paragraph} className="text-gray-600 text-sm">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export function HackathonChallengePartners() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-8">
                    Meet the challenge partners
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    {challengePartners.map((partner) => (
                        <ChallengePartnerCard key={partner.name} partner={partner} />
                    ))}
                </div>
            </div>
        </section>
    );
}
