import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import type { EventData } from "@/lib/events-data";

export function HackathonContact({ event }: { event: EventData }) {
  if (!event.organizers || event.organizers.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-[#f9fafb]">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-2 text-center">
          Contact
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Do you still have any questions? Feel free to contact us at hackathon@pushquantum.tech!
        </p>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {event.organizers.map((organizer) => (
            <div
              key={organizer.name}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
                <Image
                  src={organizer.image || "/placeholder.svg"}
                  alt={organizer.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>

              <h3 className="font-bold text-pq-dark-purple text-lg">
                {organizer.name}
              </h3>

              <p className="text-sm text-pq-bright-pink font-medium mt-1">
                {organizer.position}
              </p>

              <a
                href={`mailto:${organizer.email}`}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-pq-dark-purple mt-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {organizer.email}
              </a>

              {organizer.linkedin && (
                <Link
                  href={organizer.linkedin}
                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-pq-dark-purple mt-1 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Link
                </Link>
              )}
            </div>
          ))}
        </div>

        {event.signUpUrl && (
          <div className="flex justify-center mt-10">
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
