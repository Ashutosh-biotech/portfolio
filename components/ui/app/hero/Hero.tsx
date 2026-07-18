import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroLaptop from "./HeroLaptop";

export default function Hero() {
    return (
        <section className="relative overflow-hidden" id="home">
            {/* Desktop Background */}
            <div className="hidden lg:block">
                <HeroBackground />
            </div>

            <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
                <div className="relative flex w-full flex-col lg:min-h-180 lg:flex-row lg:items-center">

                    {/* Content */}
                    <div className="relative z-30 w-full lg:max-w-162.5">
                        <HeroContent />
                    </div>

                    {/* Desktop Laptop */}
                    <div
                        className="
                            hidden
                            lg:block
                            absolute
                            right-0
                            top-1/2
                            z-20
                            -translate-y-1/2
                            translate-x-16
                        "
                    >
                        <HeroLaptop />
                    </div>

                    {/* Mobile / Tablet Laptop */}
                    <div className="relative mt-14 flex justify-center lg:hidden">
                        <HeroLaptop />
                    </div>

                </div>
            </div>
        </section>
    );
}