"use client";
import Link from "next/link";
import Image from "next/image";

const partners = [
    {
        name: "Munich Quantum Valley",
        logo: "/logos/partners/mqv/MQV.png",
    },
    {
        name: "MCQST",
        logo: "/logos/partners/mcqst/MCQST_Logo_BlueBlack.png",
    },
    {
        name: "TUM Venture Labs",
        logo: "/logos/partners/tum_vl/svg/tumvl_logo_schwarz_rgb.svg",
    },
    {
        name: "MQI",
        logo: "/logos/partners/mqi/MQI_logo_only_quantum_blue.svg",
    },
    {
        name: "Aqora",
        logo: "/logos/partners/aquora/Aquora.svg",
    },
    {
        name: "BMFTR",
        logo: "/logos/partners/bmftr/BMFTR.jpg",
    },
    {
        name: "Invest in Bavaria",
        logo: "/logos/partners/invest_in_bavaria/Invest_in_Bavaria.png",
    },
    {
        name: "Quandela",
        logo: "/logos/partners/quandela/Quandela.png",
    },
    {
        name: "Peak Quantum",
        logo: "/logos/partners/peak_quantum/peak_quantum_black.svg"
    }
];

export function PartnersSection() {
    const text = "We collaborate with academic institutions, industry leaders, and community organizations that share our passion for advancing quantum science. Our partners support our programs, contribute expertise, and help create opportunities for learning and innovation. Together, we build bridges between research, education, and real-world impact.\nIs your organisation ready to shape the future of quantum? Join PushQuantum in supporting the next generation of talent. Reach out today to explore how we can drive meaningful impact together."
    return (
        <section id="partners" className="py-24 px-6 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-pq-dark-purple sm:text-4xl">
                            Our Partners
                        </h2>
                        <p className="mt-6 text-pq-dark-purple leading-relaxed max-w-lg" style={{ whiteSpace: 'pre-line' }}>
                            {text}
                        </p>
                        <Link href="#" className="inline-block mt-8">
                            <button className="rounded-full px-7 py-3 text-sm font-semibold text-pq-dark-purple transition border border-pq-dark-purple hover:bg-primary hover:text-white hover:border-primary">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    {/* Auto-scrolling carousel */}
                    <div className="relative">
                        <div className="flex flex-col gap-4">
                            {/* Row 1 - scrolls left */}
                            <div className="relative overflow-hidden">
                                <div className="flex gap-4 animate-scroll-left">
                                    {[...partners, ...partners].map((partner, index) => (
                                        <div
                                            key={`row1-${partner.name}-${index}`}
                                            className="flex-shrink-0 flex items-center justify-center p-4 rounded-xl bg-white border border-gray-200 hover:border-primary/30 transition-colors w-32 h-32"
                                        >
                                            <div className="relative w-full h-16">
                                                <Image
                                                    src={partner.logo || "/placeholder.svg"}
                                                    alt={partner.name}
                                                    fill
                                                    sizes="128px"
                                                    className="object-contain transition-all duration-300 hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2 - scrolls right */}
                            <div className="relative overflow-hidden">
                                <div className="flex gap-4 animate-scroll-right">
                                    {[
                                        ...partners.slice(4),
                                        ...partners.slice(0, 4),
                                        ...partners.slice(4),
                                        ...partners.slice(0, 4),
                                    ].map((partner, index) => (
                                        <div
                                            key={`row2-${partner.name}-${index}`}
                                            className="flex-shrink-0 flex items-center justify-center p-4 rounded-xl bg-white border border-gray-200 hover:border-primary/30 transition-colors w-32 h-32"
                                        >
                                            <div className="relative w-full h-16">
                                                <Image
                                                    src={partner.logo || "/placeholder.svg"}
                                                    alt={partner.name}
                                                    fill
                                                    sizes="128px"
                                                    className="object-contain transition-all duration-300 hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Fade edges */}
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

