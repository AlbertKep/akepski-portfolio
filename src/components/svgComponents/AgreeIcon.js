import { motion } from "framer-motion";

import {
  showTheCircleVariants,
  drawTheLineVariants,
} from "../../animationsSettings";

const AgreeIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <motion.g
          id="Ellipse_3"
          data-name="Ellipse 3"
          fill="#fff"
          stroke="#01c38d"
          stroke-width="3"
          variants={showTheCircleVariants}
          initial="hidden"
          animate="visible"
        >
          <circle cx="50" cy="50" r="50" stroke="none" />
          <circle cx="50" cy="50" r="48.5" fill="none" />
        </motion.g>
        <motion.path
          id="Path_1975"
          data-name="Path 1975"
          d="M0,0,12.377,15.318,36-15.5"
          transform="matrix(1, 0.017, -0.017, 1, 32, 49.777)"
          fill="none"
          stroke="#01c38d"
          stroke-linecap="round"
          stroke-width="3"
          variants={drawTheLineVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </>
  );
};

export default AgreeIcon;
