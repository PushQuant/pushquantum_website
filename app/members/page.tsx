import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MembershipHero } from "@/components/membership/membership-hero";
import { BenefitsSection } from "@/components/membership/benefits-section";
import { DepartmentsSection } from "@/components/membership/departments-section";
import { FAQSection } from "@/components/membership/faq-section";
import { MembershipCTASection } from "@/components/membership/membership-cta-section";

export const metadata: Metadata = {
    title: "Membership - PushQuantum",
    description:
        "Join PushQuantum and be at the center of the quantum revolution. Access courses, workshops, career support, and a vibrant community.",
};

export default function MembershipPage() {
    return (
        <>
            <MembershipHero />
            <BenefitsSection />
            <DepartmentsSection />
            <FAQSection />
            <MembershipCTASection />
        </>
    );
}
