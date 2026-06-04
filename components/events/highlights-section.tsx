import Link from "next/link";
import Image from "next/image";
import { getHighlightEvents } from "@/lib/events-data";

export function HighlightsSection() {
  const highlights = getHighlightEvents();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-pq-dark-purple text-center sm:text-4xl mb-10">
          Our Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs text-gray-500 mb-1">{event.date}</p>
                <h3 className="font-bold text-pq-dark-purple text-lg mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {event.shortDescription}
                </p>
                <span className="inline-block text-sm font-medium text-pq-dark-purple border border-pq-dark-purple rounded-full px-4 py-1.5 w-fit group-hover:bg-pq-dark-purple group-hover:text-white transition-colors">
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
