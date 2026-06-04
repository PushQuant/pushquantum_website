
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const offerings = [
    { title: "Quantum Entrepreneurship Laboratory", href: "#" },
    { title: "Quantum Hackathon", href: "#" },
    { title: "Quantentraeume", href: "#" },
    { title: "International Exchanges", href: "#" },
    { title: "Company Visits", href: "#" },
    { title: "Workshops", href: "#" },
    { title: "Qurie - Women in Quantum", href: "#" },
    { title: "Journal Club", href: "#" },
];

export function OfferingsSection() {
    return (
        <section className="relative min-h-[600px] bg-[#0a0a12] overflow-hidden">
            {/* Background wave mesh image - full width, no repeat */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
                style={{ backgroundImage: "url('/offerings-bg.svg')" }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-24">
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
                                    className="group flex items-center justify-between py-3 text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary/20"
                                >
                                    <span className="text-base font-medium lg:text-lg">
                                        {offering.title}
                                    </span>
                                    <ChevronRight className="size-5 text-pq-bright-pink" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

