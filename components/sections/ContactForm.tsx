"use client";

import { useState } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const contactLinks = [
    { icon: MdEmail, label: "ashutosh.kumar@example.com", href: "mailto:ashutosh.kumar@example.com" },
    { icon: FaLinkedin, label: "linkedin.com/in/ashutosh-kumar", href: "https://linkedin.com/in/ashutosh-kumar" },
    { icon: FaGithub, label: "github.com/Ashutosh-biotech", href: "https://github.com/Ashutosh-biotech" },
];

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="rounded-2xl border border-(--border) bg-(--card) p-6 lg:p-8">
            <h3 className="text-xl font-bold text-(--text) mb-6">Let&apos;s Connect</h3>
            <p className="text-sm text-(--text-secondary) leading-6 mb-6">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col gap-3 mb-8">
                {contactLinks.map(({ icon: Icon, label, href }, i) => (
                    <Link key={i} href={href} target="_blank" className="flex items-center gap-3 text-sm text-(--primary) hover:text-(--primary-light) transition-colors duration-300">
                        <Icon className="text-lg flex-shrink-0" />
                        <span className="truncate">{label}</span>
                    </Link>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm text-(--text) placeholder:text-(--muted) outline-none transition-all duration-300 focus:border-(--primary) focus:shadow-[0_0_20px_var(--glow)]" />
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm text-(--text) placeholder:text-(--muted) outline-none transition-all duration-300 focus:border-(--primary) focus:shadow-[0_0_20px_var(--glow)]" />
                <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm text-(--text) placeholder:text-(--muted) outline-none transition-all duration-300 focus:border-(--primary) focus:shadow-[0_0_20px_var(--glow)] resize-none" />
                <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-(--primary) py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-(--primary-hover) hover:shadow-[0_0_35px_var(--glow)] hover:-translate-y-0.5 cursor-pointer">
                    <FiSend />
                    Send Message
                </button>
            </form>
        </div>
    );
}
