// src/variants.js
export const fadeIn = (direction = "up", delay = 0) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -60;
      break;
    case "right":
      x = 60;
      break;
    case "up":
      y = 60;
      break;
    case "down":
      y = -60;
      break;
  }

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.7,
        delay,
      },
    },
  };
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};
