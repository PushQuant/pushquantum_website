import Link from "next/link";
import type { EventData } from "@/lib/events-data";

function renderHeroDescription(text: string) {
    // Convert **bold** markers to <strong> tags
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1 ? (
            <strong key={i} className="font-bold text-white">
                {part}
            </strong>
        ) : (
            <span key={i}>{part}</span>
        )
    );
}

export function EventHero({
    event,
    ctaVariant = "default",
}: {
    event: EventData;
    ctaVariant?: "default" | "wide-centered";
}) {
    const isWideCentered = ctaVariant === "wide-centered";

    return (
        <section className="relative min-h-[320px] overflow-hidden pt-24">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${event.image}')` }}
            />
            <div className="absolute inset-0 bg-pq-dark-purple/80" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
                <h1
                    className={`text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4 ${isWideCentered ? "text-center" : ""}`}
                >
                    {event.title}
                </h1>

                {event.heroDescription && (
                    <p
                        className={`text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mb-6 ${isWideCentered ? "mx-auto text-center" : ""}`}
                    >
                        {renderHeroDescription(event.heroDescription)}
                    </p>
                )}

                {!event.heroDescription && (
                    <p
                        className={`text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mb-6 ${isWideCentered ? "mx-auto text-center" : ""}`}
                    >
                        {event.shortDescription}
                    </p>
                )}

                {event.signUpUrl && isWideCentered && (
                    <div className="flex justify-center mt-8">
                        {event.signUpDisabled ? (
                            <span
                                aria-disabled="true"
                                title="Sign up is temporarily unavailable"
                                className="block w-full max-w-md text-center text-base font-semibold text-gray-400 bg-gray-200 rounded-full px-10 py-4 cursor-not-allowed select-none"
                            >
                                Sign up
                            </span>
                        ) : (
                            <Link
                                href={event.signUpUrl}
                                className="block w-full max-w-md text-center text-base font-semibold text-white bg-pq-bright-pink rounded-full px-10 py-4 shadow-lg shadow-pq-bright-pink/30 hover:bg-pq-dark-pink transition-colors"
                            >
                                Sign up
                            </Link>
                        )}
                    </div>
                )}

                {event.signUpUrl && ctaVariant === "default" && (
                    event.signUpDisabled ? (
                        <span
                            aria-disabled="true"
                            title="Sign up is temporarily unavailable"
                            className="inline-block text-sm font-semibold text-gray-400 bg-gray-200 rounded-full px-7 py-3 cursor-not-allowed select-none"
                        >
                            Sign up
                        </span>
                    ) : (
                        <Link
                            href={event.signUpUrl}
                            className="inline-block text-sm font-semibold text-white bg-pq-bright-pink rounded-full px-7 py-3 hover:bg-pq-dark-pink transition-colors"
                        >
                            Sign up
                        </Link>
                    )
                )}
            </div>
        </section>
    );
}
