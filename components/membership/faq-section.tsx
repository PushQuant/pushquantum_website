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
      "PushQuantum is an online platform dedicated to providing high-quality education and resources in the field of quantum technology. We offer a range of courses, projects, and community support to help individuals become quantum tech experts.",
  },
  {
    question: "How do I become a member?",
    answer:
      "You can become a member by clicking the 'Become a Member' button and filling out the application form. Our team will review your application and get back to you within a few days.",
  },
  {
    question: "What are the benefits of membership?",
    answer:
      "Members get access to exclusive courses, workshops, networking events, career support, exchange programs, and certifications. You'll also join a vibrant community of like-minded individuals passionate about quantum technology.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "PushQuantum offers different membership tiers. Basic membership is free and gives you access to community events and resources. Premium memberships with additional benefits are available for a small fee.",
  },
];

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
