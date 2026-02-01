import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative py-40 bg-pq-light-purple overflow-hidden">
            {/* Background quantum orbital graphic - positioned on the right */}
            <div className="absolute right-[+5%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-40">
                <Image
                    src="/logos/pq/main_pq_logo_no_background.svg"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-7xl px-6">
                <div className="flex min-h-[420px] items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            About PushQuantum
                        </h1>
                        <p className="mt-4 text-base text-gray-400 lg:text-lg">
                            Exploring the quantum realm through collaboration, education and innovation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

