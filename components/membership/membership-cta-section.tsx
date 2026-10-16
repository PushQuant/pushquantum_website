import { Button } from "@/components/ui/button";
import { MEMBERSHIP_FORM_URL } from "@/lib/site-links";

export function MembershipCTASection() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-pq-dark-slate sm:text-4xl">
                    Ready to embark on your quantum journey?
                </h2>
                <p className="mt-4 text-pq-dark-slate">
                    Join PushQuantum today and unlock your potential in the world of quantum technology.
                </p>
                <div className="mt-8">
                    <Button
                        asChild
                        className="rounded-full bg-pq-bright-pink hover:bg-pq-dark-pink text-white px-8 py-3 text-lg"
                    >
                        <a
                            href={MEMBERSHIP_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Become a Member
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
