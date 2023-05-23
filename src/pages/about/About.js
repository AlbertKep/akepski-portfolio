import HtmlIcon from "../../assets/svg/technologies/html-icon.svg";
import CssIcon from "../../assets/svg/technologies/css-icon.svg";
import JsIcon from "../../assets/svg/technologies/js-icon.svg";
import ReactIcon from "../../assets/svg/technologies/react-icon.svg";
import PersonAbout from "../../components/svgComponents/PersonAbout";

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

const Technologies = [
  { icon: HtmlIcon, name: "Html" },
  { icon: CssIcon, name: "Css" },
  { icon: JsIcon, name: "Java Script" },
  { icon: ReactIcon, name: "React" },
  { icon: HtmlIcon, name: "Html" },
  { icon: CssIcon, name: "Css" },
  { icon: JsIcon, name: "Java Script" },
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
        <LeftBox>
          <TechnologiesList>
            {Technologies?.map((technology) => (
              <Technology key={technology.name}>
                <img src={technology.icon} alt={technology.name} />
              </Technology>
            ))}
          </TechnologiesList>
        </LeftBox>

        <RightBox>
          <TechnologiesList>
            {Technologies?.map((technology) => (
              <Technology key={technology.name}>
                <img src={technology.icon} alt={technology.name} />
              </Technology>
            ))}
          </TechnologiesList>
        </RightBox>
      </AboutContent>
      <ImageContainer>
        <PersonAbout />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
