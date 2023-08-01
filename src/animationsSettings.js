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