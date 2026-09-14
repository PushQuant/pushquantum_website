import type { Metadata } from "next";
import { EventHero } from "@/components/events/event-hero";
import { HackathonTracks } from "@/components/hackathon/hackathon-tracks";
import { EventKeyFacts } from "@/components/events/event-key-facts";
import { EventAgenda } from "@/components/events/event-agenda";
import { HackathonPartners } from "@/components/hackathon/hackathon-partners";
import { EventFaq } from "@/components/events/event-faq";
import { HackathonContact } from "@/components/hackathon/hackathon-contact";
import { hackathon2026 } from "@/lib/hackathon-2026-data";

export const metadata: Metadata = {
    title: "Conference + Hackathon 2026 - PushQuantum",
    description: hackathon2026.shortDescription,
};

// Only the hero shows the sign-up button; the other sections
// get a variant without signUpUrl so they don't render their own.
const eventWithoutSignUp = { ...hackathon2026, signUpUrl: undefined };

export default function HackathonPage() {
    return (
        <>
            <EventHero event={hackathon2026} ctaVariant="wide-centered" />
            <HackathonTracks />
            <EventKeyFacts event={eventWithoutSignUp} />
            <EventAgenda event={hackathon2026} />
            <HackathonPartners event={hackathon2026} />
            <EventFaq event={eventWithoutSignUp} allowMultipleOpen />
            <HackathonContact event={eventWithoutSignUp} />
        </>
    );
}
