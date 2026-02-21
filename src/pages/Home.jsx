// src/pages/Home.jsx
import { useEffect } from "react";
import { AboutSection } from "../components/About/AboutSection";
import { ContactSection } from "../components/Contact/ContactSection";
import { HeroSection } from "../components/Hero/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/Project/ProjectSection";
import { SkillsSection } from "../components/Skill/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {

  useEffect(() => {
    // Scroll to top (you already have this)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Remove the hash from the URL (like #about)
    if (window.location.hash) {
      // Remove the hash after a slight delay to avoid scroll jump
      setTimeout(() => {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }, 100); // 100ms gives time for the scroll to settle
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      </main>
    </div>
  );
};
