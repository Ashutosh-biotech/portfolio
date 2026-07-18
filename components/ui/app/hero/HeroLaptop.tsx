import Image from "next/image";

import LaptopImage from "@/assets/images/laptop_image.png";

export default function HeroLaptop() {
    return (
        <div
            className="
                relative
                w-full
                max-w-[380px]
                sm:max-w-[500px]
                md:max-w-[620px]
                lg:w-[700px]
                xl:w-[780px]
                animate-hero-float
                select-none
            "
        >
            {/* Glow underneath */}
            <div
                className="
                    absolute
                    left-1/2
                    bottom-6
                    h-12
                    w-2/3
                    -translate-x-1/2
                    rounded-full
                    blur-[45px]
                    opacity-30
                "
                style={{
                    background: "var(--primary)",
                }}
            />

            <Image
                src={LaptopImage}
                alt="Laptop"
                priority
                className="
                    relative
                    h-auto
                    w-full
                    object-contain
                    drop-shadow-[0_30px_50px_rgba(0,0,0,.45)]
                    transition-transform
                    duration-500
                    lg:hover:scale-[1.02]
                "
            />
        </div>
    );
}