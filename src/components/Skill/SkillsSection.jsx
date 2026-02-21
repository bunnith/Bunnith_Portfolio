// src/components/SkillsSection.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn, staggerContainer } from "../../variants";
import styles from "./Skill.module.css";
import clsx from 'clsx';

function getTextColor(bgColor) {
  if (!bgColor?.startsWith("#")) return "#ffffff";
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186 ? "#000000" : "#ffffff";
}

function getAnimationDirection(index, total) {
  const col = index % 3;
  const rows = Math.ceil(total / 3);
  const row = Math.floor(index / 3);

  if (col === 0) return "left";
  if (col === 2) return "right";
  if (row < Math.floor(rows / 2)) return "up";
  return "down";
}

function getTextGradient(name) {
  const colors = {
    HTML: "linear-gradient(90deg, #FF512F, #DD2476)",
    CSS: "linear-gradient(90deg, #0052D4, #4364F7, #6FB1FC)",
    Svelte: "linear-gradient(90deg, #FF3E00, #FF7E00)",
    Vue: "linear-gradient(90deg, #42d392, #647eff)",
    Javascript: "linear-gradient(90deg, #F7E018, #FF8C00)",
    TailWind: "linear-gradient(90deg, #06B6D4, #3B82F6)",
    Typescript: "linear-gradient(90deg, #3178C6, #5A8DEE)",
    Laravel: "linear-gradient(90deg, #FF2D20, #F16529)",
    Nestjs: "linear-gradient(90deg, #E0234E, #EA2845)",
    GraphQL: "linear-gradient(90deg, #E535AB, #D32F2F)",
    phpmyadmin: "linear-gradient(90deg, #FF9800, #FFC107)",
    Mysql: "linear-gradient(90deg, #00758f, #2E8B57)",
    Git: "linear-gradient(90deg, #F1502F, #000000)",
    Docker: "linear-gradient(90deg, #0db7ed, #384d54)",
    VsCode: "linear-gradient(90deg, #007ACC, #1E1E1E)",
    Figma: "linear-gradient(90deg, #A259FF, #F24E1E, #FF7262, #1ABCFE)",
    Postman: "linear-gradient(90deg, #FF6C37, #FFB26B)",
    DrawDB: "linear-gradient(90deg, #6f42c1, #B085F5)",
    Android: "linear-gradient(90deg, #3ddc84, #2C8E69)",
  };

  // Match by keyword
  const match = Object.entries(colors).find(([key]) =>
    name.toLowerCase().includes(key.toLowerCase())
  );

  return match ? match[1] : "linear-gradient(90deg, #ffffff, #dddddd)";
}

