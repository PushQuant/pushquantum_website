import Image from "next/image";

export function MissionSection() {
    const pillars = [
        {
            title: "Community",
            description: "Big ideas thrive in a collaborative environment. We bring the quantum community together through our journal club, retreats and community activities where passion meets connection."
        },
        {
            title: "Professional Development",
            description: "We equip you with real-world skills through hands-on workshops and hackathons, bridging the gap between quantum theory and the practical expertise needed to shape the field's future."
        },
        {
            title: "Outreach",
            description: "We open quantum science to the world. Through public engagement and projects like Quantenträume, we make quantum technologies accessible and spark conversations between researchers and society."
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="mx-auto max-w-7xl">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20">
                    {/* Left - Community-Driven text */}
                    <div className="flex items-center text-pq-dark-purple">
                        <div>
                            <p className="text-2xl leading-relaxed">
                                PushQuantum is community-driven at its core. We encourage our members to take the lead in organizing events and projects that excite them. Whether it's contributing to community events, hosting a workshop, or helping in the organization of an international exchange, you will get access to the network and the guidance to pursue the project.
                            </p>
                            <p className="mt-6 text-2xl leading-relaxed">
                                By empowering each other to initiate and organize, we turn passive interest into active impact and shared growth. Whether you're a master's student deepening your expertise, discovering quantum for the first time, or just looking for a community, <span className="font-semibold">PushQuantum is for you!</span>
                            </p>
                        </div>
                    </div>
                    {/* Right - Mission Title & Image */}
                    <div>
                        <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-4xl mb-2">
                            Our Mission
                        </h2>
                        <div className="w-16 h-1 bg-pq-bright-pink mb-6" />
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about_us_hero_image.jpg"
                                alt="PushQuantum event"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Three Pillars Section */}
                <div>
                    <p className="text-2xl text-pq-dark-purple mb-12 max-w-3xl">
                        We empower the next generation of quantum thinkers and doers through three interconnected pillars:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="flex flex-col">
                                <h3 className="text-2xl font-bold text-pq-dark-purple mb-3">
                                    {pillar.title}
                                </h3>
                                <div className="w-12 h-1 bg-pq-bright-pink mb-4" />
                                <p className="text-gray-700 leading-relaxed text-xl">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
