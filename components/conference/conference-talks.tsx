import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { conferenceTalks } from "@/lib/conference-2026-data";

export function ConferenceTalks() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-2">
                    Talks & abstracts
                </h2>
                <p className="text-gray-600 mb-8">
                    Abstracts below are placeholders and will be updated as speakers
                    confirm their talks.
                </p>

                <Accordion type="single" collapsible className="w-full">
                    {conferenceTalks.map((talk, idx) => (
                        <AccordionItem key={idx} value={`talk-${idx}`}>
                            <AccordionTrigger className="text-left text-pq-dark-purple font-medium">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-pq-bright-pink">
                                        {talk.time} · {talk.kind}
                                    </span>
                                    <span>
                                        {talk.title}
                                        <span className="text-gray-500 font-normal">
                                            {" "}
                                            — {talk.speaker}
                                            {talk.affiliation ? `, ${talk.affiliation}` : ""}
                                        </span>
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                {talk.abstract}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
