import styled from "styled-components";

export const ContentContainer = styled.div`
  position: relative;
  height: calc(100svh - 80px);
  max-width: 600px;
  width: 100%;
  padding: 0 1.5em;

  @media only screen and (min-width: 960px) {
    height: auto;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -999;
  opacity: 0.15;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: clamp(3rem, 2.5vw + 1rem, 6rem);
  line-height: clamp(1.8em, 4.5vw + 1em, 2em);
  font-weight: 500;
  margin: 0;

  span {
    font-size: clamp(6rem, 3.5vw, 12rem);
    display: block;
    font-weight: 800;
  }
`;

export const Subheading = styled.h3`
  font-size: clamp(1.5rem, 3.5vw + 1rem, 2rem);
`;

export const Text = styled.p`
  font-size: clamp(1.2rem, 1vw + 0.2rem, 1.6rem);
  text-align: justify;
`;

export const ImageContainer = styled.div`
  display: none;

  @media only screen and (min-width: 960px) {
    display: block;
    max-width: 750px;
    width: 100%;
    margin: auto;
  }
`;
