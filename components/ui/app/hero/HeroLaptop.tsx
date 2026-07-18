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
            {/* Background Glows & Dots (Anchored to laptop container for perfect alignment on all screen sizes) */}
            <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
                {/* Ambient Glows */}
                <div
                    className="absolute right-[-10%] top-1/2 h-[350px] w-[350px] lg:h-[480px] lg:w-[480px] -translate-y-1/2 rounded-full blur-[100px] lg:blur-[140px] opacity-20"
                    style={{ background: "var(--primary)" }}
                />
                <div
                    className="absolute right-[12%] top-[30%] h-[200px] w-[200px] lg:h-[280px] lg:w-[280px] rounded-full blur-[60px] lg:blur-[90px] opacity-20"
                    style={{ background: "var(--cyan)" }}
                />

                {/* Dot Layer 1 (Blue) */}
                <div
                    className="absolute -right-8 -top-8 h-[400px] w-[500px] lg:-right-16 lg:-top-16 lg:h-[600px] lg:w-[760px] opacity-80"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(96,165,250,.14) 1.2px, transparent 1.2px)",
                        backgroundSize: "24px 24px",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 25%, transparent 75%)",
                        maskImage:
                            "radial-gradient(circle at center, black 25%, transparent 75%)",
                    }}
                />

                {/* Dot Layer 2 (White) */}
                <div
                    className="absolute -right-4 -top-4 h-[350px] w-[450px] lg:-right-8 lg:-top-8 lg:h-[550px] lg:w-[700px] opacity-55"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,.4) 0.8px, transparent 0.8px)",
                        backgroundSize: "16px 16px",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 30%, transparent 70%)",
                        maskImage:
                            "radial-gradient(circle at center, black 30%, transparent 70%)",
                    }}
                />
            </div>

            {/* Glow underneath laptop base */}
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
                    z-10
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
                    z-10
                "
            />
        </div>
    );
}