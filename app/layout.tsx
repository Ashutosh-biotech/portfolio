import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/layout/app/navbar";
import {Footer} from "@/components/sections";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Ashutosh Kumar | Java Full Stack Developer Portfolio',
    description: 'Java Full Stack Developer specializing in Spring Boot, Next.js, React, and microservices architecture. View projects, skills, and get in touch.',
    keywords: ['Java Developer', 'Full Stack Developer', 'Spring Boot', 'Next.js', 'React', 'Portfolio'],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[var(--bg)]`}
        >
        <body className="min-h-full flex flex-col">
        <Navbar/>
        <div className="flex-1">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
