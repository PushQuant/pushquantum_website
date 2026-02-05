
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoSection } from "@/components/contact/contact-info-section";

export const metadata: Metadata = {
    title: "Contact - PushQuantum",
    description:
        "Get in touch with PushQuantum. Reach out for questions about membership, partnerships, or general inquiries.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <ContactHero />
                <ContactForm />
                <ContactInfoSection />
            </main>
            <Footer />
        </>
    );
}
