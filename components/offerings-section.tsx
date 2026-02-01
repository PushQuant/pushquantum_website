
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const offerings = [
    { title: "Sustainability", href: "#" },
    { title: "Entrepreneurship", href: "#" },
    { title: "Quantentraeume", href: "#" },
    { title: "Company Visits", href: "#" },
    { title: "Professional Support", href: "#" },
    { title: "Climate Initiatives", href: "#" },
    { title: "Bootcamps", href: "#" },
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
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#e91e8c] via-[#e91e8c]/50 to-[#e91e8c]/20 blur-[2px]" />

                    {/* Card */}
                    <div className="relative rounded-2xl bg-[#0d1033]/90 backdrop-blur-sm border border-[#e91e8c]/30 p-8 lg:p-10">
                        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">
                            Our Offerings
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
                                    <ChevronRight className="size-5 text-[#e91e8c]" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

