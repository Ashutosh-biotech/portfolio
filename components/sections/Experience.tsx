"use client";

import Link from "next/link";
import { FiBriefcase, FiCalendar, FiExternalLink } from "react-icons/fi";

const experiences = [
    {
        role: "Virtual Internship",
        company: "McKinsey.org Forward Program",
        duration: "June 1, 2026 - June 30, 2026 (1 month)",
        description: "Completed a one-month professional development program by McKinsey.org Forward, focused on building foundational business, leadership, and workplace readiness skills.",
        skills: [
            "Problem Solving",
            "Artificial Intelligence (AI)",
            "Presentation Skills",
            "Team Management",
            "Project Management",
            "Time Management",
            "Management",
            "Design Thinking",
            "Communication"
        ],
        certificateUrl: "https://www.credly.com/badges/299cad12-b673-4cf6-844b-0e79d00605f1/linked_in_profile",
        certificateLabel: "View Credly Badge"
    }
];

export default function Experience() {
    return (
        <section className="py-20 lg:py-28 bg-(--surface)" id="experience">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-(--text) sm:text-4xl mb-14">
                    Work & Internship Experience
                </h2>

                <div className="relative border-l border-(--border) ml-4 md:ml-8 pl-8 md:pl-10 space-y-12">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative group">
                            
                            {/* Timeline Node Icon */}
                            <span className="absolute -left-[53px] md:-left-[57px] top-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--card) text-(--primary) transition-all duration-300 group-hover:border-(--primary) group-hover:shadow-[0_0_15px_var(--glow)] z-10">
                                <FiBriefcase className="text-lg animate-pulse-glow" />
                            </span>

                            {/* Experience Content Card */}
                            <div className="rounded-2xl border border-(--border) bg-(--card) p-6 lg:p-8 transition-all duration-300 hover:border-(--primary)/20 hover:shadow-[0_0_40px_var(--glow)]">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-(--text) group-hover:text-(--primary-light) transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm font-semibold text-(--primary) mt-0.5">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-(--muted) bg-white/5 px-3.5 py-1.5 rounded-full w-fit">
                                        <FiCalendar className="text-sm" />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>

                                <p className="text-sm leading-6 text-(--text-secondary) mb-6">
                                    {exp.description}
                                </p>

                                {/* Skills Learned */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-(--muted) uppercase tracking-wider mb-3">
                                        Skills Acquired
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, j) => (
                                            <span 
                                                key={j}
                                                className="px-3 py-1 rounded-lg text-xs font-medium bg-(--surface) border border-(--border) text-(--text-secondary) hover:text-(--text) hover:border-(--muted) transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Certificate Link */}
                                {exp.certificateUrl && (
                                    <div className="pt-4 border-t border-(--border)">
                                        <Link
                                            href={exp.certificateUrl}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary) hover:text-(--primary-light) transition-all duration-300 group/link"
                                        >
                                            {exp.certificateLabel}
                                            <FiExternalLink className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