const skills = [
    {
    name: "HTML/CSS",
    category: "frontend",
    icon: "/skills/html.png",
    level: 90,
    color: "#5919F0FF",
    gradient: "linear-gradient(135deg, #0033FF, #977DFF, #FFCCF2)",
    hoverStyle: "blur",
  },
  { name: "SvelteFramework",
    category: "frontend",
    icon: "/skills/svelte.png",
    level: 85,
    color: "#2E292B" ,
    gradient: "linear-gradient(135deg, #2E292B, #244C33, #F0D7CC)",
    hoverStyle: "glow",
  },
  { name: "Vue",
    category: "frontend",
    icon: "/skills/vue.png",
    level: 70,
    color: "#6700A3" ,
    gradient: "linear-gradient(90deg, #050C38, #6700A3, #683147FF, #9E6C6BFF)",
    hoverStyle: "blur-glow",
  },
  { name: "Javascript",
    category: "frontend",
    icon: "/skills/javascript.png",
    level: 95,
    color: "#1B2062 " ,
    gradient: "linear-gradient(135deg, #050C38 0%, #1B2062 50%, #6700A3 100%)",
    hoverStyle: "pulse",
  },
  { name: "TailWind/CSS",
    category: "frontend",
    icon: "/skills/tailwind.png",
    level: 90,
    color: "#38bdf8" ,
    gradient: "linear-gradient(90deg, #082026, #134D80, #97DDE8)",
    hoverStyle: "shine ",
  },
  { name: "Typescript",
    category: "frontend",
    icon: "/skills/typescript.png",
    level: 80,
    color: "#3178c6" ,
    gradient: "linear-gradient(135deg, rgba(1, 0, 48, 0.9), rgba(22, 0, 120, 0.7), rgba(114, 38, 255, 0.6))",
    hoverStyle: "rotate-glow",
  },
  { name: "Laravel",
    category: "backend",
    icon: "/skills/laravel.png",
    level: 85,
    color: "#BC430D" ,
    gradient: "linear-gradient(135deg, #241705 0%, #BC430D 50%, #FFD7A3 100%)",
    hoverStyle: "frosted",
  },
  { name: "Nestjs",
    category: "backend",
    icon: "/skills/nestjs.png",
    level: 75,
    color: "#ea2845",
    gradient: "linear-gradient(135deg, rgba(159, 2, 94, 0.9), rgba(249, 153, 41, 0.7), rgba(255, 209, 161, 0.5))",
    hoverStyle: "glass",
   },
  { name: "GraphQL",
    category: "backend",
    icon: "/skills/graphql.png",
    level: 65,
    color: "#e535ab" ,
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
  },
  { name: "phpmyadmin",
    category: "backend",
    icon: "/skills/phpmyadmin.png",
    level: 70,
    color: "#f68212",
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
   },
  { name: "Mysql",
    category: "backend",
    icon: "/skills/mysql.png",
    level: 80,
    color: "#00758f" ,
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
  },
  { name: "Git/GitHub",
    category: "tools",
    icon: "/skills/github.png",
    level: 85,
    color: "#333333" ,
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
  },
  { name: "Docker",
    category: "tools",
    icon: "/skills/docker.png",
    level: 65,
    color: "#0db7ed",
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
   },
  { name: "VsCode",
    category: "tools",
    icon: "/skills/vscode.png",
    level: 90,
    color: "#0078d7" ,
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
  },
  { name: "Andriod Studio",
    category: "tools",
    icon: "/skills/androidstudio.png",
    level: 60,
    olor: "#3ddc84" ,
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
  },
  { name: "Figma",
    category: "tools",
    icon: "/skills/figma.png",
    level: 75,
    color: "#a259ff",
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
   },
  { name: "DrawDB",
    category: "tools",
    icon: "/skills/drawdb.png",
    level: 70,
    color: "#6f42c1" ,
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
  },
  { name: "Postman",
    category: "tools",
    icon: "/skills/postman.png",
    level: 80,
    color: "#ff6c37" ,
    gradient: "linear-gradient(90deg, #FD80A8 0%, #FFF3CC 50%, #FCCE42 100%)",
    hoverStyle: "pop-bounce",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const textColor = getTextColor(skill.color);
            const direction = getAnimationDirection(index, filteredSkills.length);

            return (
              <motion.div
                key={index}
                variants={fadeIn(direction, 0.1 + index * 0.07)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
                data-skill={skill.name}
                className={cn(
                  "rounded-2xl p-5 shadow-md backdrop-blur-md transition-all duration-300",
                  styles["skill-card"],
                  skill.hoverStyle && styles[skill.hoverStyle]
                )}
                style={{
                  "--hover-color": skill.color,
                  "--hover-text": textColor,
                  "--hover-gradient": skill.gradient || "none",
                  "--name-gradient": getTextGradient(skill.name),
                }}
              >
           <div className="text-left mb-4 space-y-2">
<h3
  className={clsx(
    "font-semibold text-lg transition-colors duration-300",
    styles["gradient-name"]
  )}
>
  {skill.name}
</h3>

            {skill.icon && (
       <div className="w-full h-14 flex items-center justify-start">
            <img
        src={skill.icon}
        alt={`${skill.name} logo`}
         className="h-full object-contain"
         />
       </div>
          )}
             </div>


                <div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full origin-left transition-all duration-700 ease-out"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
