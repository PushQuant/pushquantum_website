import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { OfferingsSection } from "@/components/offerings-section";
import { AboutSection } from "@/components/about-section";
import { EventsSection } from "@/components/events-section";
import { PartnersSection } from "@/components/partners-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <OfferingsSection />
                <EventsSection />
                <PartnersSection />
                <CommunitySection />
            </main>
            <Footer />
        </>
    );
}
