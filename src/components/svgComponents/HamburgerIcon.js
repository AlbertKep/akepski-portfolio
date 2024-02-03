import { useTheme } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  pathTopVariants,
  pathMiddleVariants,
  pathBottomVariants,
} from "../../animationsSettings";

const HamburgerIcon = ({ isOpen, handleClick }) => {
  const theme = useTheme();
  const pathTopControls = useAnimation();
  const pathBottomControls = useAnimation();
  const pathMiddleControls = useAnimation();

  useEffect(() => {
    const toggleMenu = async () => {
      if (isOpen) {
        await pathMiddleControls.start(pathMiddleVariants.open);
        pathBottomControls.start(pathBottomVariants.increaseWidth);
        pathTopControls.start(pathTopVariants.opened);
        pathBottomControls.start(pathBottomVariants.opened);
      } else {
        pathBottomControls.start(pathBottomVariants.decreaseWidth);
        pathTopControls.start(pathTopVariants.closed);
        pathMiddleControls.start(pathMiddleVariants.closed);
        pathBottomControls.start(pathBottomVariants.closed);
      }
    };

    toggleMenu();
  }, [isOpen]);

  return (
    <>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <motion.path
          d="M0 20L60 20"
          stroke-width="5"
          animate={pathTopControls}
          transition={{ duration: 0.4 }}
          stroke={theme.state.menuIconColor}
        />
        <motion.path
          d="M0 30L50 30"
          stroke-width="5"
          animate={pathMiddleControls}
          transition={{ duration: 0.5 }}
          stroke={theme.state.menuIconColor}
        />
        <motion.path
          d="M 0 40 L 40 40"
          stroke-width="5"
          animate={pathBottomControls}
          transition={{ duration: 0.4 }}
          stroke={theme.state.menuIconColor}
        />
      </svg>
    </>
  );
};

export default HamburgerIcon;
