import Image from "next/image";
import type { EventData } from "@/lib/events-data";

export function EventGallery({ event }: { event: EventData }) {
    if (!event.gallery || event.gallery.length === 0) return null;

    return (
        <section className="bg-[#f9fafb] px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-8 text-center text-2xl font-bold text-pq-dark-purple sm:text-3xl">
                    Event impressions
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {event.gallery.map((photo) => (
                        <div
                            key={photo.src}
                            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
