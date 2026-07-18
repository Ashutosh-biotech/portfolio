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
import { IconType } from "react-icons";

export interface Project {
    title: string;
    label: string;
    labelColor: string;
    description: string;
    image: string;
    sizes?: string;
    techIcons: { icon: IconType; name: string }[];
    github: string;
    demo: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        title: "Hotel Booking Platform",
        label: "HAVEN",
        labelColor: "#22C55E",
        description:
            "A full-featured RESTful booking platform with user authentication, search, booking, reviews and payment integration.",
        image: "/haven.png",
        sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
        techIcons: [
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: SiPostgresql, name: "PostgreSQL" },
            { icon: SiRedis, name: "Redis" },
            { icon: SiDocker, name: "Docker" },
        ],
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        title: "Microservices API Gateway",
        label: "API GATEWAY",
        labelColor: "#EF4444",
        description:
            "API Gateway for routing, load balancing, rate limiting and authentication for microservices architecture.",
        image: "/api-gateway.png",
        sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
        techIcons: [
            { icon: SiSpringboot, name: "Spring Cloud" },
            { icon: TbBrandGatsby, name: "Gateway" },
            { icon: SiJsonwebtokens, name: "JWT" },
            { icon: SiDocker, name: "Docker" },
            { icon: SiRedis, name: "Eureka" },
        ],
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        title: "Task Management App",
        label: "TASK MANAGER",
        labelColor: "#A855F7",
        description:
            "A productivity app to manage tasks, projects and teams with real-time updates.",
        image: "/task-manager.png",
        sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
        techIcons: [
            { icon: SiReact, name: "React" },
            { icon: SiNodedotjs, name: "Node.js" },
            { icon: SiMongodb, name: "MongoDB" },
            { icon: SiSocketdotio, name: "Socket.io" },
            { icon: SiTailwindcss, name: "Tailwind" },
        ],
        github: "#",
        demo: "#",
        featured: true,
    },
];
