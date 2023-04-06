import bg from "../../assets/images/person.png";

import { Container } from "../../components/templates/Container";
import Person from "../../components/svgComponents/Person";
import {
  ContentContainer,
  Background,
  Heading,
  Subheading,
  Text,
  ImageContainer,
} from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <ContentContainer>
        <Background>
          <img src={bg} alt="background" />
        </Background>
        <Heading>
          <span>Hi</span> I'm Albert
        </Heading>
        <Subheading>
          I'm Front-End Developer and this is my portfolio
        </Subheading>
        <Text>
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

export default Home;
