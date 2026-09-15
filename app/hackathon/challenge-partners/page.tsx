import type { Metadata } from "next";
import { HackathonChallengeHero } from "@/components/hackathon/hackathon-challenge-hero";
import { HackathonChallengePartners } from "@/components/hackathon/hackathon-challenge-partners";

export const metadata: Metadata = {
    title: "Challenge Partners - PushQuantum Hackathon 2026",
    description:
        "Meet the industry and research challenge partners bringing real-world quantum problems to the PushQuantum Hackathon, November 20-22, 2026.",
};

export default function ChallengePartnersPage() {
    return (
        <>
            <HackathonChallengeHero />
            <HackathonChallengePartners />
        </>
    );
}
