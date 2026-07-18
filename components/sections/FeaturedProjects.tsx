import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projectsData } from "@/data/projects";

// Show first 3 projects or only the ones flagged as featured
const featuredProjects = projectsData.filter(p => p.featured !== false).slice(0, 3);

export default function FeaturedProjects() {
    return (
        <section className="py-20 lg:py-28 bg-(--surface)" id="projects">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-(--text) sm:text-4xl">
                        Featured Projects
                    </h2>
                    <Link
                        href="/projects"
                        className="hidden sm:flex items-center gap-2 rounded-full border border-(--primary)/40 bg-(--primary)/5 px-5 py-2 text-sm font-semibold text-(--primary-light) transition-all duration-300 hover:bg-(--primary) hover:text-white hover:border-(--primary) hover:shadow-[0_0_20px_var(--glow)] hover:-translate-y-0.5 group"
                    >
                        View All Projects
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Project Cards */}
                <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border border-(--border) bg-(--card) overflow-hidden transition-all duration-300 hover:border-(--primary)/30 hover:-translate-y-2 hover:shadow-[0_0_50px_var(--glow)]"
                        >
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

                                {/* Tech Icons */}
                                <div className="mt-5 flex flex-wrap items-center gap-3">
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
                                <div className="mt-6 flex items-center gap-4 pt-4 border-t border-(--border)">
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

                {/* Mobile View All */}
                <div className="mt-8 sm:hidden text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-(--primary)/40 bg-(--primary)/5 px-6 py-2.5 text-sm font-semibold text-(--primary-light) transition-all duration-300 hover:bg-(--primary) hover:text-white hover:border-(--primary) hover:shadow-[0_0_20px_var(--glow)]"
                    >
                        View All Projects
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
