export function EventsHero() {
  return (
    <section className="relative min-h-[280px] overflow-hidden pt-24">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/events/events-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#1a1a2e]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Events
        </h1>
        <p className="mt-4 text-gray-300 text-base lg:text-lg">
          Discover various activities offered by PushQuantum
        </p>
      </div>
    </section>
  );
}
