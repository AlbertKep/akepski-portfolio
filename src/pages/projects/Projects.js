import examplePicture from "../../assets/images/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg";

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
const Projects = () => {
  return (
    <ProjectsContainer>
      <div>
        <Heading>
          <span>what</span> <br />I did
        </Heading>
      </div>

      <ProjectsList>
        <Project>
          <ImageContainer>
            <img src={examplePicture} alt="project" />
          </ImageContainer>
          <ContentContainer>
            <Name>Tic tac toe</Name>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sapiente expedita, quidem eius hic aspernatur!
              Repellat est incidunt ipsum. Porro corporis consectetur dolor
              inventore quisquam rem temporibus officia ab hic.
            </Description>
          </ContentContainer>
        </Project>
        <Project>
          <ImageContainer>
            <img src={examplePicture} alt="project" />
          </ImageContainer>
          <ContentContainer>
            <Name>Tic tac toe</Name>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sapiente expedita, quidem eius hic aspernatur!
              Repellat est incidunt ipsum. Porro corporis consectetur dolor
              inventore quisquam rem temporibus officia ab hic.
            </Description>
          </ContentContainer>
        </Project>
        <Project>
          <ImageContainer>
            <img src={examplePicture} alt="project" />
          </ImageContainer>
          <ContentContainer>
            <Name>Tic tac toe</Name>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sapiente expedita, quidem eius hic aspernatur!
              Repellat est incidunt ipsum. Porro corporis consectetur dolor
              inventore quisquam rem temporibus officia ab hic.
            </Description>
          </ContentContainer>
        </Project>
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;
