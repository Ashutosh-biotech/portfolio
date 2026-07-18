import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineBriefcase, HiOutlineCube } from "react-icons/hi";

const stats = [
    {
        icon: HiOutlineBriefcase,
        value: "10+",
        label: "Projects Completed",
    },
    {
        icon: HiOutlineAcademicCap,
        value: "1+",
        label: "Years of Experience",
    },
    {
        icon: HiOutlineCode,
        value: "200+",
        label: "GitHub Contributions",
    },
    {
        icon: HiOutlineCube,
        value: "10+",
        label: "Technologies",
    },
];

const highlights = [
    "BCA Graduate (IGNOU)",
    "Based in India",
];

export default function AboutMe() {
    return (
        <section className="py-20 lg:py-28 bg-(--surface)" id="about">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-(--text) sm:text-4xl mb-14">
                    About Me
                </h2>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                    {/* Left: Image + Text */}
                    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                        {/* Profile Image */}
                        <div className="relative flex-shrink-0">
                            <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-2xl overflow-hidden border-2 border-(--primary)/30 animate-pulse-glow">
                                <Image
                                    src="/profile.png"
                                    alt="Ashutosh Kumar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-center sm:text-left">
                            <p className="text-(--text-secondary) leading-7">
                                I&apos;m a passionate Java Full Stack Developer who enjoys building
                                reliable, scalable and efficient applications.
                            </p>
                            <p className="mt-4 text-(--text-secondary) leading-7">
                                I love solving real-world problems, learning new technologies
                                and continuously improving my skills.
                            </p>

                            <ul className="mt-6 space-y-3">
                                {highlights.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-(--text-secondary)"
                                    >
                                        <FiCheckCircle className="text-(--success) flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                                <li className="flex items-center gap-2">
                                    <FiCheckCircle className="text-(--success) flex-shrink-0" />
                                    <span className="text-sm text-(--primary) underline underline-offset-4 cursor-pointer hover:text-(--primary-light) transition-colors">
                                        Open to Remote Opportunities
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div className="grid grid-cols-2 gap-5">
                        {stats.map(({ icon: Icon, value, label }, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-(--border) bg-(--card) p-6 text-center transition-all duration-300 hover:border-(--primary)/30 hover:bg-(--card-hover) hover:-translate-y-1 group"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary)/10 text-(--primary) text-xl mb-3 transition-colors duration-300 group-hover:bg-(--primary)/20">
                                    <Icon />
                                </div>
                                <p className="text-3xl font-bold text-(--primary)">
                                    {value}
                                </p>
                                <p className="mt-1 text-sm text-(--text-secondary)">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
