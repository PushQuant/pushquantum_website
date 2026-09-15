import { scienceSlam } from "@/lib/conference-2026-data";

export function ConferenceScienceSlam() {
    return (
        <section className="py-16 px-6 bg-[#f9fafb]">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-bold text-pq-dark-purple sm:text-3xl mb-8">
                    Science Slam
                </h2>

                <div className="flex flex-col gap-6">
                    <p className="text-gray-600 leading-relaxed">{scienceSlam.intro}</p>
                    <p className="text-gray-600 leading-relaxed">{scienceSlam.format}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <h3 className="font-bold text-pq-dark-purple text-sm uppercase tracking-wide">
                                Application window
                            </h3>
                            <p className="text-gray-600 mt-1">
                                {scienceSlam.applicationWindow}
                            </p>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <h3 className="font-bold text-pq-dark-purple text-sm uppercase tracking-wide">
                                Live slot
                            </h3>
                            <p className="text-gray-600 mt-1">{scienceSlam.slot}</p>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {scienceSlam.applicationNote}
                    </p>
                </div>
            </div>
        </section>
    );
}
