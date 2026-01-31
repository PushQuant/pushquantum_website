import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "Munich Quantum Valley", logo: "MQV" },
  { name: "Partner Network", logo: "PN" },
  { name: "Venture Labs", logo: "VL" },
  { name: "TUM Venture", logo: "TV" },
  { name: "Aqora", logo: "AQ" },
  { name: "Happy Connect", logo: "HC" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Partners
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              We at PushQuantum are happy to have the chance to work together
              with many different individuals and also big companies that help
              us on our mission to educate others on quantum tech.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-primary hover:underline font-medium"
            >
              Learn More
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors aspect-square"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">
                    {partner.logo}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
