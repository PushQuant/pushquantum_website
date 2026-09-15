import Link from "next/link";
import type { EventData } from "@/lib/events-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EventFaq({
  event,
  allowMultipleOpen = false,
}: {
  event: EventData;
  allowMultipleOpen?: boolean;
}) {
  if (!event.faq || event.faq.length === 0) return null;

  const faqItems = event.faq.map((item, idx) => (
    <AccordionItem key={idx} value={`faq-${idx}`}>
      <AccordionTrigger className="text-left text-pq-dark-purple font-medium">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  ));

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-8">
          FAQs
        </h2>

        {allowMultipleOpen ? (
          <Accordion type="multiple" className="w-full">
            {faqItems}
          </Accordion>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {faqItems}
          </Accordion>
        )}

        {event.signUpUrl && (
          <div className="flex justify-center mt-8">
            <Link
              href={event.signUpUrl}
              className="inline-block text-sm font-semibold text-white bg-pq-bright-pink rounded-full px-7 py-3 hover:bg-pq-dark-pink transition-colors"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
