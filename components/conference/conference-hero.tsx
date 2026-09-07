import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ConferenceHero() {
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

                <p className="text-sm font-semibold uppercase tracking-widest text-sky-400 mb-2">
                    Conference · Friday, November 20
                </p>
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
                    Frontiers in Quantum Science and Technology
                </h1>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                    A full day where quantum research meets real-world impact — talks
                    from leading researchers and pioneers, a Science Slam, a poster
                    session, and an industry meet & greet at the Research Campus
                    Garching.
                </p>
            </div>
        </section>
    );
}
