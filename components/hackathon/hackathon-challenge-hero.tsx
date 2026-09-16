import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function HackathonChallengeHero() {
    return (
        <section className="relative min-h-[320px] overflow-hidden pt-24">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/events/placeholder-quantum-1.png')" }}
            />
            <div className="absolute inset-0 bg-pq-dark-purple/80" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
                <Link
                    href="/hackathon"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors mb-4"
                >
                    <ArrowLeft className="size-4" />
                    Back to Conference + Hackathon 2026
                </Link>

                <p className="text-sm font-semibold uppercase tracking-widest text-pq-bright-pink mb-2">
                    Hackathon · November 20-22
                </p>
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
                    Challenge Partners
                </h1>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                    Our challenge partners bring real-world quantum problems from
                    industry and research straight to your team. Over 24 hours,
                    you&apos;ll get mentoring, access to quantum hardware and software,
                    and the chance to turn their challenges into working prototypes.
                    <br />
                    <br />
                    Challenges are presented live at the mandatory kick-off on the
                    afternoon of November 20.
                </p>
            </div>
        </section>
    );
}
