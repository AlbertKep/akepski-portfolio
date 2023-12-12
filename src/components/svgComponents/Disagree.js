import { motion } from "framer-motion";

import {
  showTheCircleVariants,
  drawTheLineVariants,
} from "../../animationsSettings";

const Disagree = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <g
          id="Group_768"
          data-name="Group 768"
          transform="translate(-170 -416)"
        >
          <motion.g
            id="Ellipse_4"
            data-name="Ellipse 4"
            transform="translate(170 416)"
            fill="#fff"
            stroke="rgba(230,47,116,0.77)"
            stroke-width="3"
            variants={showTheCircleVariants}
            initial="hidden"
            animate="visible"
          >
            <circle cx="50" cy="50" r="50" stroke="none" />
            <circle cx="50" cy="50" r="48.5" fill="none" />
          </motion.g>
          <motion.line
            id="Line_267"
            data-name="Line 267"
            x2="43"
            y2="45"
            transform="translate(198.5 443.5)"
            fill="none"
            stroke="rgba(230,47,116,0.77)"
            stroke-linecap="round"
            stroke-width="3"
            variants={drawTheLineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.line
            id="Line_268"
            data-name="Line 268"
            x1="43"
            y2="45"
            transform="translate(198.5 443.5)"
            fill="none"
            stroke="rgba(230,47,116,0.93)"
            stroke-linecap="round"
            stroke-width="3"
            variants={drawTheLineVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
      </svg>
    </>
  );
};

export default Disagree;
