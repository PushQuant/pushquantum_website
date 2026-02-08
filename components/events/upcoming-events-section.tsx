"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getUpcomingEvents, groupEventsByMonth } from "@/lib/events-data";
import type { EventData, EventTag } from "@/lib/events-data";

const filterTabs: { label: string; tag: EventTag | "all" }[] = [
  { label: "All events", tag: "all" },
  { label: "Sustainability", tag: "Sustainability" },
  { label: "Entrepreneurship", tag: "Entrepreneurship" },
  { label: "Community", tag: "Community" },
  { label: "Leadership", tag: "Leadership" },
];

function EventCard({ event }: { event: EventData }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 p-5 rounded-xl border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative w-full sm:w-40 h-32 sm:h-auto rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs text-gray-500">{event.date}</span>
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#1a1a2e] text-white px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-[#1a1a2e] text-lg mb-1">
          {event.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {event.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {event.signUpUrl && (
            <Link
              href={event.signUpUrl}
              className="text-sm font-medium text-white bg-[#e91e8c] rounded-full px-5 py-1.5 hover:bg-[#d11a7d] transition-colors"
            >
              Sign up
            </Link>
          )}
          <Link
            href={`/events/${event.slug}`}
            className="text-sm font-medium text-[#1a1a2e] border border-[#1a1a2e] rounded-full px-5 py-1.5 hover:bg-[#1a1a2e] hover:text-white transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export function UpcomingEventsSection() {
  const [activeFilter, setActiveFilter] = useState<EventTag | "all">("all");

  const upcoming = getUpcomingEvents();

  const filtered =
    activeFilter === "all"
      ? upcoming
      : upcoming.filter((e) => e.tags.includes(activeFilter));

  const grouped = groupEventsByMonth(filtered);

  return (
    <section className="py-16 px-6 bg-[#f9fafb]">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center sm:text-4xl mb-8">
          Upcoming Events
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.tag}
              type="button"
              onClick={() => setActiveFilter(tab.tag)}
              className={`text-sm font-medium rounded-full px-5 py-2 border transition-colors ${
                activeFilter === tab.tag
                  ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                  : "bg-white text-[#1a1a2e] border-gray-300 hover:border-[#1a1a2e]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grouped by month */}
        {grouped.map((group) => (
          <div key={group.month} className="mb-10">
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">
              {group.month}
            </h3>
            <div className="flex flex-col gap-4">
              {group.events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        ))}

        {grouped.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No upcoming events in this category.
          </p>
        )}
      </div>
    </section>
  );
}
