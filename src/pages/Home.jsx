import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* { Theme Toggle } */}
        <ThemeToggle />
        {/* { BackGournd } */}
        <StarBackground />
        {/* { navbar } */}
        <Navbar />
        {/* { main contain } */}
        <HeroSection />
        {/* { about contain } */}
        <AboutSection />
        {/* { skills contain } */}
        <SkillsSection />
        {/* { projects contain } */}
        <ProjectsSection />
        {/* { contact contain } */}
        <ContactSection />
        </div>
)
};