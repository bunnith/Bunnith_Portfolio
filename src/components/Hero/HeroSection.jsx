// src/components/Hero/HeroSection.jsx
import { ArrowDown } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";

export const AnimatedLetters = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current?.children;
    if (!letters || letters.length === 0) return;

    let i = 0;
    const interval = setInterval(() => {
      for (let j = 0; j < letters.length; j++) {
        letters[j].classList.remove(styles.focus);
      }
      letters[i]?.classList.add(styles.focus);

      if (i === letters.length - 1) {
        containerRef.current.classList.add(styles.minusOne);
        containerRef.current.classList.remove(styles.minusTwo);
      } else if (i === letters.length - 2) {
        containerRef.current.classList.add(styles.minusTwo);
        containerRef.current.classList.remove(styles.minusOne);
      } else {
        containerRef.current.classList.remove(styles.minusOne, styles.minusTwo);
      }

      i = (i + 1) % letters.length;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span ref={containerRef} className={styles.letters}>
      {text.split("").map((char, i) => (
        <span key={i}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left: 3D Robot */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-[30%] h-[450px] flex justify-start items-center relative"
        >
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/10 to-transparent rounded-xl z-0"></div>
          <div className="w-full h-full relative max-w-[320px] sm:max-w-[350px] overflow-hidden rounded-xl">
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute bottom-0 w-full h-[40px] bg-gradient-to-t from-[#0D0D1A] to-transparent" />
            </div>
            <Spline scene="https://prod.spline.design/ExzZxC2Oan4AvQgT/scene.splinecode" className="z-0" />
          </div>
        </motion.div>

        {/* Center: Text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-[40%] space-y-6 text-center lg:text-left"
        >
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="block">
              Hello, <span className="text-gradient">I'm</span>{" "}
              <AnimatedLetters text="Narong Bunnith" />
            </span>

            <span className={styles.animatedText}>
              <span></span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            I'm a passionate full-stack developer who loves crafting fast, modern, and user-friendly web applications.
          </motion.p>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            From responsive UIs to full-stack deployments, I enjoy turning complex ideas into beautiful digital experiences.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            className="pt-6 text-center lg:text-center"
          >
            <motion.a
              href="#projects"
              className="cosmic-button inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.85 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Profile placeholder */}
        <motion.div
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView="show"
          className="w-full lg:w-[30%] h-[400px] flex justify-center items-center"
        >
        <motion.div
          className="w-[250px] h-[250px] rounded-full overflow-hidden border border-white/20 shadow-xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src="/e20210205.jpg"
            alt="Narong Bunnith"
            className="w-full h-full object-cover"
          />
        </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        variants={fadeIn("up", 1.0)}
        initial="hidden"
        whileInView="show"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
