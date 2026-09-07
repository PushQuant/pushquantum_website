
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, inquiry } = await request.json();

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

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "PushQuantum Contact Form <onboarding@resend.dev>",
            to: ["info@pushquantum.tech"],
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry:</strong></p>
        <p>${inquiry.replace(/\n/g, "<br>")}</p>
      `,
            text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
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
