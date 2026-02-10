
import Image from "next/image";

export function MissionSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Left - Description (vertically centered) */}
                    <div className="flex items-center text-[#1a1a2e]">
                        <div>
                            <p className="text-2xl leading-relaxed">
                                PushQuantum is a student-led club dedicated to advancing quantum
                                computing knowledge and research among university students. We bridge the
                                gap between theoretical physics, computer science, and practical
                                applications.
                            </p>
                            <p className="mt-6 text-2xl leading-relaxed">
                                Our community fosters collaboration between students from diverse academic
                                backgrounds who share a passion for quantum technologies and their potential
                                to revolutionize computing.
                            </p>
                        </div>
                    </div>

                    {/* Right - Our Mission with Image */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl mb-2">
                            Our Mission
                        </h2>
                        <div className="w-16 h-1 bg-[#e91e8c] mb-6" />

                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/mission-event.jpg"
                                alt="PushQuantum event"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

