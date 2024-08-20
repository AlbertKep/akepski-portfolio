import styled from "styled-components"

export const FooterBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};

  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  li *  {
    color: ${({ theme }) => theme.colors.white};
    margin: 0.5em;
  }

  a {
    text-decoration: none;
  }

  svg {
      height: 1.5em;
      width: 1.5em;
    }
`
