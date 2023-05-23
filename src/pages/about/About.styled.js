import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

export const AboutContent = styled.div`
  padding: 3em 1.5em;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  order: 1;
  width: max-content;
  max-width: 550px;
  width: 100%;
  padding: 0.5em;
  margin: auto;

  @media only screen and (min-width: 960px) {
    width: max-content;
    order: 2;
    margin: 1em 0.3em;
  }
`;
export const Heading = styled.h2`
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

export const Subheading = styled.h3`
  text-align: center;
  font-size: clamp(2rem, 3vw + 1rem, 3rem);
  font-weight: 500;
  margin-top: 0;
  letter-spacing: -0.01em;
`;

export const Box = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin: 2.5em auto;
  width: 100%;
  max-width: 350px;

  &::after {
    position: absolute;
    background-color: rgb(0, 0, 0);
    margin-right: 1em;
    padding: 0.2em 1.3em;
    border-radius: 10px 10px 0 0;
  }
`;

export const LeftBox = styled(Box)`
  margin-bottom: 3.5em;

  &::after {
    content: "Technologies";
    position: absolute;
    top: -35px;
  }
  @media only screen and (min-width: 960px) {
    order: 1;
    margin-right: 1.5em;
  }

  @media only screen and (min-width: 1400px) {
    &::after {
      transform: rotate(270deg);
      top: 65px;
      left: -93px;
    }
  }
`;

export const RightBox = styled(Box)`
  &::after {
    content: "Next";
    position: absolute;
    top: -36px;
  }
  @media only screen and (min-width: 960px) {
    order: 3;
    margin-left: 1.5em;
  }

  @media only screen and (min-width: 1400px) {
    &::after {
      transform: rotate(90deg);
      top: 30px;
      right: -75px;
    }
  }
`;

export const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;
export const Technology = styled.li`
  padding: 0.5em;
`;

export const ImageContainer = styled.div`
  text-align: center;
  padding-bottom: 2em;

  svg {
    transform: scale(0.7);
  }

  @media only screen and (min-width: 960px) {
    svg {
      transform: scale(1);
    }
  }
`;
