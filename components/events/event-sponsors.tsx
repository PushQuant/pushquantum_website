import Image from "next/image";
import Link from "next/link";
import type { EventData } from "@/lib/events-data";

export function EventSponsors({ event }: { event: EventData }) {
  if (!event.sponsors || event.sponsors.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl mb-8">
          Company challenges
        </h2>

        <div className="flex flex-col gap-6">
          {event.sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-gray-200 bg-[#f9fafb]"
            >
              {/* Logo */}
              <div className="relative w-40 h-20 flex-shrink-0 flex items-center">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-[#1a1a2e] text-lg mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {sponsor.description}
                </p>
                {sponsor.url && (
                  <Link
                    href={sponsor.url}
                    className="text-sm font-medium text-[#1a1a2e] border border-[#1a1a2e] rounded-full px-5 py-1.5 w-fit hover:bg-[#1a1a2e] hover:text-white transition-colors"
                  >
                    Learn more
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
