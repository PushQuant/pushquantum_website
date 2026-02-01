import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'PushQuantum - Student Club',
    description: 'PushQuantum is a student club dedicated to exploring quantum computing and emerging technologies.',
    icons: {
        icon: [
            {
                url: '/logos/pq/main_pq_logo_no_background.svg',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/logos/pq/main_pq_logo_no_background.svg',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/logos/pq/main_pq_logo_no_background.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/logos/pq/main_pq_logo_no_background.svg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`font-sans antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
