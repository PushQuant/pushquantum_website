import Image from "next/image";

export function MembershipHero() {
  return (
    <section className="bg-white pt-24 pb-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="text-4xl font-bold text-[#1a1a2e] sm:text-5xl lg:text-6xl">
              Membership
            </h1>
            <p className="mt-4 text-[#1a1a2e]/80 text-lg max-w-md">
              We support our members to be at the center of quantum revolution.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/membership-hero.jpg"
              alt="PushQuantum team members"
              fill
              className="object-cover"
              priority
            />
            {/* Placeholder gradient if image missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e91e8c]/20 to-[#4169e1]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
