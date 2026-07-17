import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HeroButtons() {
    return (
        <div className="mt-10 flex flex-wrap gap-5">
            <Link
                href="#"
                className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[var(--primary)]
                    px-7
                    py-3.5
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[var(--primary-hover)]
                    hover:shadow-[0_0_35px_var(--glow)]
                "
            >
                View My Work

                <FiArrowRight />
            </Link>

            <Link
                href="#"
                className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    px-7
                    py-3.5
                    font-semibold
                    text-[var(--text)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[var(--card-hover)]
                "
            >
                Get In Touch
            </Link>
        </div>
    );
}