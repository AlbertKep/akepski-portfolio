import React, { useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { PROJECTS } from "../../services/queries";
import useCheckWidth from "../../hooks/useCheckWidth";
import { xMoveVariants, yMoveVariants } from "../../animationsSettings";

import {
  ProjectsContainer,
  Heading,
  ProjectsList,
  Project,
  ImageContainer,
  ContentContainer,
  Name,
  Description,
} from "./Projects.styled";
import Loader from "../../components/loader/Loader";

const Projects = ({ updateCurrentPage, projectsData }, ref) => {
  const isInView = useInView(ref, {
    margin: "-400px",
  });

  const { loading, error, data } = useQuery(PROJECTS);
  const currentWidth = useCheckWidth();

  useEffect(() => {
    if (isInView) {
      updateCurrentPage("03");
    }
  }, [isInView]);

  return (
    <ProjectsContainer ref={ref} data-component-name="projects">
      {projectsData && (
        <>
          <div>
            <Heading>
              <motion.span
                custom={100}
                variants={currentWidth > 960 ? yMoveVariants : xMoveVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {projectsData.title}
              </motion.span>
              <motion.span
                custom={-100}
                variants={currentWidth > 960 ? yMoveVariants : xMoveVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {projectsData.subtitle}
              </motion.span>
            </Heading>
          </div>

          <ProjectsList>
            {loading && <Loader color />}
            {error && <pre>{error.message}</pre>}

            {data &&
              data.projects.data.map((project) => (
                <Project key={project.attributes.title}>
                  <ImageContainer>
                    <img
                      src={`http://localhost:1337${project.attributes.image.data.attributes.url}`}
                      alt={project.attributes.image.data.attributes.name}
                    />
                  </ImageContainer>
                  <ContentContainer>
                    <Name>{project.attributes.title}</Name>
                    <Description>{project.attributes.description}</Description>
                  </ContentContainer>
                </Project>
              ))}
          </ProjectsList>
        </>
      )}
    </ProjectsContainer>
  );
};

export default React.forwardRef(Projects);
