
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
    "Other",
];

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        university: "",
        customUniversity: "",
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
            const university =
                formData.university === "Other"
                    ? formData.customUniversity
                    : formData.university;

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    university,
                    inquiry: formData.message,
                }),
            });

            const data = await response
                .json()
                .catch(() => ({ error: "Failed to send message" }));

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
                customUniversity: "",
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
                            <label className="text-sm font-semibold text-pq-dark-purple">
                                First Name <span className="text-pq-bright-pink">*</span>
                            </label>
                            <Input
                                name="firstName"
                                placeholder="Lev"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="rounded-lg border-gray-300 bg-white text-pq-dark-purple placeholder:text-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-pq-dark-purple">
                                Last Name <span className="text-pq-bright-pink">*</span>
                            </label>
                            <Input
                                name="lastName"
                                placeholder="Landau"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="rounded-lg border-gray-300 bg-white text-pq-dark-purple placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Email / Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-pq-dark-purple">
                                Email Address <span className="text-pq-bright-pink">*</span>
                            </label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="lev.landau@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="rounded-lg border-gray-300 bg-white text-pq-dark-purple placeholder:text-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-pq-dark-purple">
                                Phone Number
                            </label>
                            <Input
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number ..."
                                value={formData.phone}
                                onChange={handleChange}
                                className="rounded-lg border-gray-300 bg-white text-pq-dark-purple placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* University / Study Program */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-pq-dark-purple">
                                Affiliated institution?
                            </label>
                            {formData.university === "Other" ? (
                                <div className="flex flex-col gap-1">
                                    <Input
                                        placeholder="Enter your institution"
                                        value={formData.customUniversity}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, customUniversity: e.target.value }))
                                        }
                                        className="rounded-lg border-gray-300 bg-white text-pq-dark-purple"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setFormData((prev) => ({ ...prev, university: "", customUniversity: "" }))}
                                        className="text-xs text-gray-400 hover:text-pq-bright-pink text-left transition-colors"
                                    >
                                        ← Back to list
                                    </button>
                                </div>
                            ) : (
                                <Select
                                    value={formData.university}
                                    onValueChange={(value) =>
                                        setFormData((prev) => ({ ...prev, university: value, customUniversity: "" }))
                                    }
                                >
                                    <SelectTrigger className="rounded-lg border-gray-300 bg-white text-pq-dark-purple">
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
                            )}                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-pq-dark-purple">
                            Message
                        </label>
                        <Textarea
                            name="message"
                            placeholder="Let us know what you would like to tell us ..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            required
                            className="rounded-lg border-gray-300 bg-white text-pq-dark-purple placeholder:text-gray-400 resize-none"
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
                        <label htmlFor="terms" className="text-sm text-pq-dark-purple">
                            I agree to the terms and conditions and privacy policy.{" "}
                            <span className="text-pq-bright-pink">*</span>
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
                            className="rounded-full border-pq-dark-pink text-pq-bright-pink hover:bg-pq-dark-pink hover:text-white px-10 py-3 font-semibold disabled:opacity-50 bg-transparent"
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
