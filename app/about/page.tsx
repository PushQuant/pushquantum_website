import { AboutHero } from "@/components/about/about-hero";
import { MissionSection } from "@/components/about/mission-section";
import { WhatWeDoSection } from "@/components/about/what-we-do-section";
import { OurStorySection } from "@/components/about/our-story-section";
import { TeamSection } from "@/components/about/team-section";
import { ContactSection } from "@/components/about/contact-section";

export const metadata = {
    title: "About - PushQuantum",
    description: "Learn about PushQuantum, our mission, story, and team dedicated to advancing quantum computing education.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <MissionSection />
            <WhatWeDoSection />
            <OurStorySection />
            <TeamSection />
            <ContactSection />
        </>
    );
}
