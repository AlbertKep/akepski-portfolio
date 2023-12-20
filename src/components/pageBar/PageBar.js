import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: none;

  @media only screen and (min-width: 960px) {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: block;
    position: fixed;
    top: 30%;
    right: 80px;
    height: 400px;
  }
`;

const Bar = styled.div`
  width: 4px;
  border-radius: 10px;
  transform-origin: 0%;
  position: relative;
`;

const Page = styled.div`
  position: absolute;
  height: calc(400px / 4);
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;

  top: 0;
  left: 0;
  right: 0;
  transform: ${({ translate }) => `translateY(${translate}px)`};

  span {
    font-size: 2rem;
    padding-left: 0.5em;
  }
`;

const PageBar = ({ page }) => {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const checkHeight = () => {
      // height of website in pixels
      const maxscrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      // how many pixels one scroll takes
      const scrolled = window.scrollY;
      const oneScrollInPercent = scrolled * (100 / maxscrollable);
      const oneScrollInPixels = (300 * oneScrollInPercent) / 100;

      setTranslate(oneScrollInPixels);
    };
    window.addEventListener("scroll", checkHeight);
    return () => {
      window.removeEventListener("scroll", checkHeight);
    };
  }, [translate]);

  return (
    <Container>
      <Bar>
        <Page translate={translate}>
          <span>{page}</span>
        </Page>
      </Bar>
    </Container>
  );
};

export default PageBar;
