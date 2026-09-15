import Image from "next/image";
import Link from "next/link";
import type { EventData } from "@/lib/events-data";

function PartnerLogoCard({
  partner,
}: {
  partner: NonNullable<EventData["partners"]>[number];
}) {
  return (
    <div className="flex items-center justify-center p-6 rounded-xl border border-gray-200 bg-white w-36 h-28 shrink-0">
      <div className="relative w-full h-16">
        <Image
          src={partner.logo || "/placeholder.svg"}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="144px"
        />
      </div>
    </div>
  );
}

export function HackathonPartners({ event }: { event: EventData }) {
  if (!event.partners || event.partners.length === 0) return null;

  const firstRow = event.partners.slice(0, 5);
  const secondRow = event.partners.slice(5);

  return (
    <section className="py-16 px-6 bg-[#f9fafb]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-8">
          Our partners
        </h2>

        <div className="space-y-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {firstRow.map((partner) => (
              <PartnerLogoCard key={partner.name} partner={partner} />
            ))}
          </div>

          {secondRow.length > 0 && (
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
              {secondRow.map((partner) => (
                <PartnerLogoCard key={partner.name} partner={partner} />
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/partners"
            className="text-sm font-medium text-pq-bright-pink border border-pq-bright-pink rounded-full px-6 py-2 hover:bg-pq-bright-pink hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
