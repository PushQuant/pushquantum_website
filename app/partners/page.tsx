import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partners - PushQuantum",
    description: "PushQuantum partners page.",
};

export default function PartnersPage() {
    return (
        <main className="bg-white px-6 pt-32 pb-16">
            <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-pq-dark-purple sm:text-4xl">
                    Under construction <span className="text-2xl sm:text-3xl">🚧</span>
                </h1>
            </div>
        </main>
    );
}
