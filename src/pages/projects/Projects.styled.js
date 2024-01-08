import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 5em 2em;
  overflow: hidden;

  @media only screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Heading = styled.h2`
  margin: 0;

  span:first-child {
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
  }
  span {
    display: block;
    color: ${({ theme }) => theme.colors.lightGreen};
    font-size: clamp(3rem, 4.5vw + 2rem, 7rem);

    @media only screen and (min-width: 700px) {
      text-align: right;
    }
  }

  @media only screen and (min-width: 700px) {
    position: sticky;
    top: 3em;
    text-align: center;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    padding: 1em;
    margin-left: 1.5em;

    span:first-child {
      line-height: 0.55em;
    }
  }
`;

export const ProjectsList = styled.ul`
  padding: 0;
  width: 100%;
  justify-content: center;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  justify-items: center;

  @media only screen and (min-width: 1400px) {
    gap: 15px;
    padding-left: 2em;
  }
`;

export const Project = styled(motion.li)`
  border-radius: 10px;
  margin: 1em;
  transition: all 0.2s;

  @media only screen and (min-width: 480px) {
    width: 100%;
    max-width: 250px;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const ContentContainer = styled.div`
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 10px;
`;
export const Name = styled.h3``;

export const Description = styled.p``;
