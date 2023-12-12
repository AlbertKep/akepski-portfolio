import { stagger } from "framer-motion";

export const rightMoveVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

export const leftMoveVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

export const verticalMoveVariants = {
  initial: { y: 0 },
  animate: {
    y: 15,
    transition: { duration: 0.8, repeatType: "mirror", repeat: Infinity },
  },
};

export const horizontalMoveVariants = {
  initial: { x: 50 },
  animate: {
    x: 0,
    transition: { duration: 1.2, repeatType: "mirror", repeat: Infinity },
  },
};

export const drawTheLineVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const showTheCircleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const openedMenu = [
  [
    "nav",
    { transform: "translateX(0%)" },
    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.2 },
  ],
  ["li", { x: [50, 0], opacity: 1 }, { delay: stagger(0.05) }],
];

export const hiddenMenu = [
  ["li", { x: [0, 50], opacity: 0 }, { delay: stagger(0.05) }],
  [
    "nav",
    { transform: "translateX(100%)" },
    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.2 },
  ],
];

export const desktopMenu = [
  ["nav", { transform: "translateX(0%)" }],
  ["li", { opacity: 1 }],
];
