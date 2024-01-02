import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled(motion.span)`
  display: inline-block;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0);
  width: 25px;
  height: 25px;
  background-color: ${({ color, theme }) =>
    color ? theme.colors.lightGreen : "#000"};
  margin: 0.5em;
  border-radius: 50%;
`;
