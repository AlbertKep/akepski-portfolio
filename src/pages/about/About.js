import PersonAbout from "../../components/svgComponents/PersonAbout";

import React, { useEffect } from "react";
import { useInView } from "framer-motion";

import { Text } from "../../components/templates/Text";
import {
  AboutContainer,
  AboutContent,
  Wrapper,
  Heading,
  Subheading,
  LeftBox,
  RightBox,
  TechnologiesList,
  Technology,
  ImageContainer,
} from "./About.styled";

const About = ({ updateCurrentPage, aboutData }, ref) => {
  const isInView = useInView(ref, { margin: "-400px" });

  useEffect(() => {
    if (isInView) updateCurrentPage("02");
    console.log("about", isInView);
    console.log(ref);
  }, [isInView]);

  return (
    <AboutContainer ref={ref} data-component-name="about">
      {aboutData && (
        <>
          <AboutContent>
            <Wrapper>
              <Heading>{aboutData.title}</Heading>
              <Subheading>{aboutData.subtitle}</Subheading>
              <Text>{aboutData.description}</Text>
            </Wrapper>
            <LeftBox>
              <TechnologiesList>
                {aboutData.technologies?.map((icon) => (
                  <Technology key={icon.attributes.name}>
                    <img
                      src={`http://localhost:1337${icon.attributes.url}`}
                      alt={icon.attributes.name}
                    />
                  </Technology>
                ))}
              </TechnologiesList>
            </LeftBox>

            <RightBox>
              <TechnologiesList>
                {aboutData.nextTechnologies?.map((icon) => (
                  <Technology key={icon.attributes.name}>
                    <img
                      src={`http://localhost:1337${icon.attributes.url}`}
                      alt={icon.attributes.name}
                    />
                  </Technology>
                ))}
              </TechnologiesList>
            </RightBox>
          </AboutContent>
          <ImageContainer>
            <PersonAbout />
          </ImageContainer>
        </>
      )}
    </AboutContainer>
  );
};

export default React.forwardRef(About);
