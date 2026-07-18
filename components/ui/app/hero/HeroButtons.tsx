import Link from "next/link";
import {FiArrowRight} from "react-icons/fi";

export default function HeroButtons() {
    return (
        <div className="mt-10 flex flex-wrap justify-center gap-5 lg:justify-start">
            <Link
                href="#"
                className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-(--primary)
                    px-7
                    py-3.5
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-(--primary-hover)
                    hover:shadow-[0_0_35px_var(--glow)]
                "
            >
                View My Work

                <FiArrowRight/>
            </Link>

            <Link
                href="#"
                className="
                    rounded-xl
                    border
                    border-(--border)
                    bg-(--card)
                    px-7
                    py-3.5
                    font-semibold
                    text-(--text)
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-(--card-hover)
                "
            >
                Get In Touch
            </Link>
        </div>
    );
}