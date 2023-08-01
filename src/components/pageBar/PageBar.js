import styled from "styled-components";

const Container = styled.div`
  display: none;

  @media only screen and (min-width: 960px) {
    display: block;
    position: fixed;
    top: 30%;
    right: 80px;
  }
`;

const Bar = styled.div`
  width: 4px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
`;

const Page = styled.div`
  position: absolute;
  top: 0;
  left: -1px;
  width: 6px;
  /* height: 100px; */
  height: calc(400px / 3);
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;

  span {
    font-size: 2rem;
    padding-left: 0.5em;
  }
`;

const PageBar = ({ page }) => {
  return (
    <Container>
      <Bar>
        {/* <Page /> */}
        <Page>
          <span>{page}</span>
        </Page>
      </Bar>
    </Container>
  );
};

export default PageBar;
