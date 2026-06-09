
"use client";

import React from "react";

import { useState } from "react";
import { MapPin, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        inquiry: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", inquiry: "" });
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(
                error instanceof Error ? error.message : "Failed to send message"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 px-6 bg-pq-dark-slate">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-gray-300">
                        Interested in joining our club or have questions? Reach out to us!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <div className="space-y-8">
                        {/* Location */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-white font-medium">Location</span>
                                <div className="w-6 h-6 rounded-full bg-pq-bright-pink flex items-center justify-center">
                                    <MapPin className="size-3 text-white" />
                                </div>
                            </div>
                            <div className="text-gray-300 text-sm leading-relaxed">
                                <p>PushQuantum e.V.</p>
                                <p>Situlistraße 44</p>
                                <p>80939 München, Germany</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-white font-medium">Email</span>
                                <div className="w-6 h-6 rounded-full bg-pq-bright-pink flex items-center justify-center">
                                    <Mail className="size-3 text-white" />
                                </div>
                            </div>
                            <div className="text-gray-300 text-sm">
                                <p>hello@pushquantum.tech</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div>
                        <h3 className="text-white font-medium mb-6">Send us a Message!</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="bg-pq-dark-purple border-pq-light-purple text-white placeholder:text-gray-400 rounded-lg"
                            />
                            <Input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="bg-pq-dark-purple border-pq-light-purple text-white placeholder:text-gray-400 rounded-lg"
                            />
                            <Textarea
                                placeholder="Inquiry"
                                value={formData.inquiry}
                                onChange={(e) =>
                                    setFormData({ ...formData, inquiry: e.target.value })
                                }
                                rows={4}
                                className="bg-pq-dark-purple border-pq-light-purple text-white placeholder:text-gray-400 rounded-lg resize-none"
                            />
                            {/* Status Messages */}
                            {submitStatus === "success" && (
                                <div className="flex items-center gap-2 text-green-400 text-sm">
                                    <CheckCircle className="size-4" />
                                    <span>Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className="text-red-400 text-sm">{errorMessage}</div>
                            )}

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={isSubmitting}
                                    className="rounded-lg bg-pq-bright-pink hover:bg-pq-dark-pink text-white disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="size-4 animate-spin" />
                                    ) : (
                                        <Send className="size-4" />
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

