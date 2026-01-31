import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary text-sm font-medium mb-2">PushQuantum</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              PushQuantum is a student-led club based in Munich, bringing together
              young minds passionate about quantum technologies. Whether you&apos;re
              into qubits, code, or just curious, we host events, talks, and
              hands-on sessions to help you dive deeper and connect with the
              community.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <CalendarDays className="size-5 text-primary" />
                </div>
                <span className="text-foreground">Regular Meetups and Events</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Sparkles className="size-5 text-primary" />
                </div>
                <span className="text-foreground">Exciting Insights into Quantum Tech</span>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-primary hover:underline font-medium"
            >
              Our Story
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-sm">Team collaboration image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
