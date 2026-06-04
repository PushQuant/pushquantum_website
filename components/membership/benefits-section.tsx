import { GraduationCap, Briefcase, Users, Globe } from "lucide-react";

const benefits = [
    {
        icon: GraduationCap,
        title: "Certification & Access to Learning",
        description:
            "Certifications that back your skills in quantum computing, business development and beyond",
    },
    {
        icon: Briefcase,
        title: "Real-World Projects",
        description:
            "Opportunities to learn from industry and academic experts shaping the field",
    },
    {
        icon: Users,
        title: "Career Support",
        description:
            "Contacts to leading companies, research institutes, mentors and investors",
    },
    {
        icon: Globe,
        title: "Exchange programs",
        description:
            "Exchange programs with top universities such as ETH Zürich",
    },
];

export function BenefitsSection() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <h2 className="text-3xl font-bold text-pq-dark-purple sm:text-4xl text-center mb-12">
                    Open community,{" "}
                    <span className="bg-linear-to-r from-white to-pq-bright-pink px-2 rounded">
                        and many benefits
                    </span>
                </h2>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-pq-dark-purple/5 flex items-center justify-center mb-4">
                                <benefit.icon className="w-8 h-8 text-pq-dark-purple" />
                            </div>
                            <h3 className="font-semibold text-pq-dark-purple mb-2">{benefit.title}</h3>
                            <p className="text-sm text-pq-dark-purple/70 max-w-xs">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
