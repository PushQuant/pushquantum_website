"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is PushQuantum?",
        answer:
            "PushQuantum is a Munich-based student club. We offer real-world focused education in quantum tech for students from all disciplines.",
    },
    {
        question: "How do I become a member?",
        answer:
            "We have application phases at the beginning of each semester, i.e., twice a year. If you get an acceptance letter, come to our Welcome Event to become a member! We are looking forward to meeting you! Feel free to approach us any time during the semester for questions about PushQuantum, or join one of our events to get to know us.",
    },
    {
        question: "What are the benefits of membership?",
        answer:
            "Members get access to a network of leading quantum initiatives and the thriving Munich ecosystem, the opportunity to gain important soft skills by working on projects and organizing events. You'll also join a vibrant community of like-minded individuals passionate about quantum technology.",
    }];
export function FAQSection() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl text-center mb-12">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                            <AccordionTrigger className="text-left text-[#1a1a2e] hover:text-[#e91e8c] py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#1a1a2e]/70 pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
