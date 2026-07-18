import { FaJava, FaReact, FaDocker, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import {
    SiSpringboot,
    SiSpringsecurity,
    SiHibernate,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiPostman,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

interface TechItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

interface TechCategory {
    title: string;
    color: string;
    items: TechItem[];
}

const techStack: TechCategory[] = [
    {
        title: "Backend",
        color: "#22C55E",
        items: [
            { name: "Java", icon: FaJava, color: "#ED8B00" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
            { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
            { name: "REST APIs", icon: TbApi, color: "#3B82F6" },
        ],
    },
    {
        title: "Frontend",
        color: "#3B82F6",
        items: [
            { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "HTML & CSS", icon: CgWebsite, color: "#E34F26" },
        ],
    },
    {
        title: "Databases",
        color: "#F59E0B",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
        ],
    },
    {
        title: "DevOps & Tools",
        color: "#A855F7",
        items: [
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Linux", icon: FaLinux, color: "#FCC624" },
        ],
    },
];

export default function TechStack() {
    return (
        <section className="py-20 lg:py-28" id="skills">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-(--text) sm:text-4xl">
                    Tech Stack
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {techStack.map((category, i) => (
                        <div key={i}>
                            <h3
                                className="text-lg font-semibold mb-6"
                                style={{ color: category.color }}
                            >
                                {category.title}
                            </h3>
                            <div className="flex flex-col gap-3">
                                {category.items.map((tech, j) => (
                                    <div
                                        key={j}
                                        className="flex items-center gap-3 rounded-xl border border-(--border) bg-(--card) p-3 transition-all duration-300 hover:border-(--primary)/20 hover:bg-(--card-hover) group"
                                    >
                                        <div
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-lg transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                backgroundColor: `${tech.color}15`,
                                                color: tech.color,
                                            }}
                                        >
                                            <tech.icon />
                                        </div>
                                        <span className="text-sm font-medium text-(--text-secondary) group-hover:text-(--text) transition-colors duration-300">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
