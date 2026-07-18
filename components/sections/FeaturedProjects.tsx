import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import {
    SiSpringboot,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiJsonwebtokens,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiSocketdotio,
} from "react-icons/si";
import { TbBrandGatsby } from "react-icons/tb";

const projects = [
    {
        title: "Hotel Booking Platform",
        label: "HAVEN",
        labelColor: "#22C55E",
        description:
            "A full-featured RESTful booking platform with user authentication, search, booking, reviews and payment integration.",
        image: "/haven.png",
        techIcons: [
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: SiPostgresql, name: "PostgreSQL" },
            { icon: SiRedis, name: "Redis" },
            { icon: SiDocker, name: "Docker" },
        ],
        github: "#",
        demo: "#",
    },
    {
        title: "Microservices API Gateway",
        label: "API GATEWAY",
        labelColor: "#EF4444",
        description:
            "API Gateway for routing, load balancing, rate limiting and authentication for microservices architecture.",
        image: "/api-gateway.png",
        techIcons: [
            { icon: SiSpringboot, name: "Spring Cloud" },
            { icon: TbBrandGatsby, name: "Gateway" },
            { icon: SiJsonwebtokens, name: "JWT" },
            { icon: SiDocker, name: "Docker" },
            { icon: SiRedis, name: "Eureka" },
        ],
        github: "#",
        demo: "#",
    },
    {
        title: "Task Management App",
        label: "TASK MANAGER",
        labelColor: "#A855F7",
        description:
            "A productivity app to manage tasks, projects and teams with real-time updates.",
        image: "/task-manager.png",
        techIcons: [
            { icon: SiReact, name: "React" },
            { icon: SiNodedotjs, name: "Node.js" },
            { icon: SiMongodb, name: "MongoDB" },
            { icon: SiSocketdotio, name: "Socket.io" },
            { icon: SiTailwindcss, name: "Tailwind" },
        ],
        github: "#",
        demo: "#",
    },
];

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
                        href="#"
                        className="hidden sm:flex items-center gap-2 text-sm font-medium text-(--primary) hover:text-(--primary-light) transition-colors duration-300"
                    >
                        View All Projects
                        <FiArrowRight />
                    </Link>
                </div>

                {/* Project Cards */}
                <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
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
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium text-(--primary) hover:text-(--primary-light) transition-colors duration-300"
                    >
                        View All Projects
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
