"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPastEvents, groupEventsByYear } from "@/lib/events-data";
import type { EventData } from "@/lib/events-data";

function PastEventCard({ event }: { event: EventData }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 p-5 rounded-xl border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative w-full sm:w-36 h-28 sm:h-auto rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs text-gray-500">{event.date}</span>
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-pq-dark-purple text-white px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-pq-dark-purple text-lg mb-1">
          {event.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {event.shortDescription}
        </p>

        <Link
          href={`/events/${event.slug}`}
          className="text-sm font-medium text-pq-dark-purple border border-pq-dark-purple rounded-full px-5 py-1.5 w-fit hover:bg-pq-dark-purple hover:text-white transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

export function PastEventsSection() {
  const [showAll, setShowAll] = useState(false);
  const pastEvents = getPastEvents();
  const grouped = groupEventsByYear(pastEvents);

  // Show limited number initially
  const visibleGroups = showAll ? grouped : grouped.slice(0, 2);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-pq-dark-purple text-center sm:text-4xl mb-10">
          Past Events
        </h2>

        {visibleGroups.map((group) => (
          <div key={group.year} className="mb-10">
            <h3 className="text-xl font-bold text-pq-dark-purple mb-4">
              {group.year}
            </h3>
            <div className="flex flex-col gap-4">
              {group.events.map((event) => (
                <PastEventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        ))}

        {!showAll && grouped.length > 2 && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="text-sm font-medium text-pq-dark-purple border border-pq-dark-purple rounded-full px-6 py-2 hover:bg-pq-dark-purple hover:text-white transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
