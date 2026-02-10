
"use client";

import React from "react"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, CheckCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const universities = [
    "University of Munich (LMU)",
    "Technical University of Munich (TUM)",
    "University of Applied Sciences Munich",
    "Other",
];

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        university: "",
        studyProgram: "",
        message: "",
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreedToTerms) {
            setSubmitStatus("error");
            setErrorMessage(
                "Please agree to the terms and conditions and privacy policy."
            );
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                university: "",
                studyProgram: "",
                message: "",
            });
            setAgreedToTerms(false);
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
        <section className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* First Name / Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1a1a2e]">
                                First Name <span className="text-[#e91e8c]">*</span>
                            </label>
                            <Input
                                name="firstName"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="rounded-lg border-gray-300 bg-white text-[#1a1a2e] placeholder:text-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1a1a2e]">
                                Last Name <span className="text-[#e91e8c]">*</span>
                            </label>
                            <Input
                                name="lastName"
                                placeholder="Appleseed"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="rounded-lg border-gray-300 bg-white text-[#1a1a2e] placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Email / Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1a1a2e]">
                                Email Address <span className="text-[#e91e8c]">*</span>
                            </label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Enter E-Mail address ..."
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="rounded-lg border-gray-300 bg-white text-[#1a1a2e] placeholder:text-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1a1a2e]">
                                Phone Number
                            </label>
                            <Input
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number ..."
                                value={formData.phone}
                                onChange={handleChange}
                                className="rounded-lg border-gray-300 bg-white text-[#1a1a2e] placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* University / Study Program */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1a1a2e]">
                                Which university do you attend?
                            </label>
                            <Select
                                value={formData.university}
                                onValueChange={(value) =>
                                    setFormData((prev) => ({ ...prev, university: value }))
                                }
                            >
                                <SelectTrigger className="rounded-lg border-gray-300 bg-white text-[#1a1a2e]">
                                    <SelectValue placeholder="Select university" />
                                </SelectTrigger>
                                <SelectContent>
                                    {universities.map((uni) => (
                                        <SelectItem key={uni} value={uni}>
                                            {uni}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1a1a2e]">
                                Your study program
                            </label>
                            <Input
                                name="studyProgram"
                                placeholder="Enter your study program ..."
                                value={formData.studyProgram}
                                onChange={handleChange}
                                className="rounded-lg border-gray-300 bg-white text-[#1a1a2e] placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#1a1a2e]">
                            Message
                        </label>
                        <Textarea
                            name="message"
                            placeholder="Let us know what you would like to tell us ..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            required
                            className="rounded-lg border-gray-300 bg-white text-[#1a1a2e] placeholder:text-gray-400 resize-none"
                        />
                    </div>

                    {/* Terms checkbox */}
                    <div className="flex items-start gap-3">
                        <Checkbox
                            id="terms"
                            checked={agreedToTerms}
                            onCheckedChange={(checked) =>
                                setAgreedToTerms(checked as boolean)
                            }
                            className="mt-0.5"
                        />
                        <label htmlFor="terms" className="text-sm text-[#1a1a2e]">
                            I agree to the terms and conditions and privacy policy.{" "}
                            <span className="text-[#e91e8c]">*</span>
                        </label>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                            <CheckCircle className="size-4" />
                            <span>
                                Message sent successfully! We{"'"}ll get back to you soon.
                            </span>
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <div className="text-red-500 text-sm">{errorMessage}</div>
                    )}

                    {/* Submit */}
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            variant="outline"
                            className="rounded-full border-[#e91e8c] text-[#e91e8c] hover:bg-[#e91e8c] hover:text-white px-10 py-3 font-semibold disabled:opacity-50 bg-transparent"
                        >
                            {isSubmitting ? (
                                <Loader2 className="size-4 animate-spin mr-2" />
                            ) : null}
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
