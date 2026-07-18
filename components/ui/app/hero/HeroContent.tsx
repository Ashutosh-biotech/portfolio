import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
    return (
        <div className="mx-auto max-w-170 text-center lg:mx-0 lg:text-left">
            {/* Greeting */}
            <p className="mb-4 text-lg font-medium text-(--primary)">
                Hi, I&#39;m
            </p>

            {/* Name */}
            <h1 className="leading-none tracking-tight">
                <span className="block text-5xl font-black text-(--text) sm:text-6xl lg:text-7xl">
                    Ashutosh
                </span>

                <span
                    className="
                        relative
                        z-30
                        -mt-2
                        block
                        text-5xl
                        font-black
                        sm:text-6xl
                        lg:-mt-3
                        lg:ml-24
                        xl:ml-28
                        lg:text-7xl
                        bg-linear-to-r
                        from-(--primary)
                        to-(--primary-light)
                        bg-clip-text
                        text-transparent
                    "
                >
                    Kumar
                </span>
            </h1>

            {/* Title */}

            <h2 className="mt-8 text-xl font-semibold text-(--text) sm:text-2xl">
                Java Full Stack Developer
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-lg leading-8 text-(--text-secondary)">
                I build scalable backend systems with Spring Boot and modern,
                responsive frontend applications with Next.js.
            </p>

            <HeroButtons />

            <HeroSocials />
        </div>
    );
}