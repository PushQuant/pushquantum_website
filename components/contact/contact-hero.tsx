
export function ContactHero() {
    return (
        <section className="relative min-h-[300px] pt-24 overflow-hidden">
            {/* Background team photo with overlay */}
            <div className="absolute inset-0 bg-[#1a1a2e]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: "url('/images/team-photo.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 to-[#1a1a2e]/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 lg:py-24">
                <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                    Contact
                </h1>
                <p className="mt-4 text-gray-300 text-lg">
                    {"Let's get in touch!"}
                </p>
            </div>
        </section>
    );
}
