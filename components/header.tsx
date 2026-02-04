
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#projects", label: "Projects" },
    { href: "/members", label: "Members" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-pq-light-purple backdrop-blur-md ">
            <div className="mx-auto max-w-7xl px-6 py-4">
                <nav className="flex items-center justify-between">
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

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <Button className="rounded-full px-6 bg-pq-bright-pink">Join Us</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pt-4 pb-2">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm hover:text-foreground transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button className="rounded-full w-fit mt-2 bg-pq-bright-pink">Join Us</Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

