import { Container } from "../../components/templates/Container";
import { Text } from "../../components/templates/Text";

import HtmlIcon from "../../assets/svg/technologies/html-icon.svg";
import CssIcon from "../../assets/svg/technologies/css-icon.svg";
import JsIcon from "../../assets/svg/technologies/js-icon.svg";
import ReactIcon from "../../assets/svg/technologies/react-icon.svg";
import styled from "styled-components";

const AboutContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

const AboutContent = styled.div`
  padding: 3em 1.5em;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  order: 1;
  max-width: 550px;
  width: 100%;
  padding: 0.5em;
  margin: auto;

  @media only screen and (min-width: 960px) {
    order: 2;
    margin: 1em 0.3em;
  }
`;
const Heading = styled.h2`
  font-size: clamp(3rem, 3vw + 1rem, 6rem);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.3em;
  margin-bottom: 0;

  span {
    display: block;
    font-size: clamp(5.5rem, 7vw + 1rem, 6.5rem);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.1em;
  }
`;

const Subheading = styled.h3`
  text-align: center;
  font-size: clamp(2rem, 3vw + 1rem, 3rem);
  font-weight: 500;
  margin-top: 0;
  letter-spacing: -0.01em;
`;

const Box = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin: 1.5em auto;
  width: 100%;
  max-width: 350px;

  &::after {
    position: absolute;
    background-color: rgb(0, 0, 0);
    margin-right: 1em;
    transform: rotate(270deg);
    padding: 0.2em 1.3em;
    border-radius: 10px 10px 0 0;
  }

  @media only screen and (min-width: 960px) {
  }
`;

const SkillsBox = styled(Box)`
  &::after {
    content: "Skills";
    position: absolute;
    top: 30px;
    left: -60px;
  }
  @media only screen and (min-width: 960px) {
    order: 1;
  }
`;

const TechnologiesBox = styled(Box)`
  &::after {
    content: "Next";
    position: absolute;
    top: 30px;
    /* right: -75px; */
    transform: rotate(90deg);
  }
  @media only screen and (min-width: 960px) {
    order: 3;
  }
`;

const Technologies = [
  { icon: HtmlIcon, name: "Html" },
  { icon: CssIcon, name: "Css" },
  { icon: JsIcon, name: "Java Script" },
  { icon: ReactIcon, name: "React" },
];

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <Wrapper>
          <Heading>
            <span>Brief</span> About Me
          </Heading>
          <Subheading>AND SKILLS OF COURSE</Subheading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            atque, debitis ratione perspiciatis quia sed! Architecto recusandae
            explicabo mollitia dignissimos atque repellat pariatur repudiandae
            quas, veritatis officia rerum eaque tenetur.
          </Text>
        </Wrapper>
        <SkillsBox>
          <ul>
            {Technologies?.map((technology) => (
              <li key={technology.name}>
                <img src={technology.icon} alt={technology.name} />
              </li>
            ))}
          </ul>
        </SkillsBox>

        <TechnologiesBox>Technology</TechnologiesBox>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
