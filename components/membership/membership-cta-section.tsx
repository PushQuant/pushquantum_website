import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MembershipCTASection() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
                    Ready to embark on your quantum journey?
                </h2>
                <p className="mt-4 text-[#1a1a2e]/70">
                    Join PushQuantum today and unlock your potential in the world of quantum technology.
                </p>
                <div className="mt-8">
                    {/* TODO: ADD GOOGLE FORMS LINK HERE */}
                    <Link href="#join">
                        <Button className="rounded-full bg-pq-bright-pink hover:bg-[#d11a7d] text-white px-8 py-3 text-lg">
                            Become a Member
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
