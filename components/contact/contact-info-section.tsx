
import { MessageSquare, Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const contactCards = [
    {
        icon: MessageSquare,
        title: "Location",
        lines: [
            "PushQuantum e.V.",
            "Situlistraße 44",
            "80939 München, Germany",
        ],
    },
    {
        icon: Mail,
        title: "E-Mail",
        lines: ["info@pushquantum.de"],
    },
];

const socialCards = [
    {
        icon: Instagram,
        title: "Instagram",
        href: "https://www.instagram.com/pushquantum_ev/",
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/push-quantum/",
    },
];

export function ContactInfoSection() {
    return (
        <section className="py-16 px-6 bg-[#f3f4f6]">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-pq-dark-purple sm:text-4xl">
                    Any remaining Questions?
                </h2>
                <p className="mt-3 text-pq-dark-purple">Feel free to reach out to us!</p>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                    {contactCards.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-2xl bg-pq-dark-purple p-6 text-left"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 mb-4">
                                <card.icon className="size-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {card.title}
                            </h3>
                            {card.lines.map((line) => (
                                <p key={line} className="text-sm text-gray-300">
                                    {line}
                                </p>
                            ))}
                        </div>
                    ))}

                    {socialCards.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-2xl bg-pq-dark-purple p-6 text-left"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 mb-4">
                                <card.icon className="size-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">
                                {card.title}
                            </h3>
                            <Link
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-full border border-white text-white text-sm px-6 py-2 hover:bg-white hover:text-pq-dark-purple transition-colors"
                            >
                                Follow us!
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
