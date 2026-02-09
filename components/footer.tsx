import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {

    contributions: [
        { label: "Events", href: "/events" },
        { label: "Membership", href: "/members" },
    ],
    about: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Imprint", href: "/imprint" },
        { label: "Privacy", href: "/privacy" },
    ],
};

export function Footer() {
    return (
        <footer id="contact" className="py-16 px-6 border-t border-border bg-pq-light-purple">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logos/pq/main_pq_logo_no_background.svg"
                                alt=""
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                            <Image
                                src="/logos/pq/Logo_pink_text.svg"
                                alt="PushQuantum"
                                width={120}
                                height={24}
                                className="h-5 w-auto"
                            />
                        </Link>
                        <p className="mt-4 text-sm max-w-xs leading-relaxed">
                            Exploring the quantum realm through collaboration, education and
                            innovation
                        </p>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 mt-6 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="size-5" />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 mt-6 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="size-5" />
                        </Link>
                    </div>

                    {/* Contributions */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">
                            Contributions
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.contributions.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm "
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">
                            About
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.about.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
