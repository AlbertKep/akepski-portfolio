import { stagger } from "framer-motion";

export const xMoveVariants = {
  initial: (i) => ({
    opacity: 0,
    x: i,
  }),

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
    },
  },
};

export const yMoveVariants = {
  initial: (i) => ({
    opacity: 0,
    y: i,
  }),

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
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

export const loaderVariants = {
  initial: 10,
  animate: (i) => ({
    y: -10,

    transition: {
      delay: i * 0.1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  }),
};

export const showUpVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      ease: "easeIn",
    },
  }),
};

// hamburger icon opened/closed
export const pathTopVariants = {
  closed: { d: "M0 20L60 20" },
  opened: { d: "M 5 10 L 50 50" },
};

export const pathMiddleVariants = {
  closed: { x: 0 },
  open: { x: -100 },
};

export const pathBottomVariants = {
  increaseWidth: { d: "M 0 40 L60 40" },
  decreaseWidth: { d: "M 0 40 L40 40" },
  closed: { d: "M 0 40 L 40 40" },
  opened: { d: "M 5 50 L 50 10" },
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
