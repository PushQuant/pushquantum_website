import Link from "next/link";
import type { EventData } from "@/lib/events-data";

export function EventKeyFacts({ event }: { event: EventData }) {
  if (!event.keyFacts) return null;

  const facts = event.keyFacts;

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-8">
          Key facts
        </h2>

        <div className="flex flex-col gap-6">
          {facts.when && (
            <div>
              <h3 className="font-bold text-pq-dark-purple">When?</h3>
              <p className="text-gray-600 mt-1">{facts.when}</p>
            </div>
          )}

          {facts.where && (
            <div>
              <h3 className="font-bold text-pq-dark-purple">Where?</h3>
              <p className="text-gray-600 mt-1">{facts.where}</p>
            </div>
          )}

          {facts.forWhom && (
            <div>
              <h3 className="font-bold text-pq-dark-purple">For whom?</h3>
              <p className="text-gray-600 mt-1">{facts.forWhom}</p>
            </div>
          )}

          {facts.whatToExpect && (
            <div>
              <h3 className="font-bold text-pq-dark-purple">What to expect?</h3>
              <p className="text-gray-600 mt-1">{facts.whatToExpect}</p>
            </div>
          )}
        </div>

        {event.signUpUrl && (
          <div className="mt-8">
            <Link
              href={event.signUpUrl}
              className="inline-block text-sm font-semibold text-white bg-pq-bright-pink rounded-full px-7 py-3 hover:bg-pq-dark-pink transition-colors"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
