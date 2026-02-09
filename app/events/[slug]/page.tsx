import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventHero } from "@/components/events/event-hero";
import { EventKeyFacts } from "@/components/events/event-key-facts";
import { EventAgenda } from "@/components/events/event-agenda";
import { EventSponsors } from "@/components/events/event-sponsors";
import { EventPartners } from "@/components/events/event-partners";
import { EventFaq } from "@/components/events/event-faq";
import { EventContact } from "@/components/events/event-contact";
import { getEventBySlug, events } from "@/lib/events-data";

export async function generateStaticParams() {
    return events.map((event) => ({
        slug: event.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const event = getEventBySlug(slug);
    if (!event) return { title: "Event Not Found" };

    return {
        title: `${event.title} - PushQuantum Events`,
        description: event.shortDescription,
    };
}

export default async function EventPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const event = getEventBySlug(slug);

    if (!event) {
        notFound();
    }

    return (
        <>
            <EventHero event={event} />
            <EventKeyFacts event={event} />
            <EventAgenda event={event} />
            <EventSponsors event={event} />
            <EventPartners event={event} />
            <EventFaq event={event} />
            <EventContact event={event} />
        </>
    );
}
