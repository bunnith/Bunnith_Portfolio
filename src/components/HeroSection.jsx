// src/components/HeroSection.jsx
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello, I'm</span>
            <span className="text-primary ml-3 opacity-0 animate-fade-in-delay-1">Narong</span>
            <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2">Bunnith</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 mt-2 animate-fade-in-delay-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam at qui inventore saepe iusto cumque earum dolore est perspiciatis laudantium
            eligendi odio obcaecati perferendis molestias ex dolor atque, voluptatibus asperiores?
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4 flex justify-center">
            <a href="#projects" className="animate-bounce cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
