import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 5em 2em;

  @media only screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Heading = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 4.5vw + 2rem, 5rem);

  span {
    font-size: clamp(3rem, 5.5vw + 3rem, 7rem);
    color: ${({ theme }) => theme.colors.lightGreen};

    @media only screen and (min-width: 700px) {
      display: block;
      text-align: right;
    }
  }

  @media only screen and (min-width: 700px) {
    position: sticky;
    top: 3em;
    text-align: center;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    line-height: 0.55em;
    padding: 1em;
  }
`;

export const ProjectsList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const Project = styled.li`
  border-radius: 10px;
  margin: 1em;
  transition: all 0.2s;

  @media only screen and (min-width: 480px) {
    width: 100%;
    max-width: 250px;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const ContentContainer = styled.div`
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 10px;
`;
export const Name = styled.h3``;

export const Description = styled.p``;
