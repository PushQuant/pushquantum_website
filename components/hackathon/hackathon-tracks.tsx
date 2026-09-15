import Link from "next/link";
import { Check } from "lucide-react";

const conferenceHighlights = [
    "Talks — Industry x Research x Students",
    "Networking, Science Slam & Posters",
    "Meet & greet with speakers and partners",
];

const hackathonHighlights = [
    "Real-world quantum challenges",
    "24 hours of hacking — build & prototype in teams",
    "Mentoring, demos & awards",
    "Network with students, researchers & industry across Europe",
];

export function HackathonTracks() {
    return (
        <section className="py-16 px-6 bg-[#0a0a12] overflow-hidden">
            <div className="mx-auto max-w-5xl">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-pq-bright-pink mb-2">
                    Choose your experience
                </p>
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl mb-12">
                    One community. Two events.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Conference card */}
                    <div className="flex flex-col rounded-2xl border border-sky-400/40 bg-[#0d1033]/60 p-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400 mb-1">
                            Conference
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-1">Nov 20</h3>
                        <p className="text-sm text-gray-400 mb-6">Conference · €5</p>

                        <ul className="flex flex-col gap-3 flex-1">
                            {conferenceHighlights.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="size-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/hackathon/conference"
                            className="block w-full text-center mt-8 text-base font-semibold text-white bg-sky-400 rounded-full px-8 py-4 shadow-lg shadow-sky-400/30 hover:bg-sky-300 transition-colors"
                        >
                            Explore the Conference
                        </Link>
                    </div>

                    {/* Hackathon card */}
                    <div className="flex flex-col rounded-2xl border border-pq-bright-pink/40 bg-[#0d1033]/60 p-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-pq-bright-pink mb-1">
                            Hackathon
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-1">Nov 20-22</h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Hackathon · €10 &nbsp;
                        </p>

                        <ul className="flex flex-col gap-3 flex-1">
                            {hackathonHighlights.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="size-5 text-pq-bright-pink flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/hackathon/challenge-partners"
                            className="block w-full text-center mt-8 text-base font-semibold text-white bg-pq-bright-pink rounded-full px-8 py-4 shadow-lg shadow-pq-bright-pink/30 hover:opacity-90 transition-opacity"
                        >
                            Explore the Hackathon
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
