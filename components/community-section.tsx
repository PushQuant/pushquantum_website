import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
    "Members have diverse backgrounds, levels of expertise and personalities.",
    "We are always searching for talents with a passion for impactful technologies.",
];

export function CommunitySection() {
    return (
        <section id="members" className="py-24 px-6 bg-card/50 bg-white">
            <div className="mx-auto max-w-7xl bg-pq-dark-purple rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                <div className="text-center">
                                    <p className="text-sm">Community group photo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold sm:text-4xl text-balance">
                            Become part of a lively Community.
                        </h2>
                        <p className="mt-4 ">
                            Immerse yourself in the quantum world.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start gap-3">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mt-0.5">
                                        <Check className="size-4 text-primary" />
                                    </div>
                                    <span className="">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="rounded-full px-8 mt-8 bg-pq-bright-pink">
                            Become a Member
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
