import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-pq-light-purple to-pq-dark-purple">
            <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

                    {/* LEFT CONTENT */}
                    <div className="relative z-10">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
                            Your Quantum <br />
                            Community in <br />
                            <span className="text-white">Munich</span>
                        </h1>

                        <p className="mt-6 max-w-md text-lg text-white/80">
                            Exploring the edge of quantum reality together.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="mt-8 flex items-center gap-4">
                            <button className="rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-pink-400">
                                Join Us
                            </button>

                            <button className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                Learn More
                            </button>
                        </div>

                        {/* SOCIALS */}
                        <div className="mt-10 flex gap-5 text-white/80">
                            <a
                                href="#"
                                className="transition hover:text-white"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="transition hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}

                    {/* RIGHT VISUAL */}
                    <div className="relative">
                        <div className="relative w-full max-w-xl mx-auto">
                            <Image
                                src="/logos/pq/artsy_pq_logo.svg"
                                alt="Quantum abstract shape"
                                width={500}
                                height={500}
                                priority
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
