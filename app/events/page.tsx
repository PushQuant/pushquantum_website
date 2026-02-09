import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EventsHero } from "@/components/events/events-hero";
import { HighlightsSection } from "@/components/events/highlights-section";
import { UpcomingEventsSection } from "@/components/events/upcoming-events-section";
import { PastEventsSection } from "@/components/events/past-events-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events - PushQuantum",
    description:
        "Discover various activities and events offered by PushQuantum.",
};

export default function EventsPage() {
    return (
        <>
            <EventsHero />
            <HighlightsSection />
            <UpcomingEventsSection />
            <PastEventsSection />
        </>
    );
}
