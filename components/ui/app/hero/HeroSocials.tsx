import Link from "next/link";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import {
    MdEmail,
} from "react-icons/md";

import {
    TbBrandLeetcode,
} from "react-icons/tb";

const socials = [
    {
        icon: FaGithub,
        href: "#",
    },
    {
        icon: FaLinkedin,
        href: "#",
    },
    {
        icon: MdEmail,
        href: "#",
    },
    {
        icon: TbBrandLeetcode,
        href: "#",
    },
];

export default function HeroSocials() {
    return (
        <div className="mt-12 flex items-center justify-center gap-5 lg:justify-start">
            {socials.map(({ icon: Icon, href }, index) => (
                <Link
                    key={index}
                    href={href}
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-(--border)
                        bg-(--card)
                        text-xl
                        text-(--text-secondary)
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-(--primary)
                        hover:text-(--primary)
                        hover:shadow-[0_0_25px_var(--glow)]
                    "
                >
                    <Icon />
                </Link>
            ))}
        </div>
    );
}