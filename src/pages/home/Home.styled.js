import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentContainer = styled(motion.div)`
  position: relative;
  height: calc(100svh - 80px);
  max-width: 600px;
  width: 100%;
  padding: 0 1.5em;

  @media only screen and (min-width: 960px) {
    height: auto;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -999;
  opacity: 0.15;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

export const Heading = styled(motion.h1)`
  text-transform: uppercase;
  font-size: clamp(4rem, 3.5vw + 1rem, 7rem);
  font-weight: 800;
  margin: 0;
`;

export const Subheading = styled(motion.h3)`
  font-size: clamp(1.5rem, 3.5vw + 1rem, 2rem);
`;

export const ImageContainer = styled.div`
  display: none;

  @media only screen and (min-width: 960px) {
    display: block;
    max-width: 750px;
    width: 100%;
    margin: auto;
  }
`;
