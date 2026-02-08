
export function ContactHero() {
    return (
        <section className="relative min-h-[300px] pt-24 overflow-hidden">
            {/* Background team photo with overlay */}
            <div className="absolute inset-0 bg-white">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: "url('/images/team-photo.jpg')" }}
                />
                <div className="absolute inset-0 " />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 lg:py-24">
                <h1 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
                    Contact
                </h1>
                <p className="mt-4 text-gray-900 text-lg">
                    {"Let's get in touch!"}
                </p>
            </div>
        </section>
    );
}
