import Link from "next/link";
import { ArrowRight } from "lucide-react";

const events = [
    {
        date: { month: "NOV", day: "20" },
        title: "Conference + Hackathon 2026",
        description: "A 3-day challenge of full immersion in the world of quantum technologies",
        href: "/hackathon",
    },
    {
        date: { month: "NOV", day: "02" },
        title: "Quantum Entrepreneurship Lab",
        description: "A project-based course uniting students from diverse backgrounds",
        href: "#",
    },
    {
        date: { month: "NOV", day: "12" },
        title: "Leadership Series: Talk by Prof. Ignacio",
        description: "Career talks of various leaders from different fields of quantum.",
        href: "#",
    },
];

export function EventsSection() {
    return (
        <section id="events" className="py-24 px-6 bg-card/50 bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl pb-5 font-bold text-pq-dark-purple sm:text-4xl">
                            Event Spotlight
                        </h2>
                        <p className="text-pq-dark-purple ">
                            Discover what PushQuantum has to offer.
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                        See all
                        <ArrowRight className="size-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div
                            key={event.title}
                            className="group p-6 rounded-xl bg-pq-dark-purple border border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary">
                                    <span className="text-xs font-medium uppercase text-pq-bright-pink">{event.date.month}</span>
                                    <span className="text-xl font-bold text-pq-bright-pink">{event.date.day}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-foreground font-semibold text-lg">
                                        {event.title}
                                    </h3>
                                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                                        {event.description}
                                    </p>
                                    <Link
                                        href={event.href}
                                        className="inline-flex items-center gap-1 mt-4 text-sm text-pq-bright-pink hover:underline"
                                    >
                                        Learn More
                                        <ArrowRight className="size-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
