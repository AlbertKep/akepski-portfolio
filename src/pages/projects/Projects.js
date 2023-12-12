import React, { useEffect } from "react";
import { useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { PROJECTS } from "../../services/queries";

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

const Projects = ({ updateCurrentPage, projectsData }, ref) => {
  const isInView = useInView(ref, {
    margin: "-450px",
  });

  const { loading, error, data } = useQuery(PROJECTS);

  useEffect(() => {
    if (isInView) updateCurrentPage("03");
    console.log("projects", isInView);
  }, [isInView]);

  return (
    <ProjectsContainer ref={ref} data-component-name="projects">
      {projectsData && (
        <>
          <div>
            <Heading>
              <span>{projectsData.title}</span> <br />
              {projectsData.subtitle}
            </Heading>
          </div>

          <ProjectsList>
            {loading && <p>Loading...</p>}
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
