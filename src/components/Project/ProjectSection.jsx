import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const projects = [
  {
    id: 1,
    title: "Management Site",
    description: "Manage products and also manage for user order detail in process.",
    image: "/projects/project1.png",
    tags: ["Svelte", "TailwindCSS", "Nestjs", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/MinZin124/Ordering-System",
  },
  {
    id: 2,
    title: "Comparison product specs plateform",
    description:
      "Compare prodcut specs in the same categories .",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Svelte", "Laravel"],
    demoUrl: "https://tech-compare-dun.vercel.app/",
    githubUrl: "https://github.com/NaySovannarith/Tech-Compare",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["Vuejs", "Typescript", "JsonAPI"],
    demoUrl: "#",
    githubUrl: "https://github.com/bunnith/EcommGroupProject",
  },
];

export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, key) => (
            <motion.div
              key={key}
              variants={projectVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </div>

              <div className="p-6">
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      custom={tagIndex}
                      variants={tagVariants}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground text-sm mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: -15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bunnith"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check My Github
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};