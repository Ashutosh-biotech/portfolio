import Hero from "@/components/ui/app/hero/Hero";
import {
    WhatIBuild,
    FeaturedProjects,
    TechStack,
    AboutMe,
    ContactSection,
} from "@/components/sections";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="section-divider" />
            <WhatIBuild />
            <div className="section-divider" />
            <FeaturedProjects />
            <div className="section-divider" />
            <TechStack />
            <div className="section-divider" />
            <AboutMe />
            <div className="section-divider" />
            <ContactSection />
        </main>
    );
}
