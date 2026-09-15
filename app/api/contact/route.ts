
import { Resend } from "resend";
import { NextResponse } from "next/server";

const recipientEmail = process.env.CONTACT_FORM_RECIPIENT ?? "info@pushquantum.tech";

type ContactRequestBody = {
    name?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    university?: string;
    customUniversity?: string;
    inquiry?: string;
    message?: string;
};

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function normalizeContactRequest(body: ContactRequestBody) {
    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const name = body.name?.trim() || [firstName, lastName].filter(Boolean).join(" ");
    const email = body.email?.trim() ?? "";
    const inquiry = body.inquiry?.trim() || body.message?.trim() || "";
    const phone = body.phone?.trim() ?? "";
    const university =
        body.university === "Other"
            ? body.customUniversity?.trim() ?? ""
            : body.university?.trim() ?? "";

    return { name, email, inquiry, phone, university };
}

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Missing RESEND_API_KEY environment variable" },
                { status: 500 }
            );
        }

        const body = (await request.json()) as ContactRequestBody;
        const { name, email, inquiry, phone, university } = normalizeContactRequest(body);

        // Validate required fields
        if (!name || !email || !inquiry) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        const resend = new Resend(apiKey);
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeUniversity = escapeHtml(university);
        const safeInquiry = escapeHtml(inquiry).replace(/\n/g, "<br>");

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "PushQuantum Contact Form <onboarding@resend.dev>",
            to: [recipientEmail],
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${phone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
        ${university ? `<p><strong>Institution:</strong> ${safeUniversity}</p>` : ""}
        <p><strong>Inquiry:</strong></p>
        <p>${safeInquiry}</p>
      `,
            text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ""}
        ${university ? `Institution: ${university}` : ""}
        
        Inquiry:
        ${inquiry}
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, messageId: data?.id });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
