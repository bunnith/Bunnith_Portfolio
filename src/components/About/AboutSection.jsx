// src/components/About/AboutSection.jsx
import { Briefcase, Code, User } from "lucide-react";
import styles from "./About.module.css";
import clsx from 'clsx';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NeonButton } from "./NeonButton";

//  Add this helper component before the AboutSection component
const AnimatedLetters = ({ text }) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08, // slower stagger
          },
        },
      }}
      className="inline-block  bounce-hover"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.9 },
            visible: {
              opacity: 1,
              y: [40, -15, 8, 0],
              scale: [0.9, 1.4, 1.05, 1],
            },
          }}
          transition={{
            duration: 1.1,
            ease: [0.2, 1.5, 0.5, 1],
            delay: index * 0.06,
          }}
          className="inline-block  bounce-hover"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};


export const AboutSection = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    }),
  };

  const items = [
    {
      icon: Code,
      title: "Web development",
      description:
        "I build responsive websites and web applications using modern frameworks, making sure they work well on all devices and provide a smooth user experience.",
      className: styles.aboutItemRight,
    },
    {
      icon: User,
      title: "User Interface",
      description:
        "I design clean and easy-to-use interfaces that focus on user experience and accessibility, making sure every interaction feels smooth and intuitive.",
      className: styles.aboutItem,
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description:
        "I help lead projects from the early planning stages all the way to launch, using agile methods to keep everything organized and on track.",
      className: styles.aboutItemCenter,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

<motion.h2
  className={`text-3xl md:text-4xl font-bold mb-12 text-center ${styles.gradientText}`}
>
  <AnimatedLetters text="About " />
  <span className="text-primary">
    <AnimatedLetters text="Me" />
  </span>
</motion.h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-6"
          >
            <motion.h3
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              className={styles.pass}
            >
              Passionate Web Developer
            </motion.h3>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="text-muted-foreground"
            >
              With over 4 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              className="text-muted-foreground"
            >
              I enjoy creating clean and simple solutions for complex problems.
              I'm always exploring new tools and technologies to improve my
              skills and stay up to date with the fast-changing world of web
              development.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center"
            >
<NeonButton href="#contact" variant="pink" animated>
  Get In Touch
</NeonButton>

<NeonButton
  href="/NARONG_Bunnith_CV.pdf"
  download
  variant="blue"
  animated
>
  Download CV
</NeonButton>

<NeonButton
  href="/NARONG_Bunnith_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  variant="green"
  animated
>
  View CV
</NeonButton>


            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.7 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className={clsx(
                  item.className,
                  "bg-none gradient-border p-6 card-hover"
                )}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-full bg-primary/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="text-left">
                    <h4
                 className={clsx(
               "font-semibold text-lg",
               item.title === "Web development" && styles.gradientTitleWeb,
               item.title === "User Interface" && styles.gradientTitleUI,
               item.title === "Project Management" && styles.gradientTitlePM
               )}
                >
              {item.title}
                  </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
