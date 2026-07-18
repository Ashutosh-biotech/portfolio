"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const contactLinks = [
    {
        icon: MdEmail,
        title: "Email",
        label: "ashutosh.kumar@example.com",
        href: "mailto:ashutosh.kumar@example.com",
        color: "hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
        iconColor: "text-blue-500",
    },
    {
        icon: FaLinkedin,
        title: "LinkedIn",
        label: "linkedin.com/in/ashutosh-kumar",
        href: "https://linkedin.com/in/ashutosh-kumar",
        color: "hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
        iconColor: "text-cyan-500",
    },
    {
        icon: FaGithub,
        title: "GitHub",
        label: "github.com/Ashutosh-biotech",
        href: "https://github.com/Ashutosh-biotech",
        color: "hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        iconColor: "text-emerald-500",
    },
];

export default function ContactForm() {
    return (
        <div className="rounded-2xl border border-(--border) bg-(--card) p-6 lg:p-8 flex flex-col justify-between h-full">
            <div>
                <h3 className="text-xl font-bold text-(--text) mb-3">Let&apos;s Connect</h3>
                <p className="text-sm text-(--text-secondary) leading-6 mb-6">
                    I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of these platforms!
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {contactLinks.map(({ icon: Icon, title, label, href, color, iconColor }, i) => (
                    <Link
                        key={i}
                        href={href}
                        target="_blank"
                        className={`flex items-center justify-between p-4 rounded-xl border border-(--border) bg-(--surface) transition-all duration-300 hover:-translate-y-0.5 group ${color}`}
                    >
                        <div className="flex items-center gap-4 min-w-0">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors duration-300 group-hover:bg-white/10 flex-shrink-0 ${iconColor}`}>
                                <Icon className="text-xl" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="text-xs font-semibold text-(--muted) uppercase tracking-wider">
                                    {title}
                                </h4>
                                <p className="text-sm font-medium text-(--text) truncate mt-0.5">
                                    {label}
                                </p>
                            </div>
                        </div>
                        <FiArrowUpRight className="text-(--muted) group-hover:text-(--primary) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-lg flex-shrink-0" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
