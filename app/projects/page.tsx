"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowLeft, FiSearch } from "react-icons/fi";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");

    // Extract all unique technologies from our projects data dynamically
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projectsData.forEach((project) => {
            project.techIcons.forEach((tech) => {
                tags.add(tech.name);
            });
        });
        return ["All", ...Array.from(tags)];
    }, []);

    // Filter projects based on search query and selected tech tag
    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.label.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTag =
                selectedTag === "All" ||
                project.techIcons.some((tech) => tech.name === selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag]);

    return (
        <main className="min-h-screen bg-[var(--bg)] pt-32 pb-20 lg:pb-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* Back to Home Navigation */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-(--muted) hover:text-(--primary-light) transition-colors duration-300 mb-8 group"
                >
                    <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-(--border)">
                    <div>
                        <h1 className="text-3xl font-extrabold text-(--text) sm:text-4xl lg:text-5xl tracking-tight">
                            All Projects
                        </h1>
                        <p className="mt-3 text-base text-(--text-secondary) max-w-xl">
                            A complete archive of projects I've built, featuring backend servers, full-stack web applications, microservices, and utilities.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:max-w-xs flex-shrink-0">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-(--muted) text-lg" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-(--border) bg-(--card) text-sm text-(--text) placeholder:text-(--muted) outline-none transition-all duration-300 focus:border-(--primary) focus:shadow-[0_0_20px_var(--glow)]"
                        />
                    </div>
                </div>

                {/* Dynamic Filters */}
                <div className="mt-8 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-(--muted) uppercase tracking-wider mr-2">
                        Filter by:
                    </span>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                                selectedTag === tag
                                    ? "bg-(--primary) text-white shadow-[0_0_15px_var(--glow)]"
                                    : "bg-(--card) text-(--muted) border border-(--border) hover:text-(--text) hover:border-(--muted)"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 ? (
                    <div className="mt-20 text-center">
                        <p className="text-lg text-(--text-secondary)">No projects found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedTag("All");
                            }}
                            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-(--primary) px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-(--primary-hover)"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    /* Projects Grid */
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, i) => (
                            <div
                                key={i}
                                className="group rounded-2xl border border-(--border) bg-(--card) overflow-hidden transition-all duration-300 hover:border-(--primary)/30 hover:-translate-y-2 hover:shadow-[0_0_50px_var(--glow)] flex flex-col justify-between"
                            >
                                <div>
                                    {/* Image */}
                                    <div className="relative overflow-hidden h-48">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-(--card) to-transparent opacity-60" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <span
                                            className="text-xs font-bold tracking-widest"
                                            style={{ color: project.labelColor }}
                                        >
                                            {project.label}
                                        </span>
                                        <h3 className="mt-2 text-lg font-semibold text-(--text)">
                                            {project.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-(--text-secondary)">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 pt-0">
                                    {/* Tech Icons */}
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        {project.techIcons.map((tech, j) => (
                                            <div
                                                key={j}
                                                className="flex items-center gap-1.5 text-xs text-(--muted)"
                                                title={tech.name}
                                            >
                                                <tech.icon className="text-sm" />
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-(--border)">
                                        <Link
                                            href={project.github}
                                            className="flex items-center gap-2 text-sm text-(--text-secondary) hover:text-(--primary) transition-colors duration-300"
                                        >
                                            <FaGithub />
                                            GitHub
                                        </Link>
                                        <Link
                                            href={project.demo}
                                            className="flex items-center gap-2 text-sm text-(--primary) hover:text-(--primary-light) transition-colors duration-300 ml-auto"
                                        >
                                            Live Demo
                                            <FiExternalLink />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
