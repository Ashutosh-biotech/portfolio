import { FiServer, FiMonitor, FiDatabase, FiTool } from "react-icons/fi";

const features = [
    {
        icon: FiServer,
        title: "Scalable Backends",
        description: "Build robust RESTful APIs and microservices with Spring Boot.",
    },
    {
        icon: FiMonitor,
        title: "Modern Frontends",
        description: "Create fast, responsive UIs using Next.js, React & Tailwind.",
    },
    {
        icon: FiDatabase,
        title: "Databases",
        description: "Design efficient schemas and work with SQL & NoSQL DBs.",
    },
    {
        icon: FiTool,
        title: "DevOps & Tools",
        description: "Docker, Git, CI/CD and cloud basics for smooth deployments.",
    },
];

export default function WhatIBuild() {
    return (
        <section className="py-20 lg:py-28" id="experience">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-(--text) sm:text-4xl">
                    What I Build
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map(({ icon: Icon, title, description }, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border border-(--border) bg-(--card) p-8 text-center transition-all duration-300 hover:border-(--primary)/30 hover:bg-(--card-hover) hover:-translate-y-1 hover:shadow-[0_0_40px_var(--glow)]"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-(--primary)/10 text-(--primary) text-2xl transition-colors duration-300 group-hover:bg-(--primary)/20">
                                <Icon />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-(--text)">
                                {title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-(--text-secondary)">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
