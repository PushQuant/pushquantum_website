import { ArrowRight } from "lucide-react";
import Link from "next/link";

const offerings = [
  { title: "Sustainability", href: "#" },
  { title: "Entrepreneurship", href: "#" },
  { title: "Quantentraeume", href: "#" },
  { title: "Company Visits", href: "#" },
  { title: "Professional Support", href: "#" },
  { title: "Climate Initiatives", href: "#" },
  { title: "Bootcamps", href: "#" },
];

export function OfferingsSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Offerings
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Discover what PushQuantum has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offerings.map((offering) => (
            <Link
              key={offering.title}
              href={offering.href}
              className="group flex items-center justify-between p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-foreground font-medium">{offering.title}</span>
              <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
