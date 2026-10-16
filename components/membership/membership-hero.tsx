import Image from "next/image";

export function MembershipHero() {
  return (
    <section className="bg-white pt-24 pb-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="text-4xl font-bold text-pq-dark-purple sm:text-5xl lg:text-6xl">
              Membership
            </h1>
            <p className="mt-4 text-pq-dark-purple/80 text-lg max-w-md">
              We support our members to be at the center of quantum revolution.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/members_membership_hack_group.jpg"
              alt="PushQuantum members at the quantum hackathon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
