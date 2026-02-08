"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { EventData, AgendaDay } from "@/lib/events-data";

function AgendaDayCard({ day }: { day: AgendaDay }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasEntries = day.entries && day.entries.length > 0;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <div>
          <h3 className="font-bold text-[#e91e8c] text-base">{day.label}</h3>
          {day.description && !hasEntries && (
            <p className="text-sm text-gray-600 mt-1">{day.description}</p>
          )}
        </div>
        {hasEntries && (
          <span className="text-gray-400 flex-shrink-0 ml-4">
            {isOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </span>
        )}
      </button>

      {isOpen && hasEntries && (
        <div className="border-t border-gray-100 p-5 bg-white">
          <div className="flex flex-col gap-3">
            {day.entries.map((entry, idx) => (
              <div key={idx} className="flex gap-4">
                {entry.time && (
                  <span className="text-sm font-semibold text-[#1a1a2e] w-28 flex-shrink-0">
                    {entry.time}
                  </span>
                )}
                <span
                  className={`text-sm text-gray-600 ${!entry.time ? "ml-28" : ""}`}
                >
                  {entry.title}
                </span>
              </div>
            ))}
          </div>

          {day.description && (
            <p className="text-sm text-gray-500 mt-4 italic">
              {day.description}
            </p>
          )}
        </div>
      )}

      {/* If no entries, just show description in collapsed view */}
      {!hasEntries && day.description && (
        <div className="border-t border-gray-100 p-5 bg-white">
          <p className="text-sm text-gray-600">{day.description}</p>
          {day.entries === undefined && (
            <span className="inline-block mt-3 text-xs font-medium text-white bg-[#e91e8c] rounded-full px-4 py-1.5">
              Learn more
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export function EventAgenda({ event }: { event: EventData }) {
  if (!event.agenda || event.agenda.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-[#f9fafb]">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl mb-8">
          Agenda
        </h2>

        <div className="flex flex-col gap-4">
          {event.agenda.map((day, idx) => (
            <AgendaDayCard key={idx} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}
