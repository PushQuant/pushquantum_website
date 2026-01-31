import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Quantum Orbital Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Orbital rings */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-primary/30 animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute inset-16 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary blur-sm animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/70 blur-sm animate-pulse delay-300" />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-primary/50 blur-sm animate-pulse delay-700" />
          
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Your Quantum
          <br />
          Community in
          <br />
          Munich
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
          Exploring the edge of quantum reality together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8">
            Join Us
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-foreground/20 text-foreground hover:bg-foreground/10 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Social Link */}
        <div className="mt-12">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
