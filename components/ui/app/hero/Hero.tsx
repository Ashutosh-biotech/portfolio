import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroLaptop from "./HeroLaptop";

export default function Hero() :React.JSX.Element {
    return (
        <section className="relative overflow-hidden py-24 lg:py-36">
            <HeroBackground />

            <div className="container mx-auto px-6">
                <div className="relative min-h-[620px] flex items-center">

                    {/* Left Content */}
                    <div className="relative z-20 max-w-2xl">
                        <HeroContent />
                    </div>

                    {/* Laptop */}
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10">
                        <HeroLaptop />
                    </div>

                </div>

                {/* Mobile Laptop */}
                <div className="mt-16 lg:hidden">
                    <HeroLaptop />
                </div>
            </div>
        </section>
    );
}