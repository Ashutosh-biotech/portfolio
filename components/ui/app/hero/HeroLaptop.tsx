import Image from "next/image";

import LaptopImage from "@/assets/images/laptop_image.png";

export default function HeroLaptop() {
    return (
        <div
            className="
                relative
                w-155
                xl:w-190
                2xl:w-205
                animate-hero-float
                select-none
            "
        >
            {/* Shadow */}
            <div
                className="
                    absolute
                    left-1/2
                    bottom-6
                    -translate-x-1/2
                    h-1/2
                    w-full
                    rounded-full
                    blur-3xl

                    opacity-30
                    border border-gray-200
                "
                style={{
                    background: "var(--primary)",
                }}
            />

            {/* Image */}
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    transition-transform
                    duration-500
                    hover:scale-[1.015]
                "
            >
                <Image
                    src={LaptopImage}
                    alt="Laptop workspace"
                    priority
                    className="
                        h-auto
                        w-full
                        object-contain
                    "
                />
            </div>
        </div>
    );
}