// src/pages/Home.jsx
import { useEffect } from "react";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait until DOM is rendered
      }
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
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
