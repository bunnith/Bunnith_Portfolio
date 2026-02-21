// src/components/About/NeonButton.jsx
import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./About.module.css";

export const NeonButton = ({
  href,
  children,
  animated = true,
  variant = "default",
  download = false,
  target,
  rel
}) => {
  return (
    <motion.a
      href={href}
      download={download}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx("text-base md:text-lg px-4 py-1.5 uppercase", styles.neonButton, styles[variant])}
    >
      {animated && (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </>
      )}
      {children}
    </motion.a>
  );
};
