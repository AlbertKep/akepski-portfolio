import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../../assets/images/person.png";

import { Container } from "../../components/templates/Container";
import { Text } from "../../components/templates/Text";

import Person from "../../components/svgComponents/Person";

import {rightMoveVariants, leftMoveVariants} from '../../animationsSettings'

import {
  ContentContainer,
  Background,
  Heading,
  Subheading,
  ImageContainer,
} from "./Home.styled";

const Home = (props, ref) => {
  const isInView = useInView(ref, {
    margin: "-400px",
  });

  useEffect(() => {
    if (isInView) props.updateCurrentPage("01");
    
  }, [isInView]);


  // const rightMoveVariants = {
  //   initial: { x: -100, opacity: 0 },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { duration: 0.8, delay: 0.3 },
  //   },
  // };

  // const leftMoveVariants = {
  //   initial: { x: 100, opacity: 0 },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { duration: 0.8, delay: 0.3 },
  //   },
  // };

  return (
    <Container ref={ref} data-component-name="home">
      <ContentContainer>
        <Background>
          <img src={bg} alt="background" />
        </Background>
        <Heading
          variants={rightMoveVariants}
          initial="initial"
          animate="animate"
        >
          <span>Hi</span> I'm Albert
        </Heading>
        <Subheading
          variants={leftMoveVariants}
          initial="initial"
          animate="animate"
        >
          I'm Front-End Developer and this is my portfolio
        </Subheading>
        <Text
          as={motion.p}
          variants={leftMoveVariants}
          initial="initial"
          animate="animate"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          obcaecati maiores, amet magnam perspiciatis aut expedita sint nam.
          Perspiciatis nulla veniam molestiae placeat sint eos quos ipsa odio
          totam nesciunt?
        </Text>
      </ContentContainer>
      <ImageContainer>
        <Person />
      </ImageContainer>
    </Container>
  );
};

export default React.forwardRef(Home);
