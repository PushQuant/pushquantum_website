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

export function EventHero({ event }: { event: EventData }) {
  return (
    <section className="relative min-h-[320px] overflow-hidden pt-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${event.image}')` }}
      />
      <div className="absolute inset-0 bg-[#1a1a2e]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
          {event.title}
        </h1>

        {event.heroDescription && (
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
            {renderHeroDescription(event.heroDescription)}
          </p>
        )}

        {!event.heroDescription && (
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
            {event.shortDescription}
          </p>
        )}

        {event.signUpUrl && (
          <Link
            href={event.signUpUrl}
            className="inline-block text-sm font-semibold text-white bg-[#e91e8c] rounded-full px-7 py-3 hover:bg-[#d11a7d] transition-colors"
          >
            Sign up
          </Link>
        )}
      </div>
    </section>
  );
}
