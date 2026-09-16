import Image from "next/image";
import { challengePartners } from "@/lib/hackathon-2026-data";

export function HackathonChallengePartners() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-8">
                    Meet the challenge partners
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {challengePartners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex flex-col rounded-xl border border-gray-200 p-6"
                        >
                            <div className="relative w-full h-16 mb-4">
                                <Image
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    fill
                                    className="object-contain object-left"
                                    sizes="240px"
                                />
                            </div>
                            <h3 className="font-bold text-pq-dark-purple mb-1">
                                {partner.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
