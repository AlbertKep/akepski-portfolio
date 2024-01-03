import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../../assets/images/person.png";

import { Container } from "../../components/templates/Container";
import { Text } from "../../components/templates/Text";

import Person from "../../components/svgComponents/Person";

import { xMoveVariants } from "../../animationsSettings";

import {
  ContentContainer,
  Background,
  Heading,
  Subheading,
  ImageContainer,
} from "./Home.styled";

const Home = ({ updateCurrentPage, homeData }, ref) => {
  const isInView = useInView(ref, {
    margin: "-400px",
  });

  useEffect(() => {
    if (isInView) updateCurrentPage("01");
  }, [isInView]);

  return (
    <Container ref={ref} data-component-name="home">
      {homeData && (
        <>
          <ContentContainer>
            <Background>
              <img src={bg} alt="background" />
            </Background>
            <Heading
              custom={100}
              variants={xMoveVariants}
              initial="initial"
              animate="animate"
            >
              {homeData.title}
            </Heading>
            <Subheading
              custom={-100}
              variants={xMoveVariants}
              initial="initial"
              animate="animate"
            >
              {homeData.subtitle}
            </Subheading>
            <Text
              as={motion.p}
              custom={100}
              variants={xMoveVariants}
              initial="initial"
              animate="animate"
            >
              {homeData.description}
            </Text>
          </ContentContainer>
          <ImageContainer>
            <Person />
          </ImageContainer>
        </>
      )}
    </Container>
  );
};

export default React.forwardRef(Home);
