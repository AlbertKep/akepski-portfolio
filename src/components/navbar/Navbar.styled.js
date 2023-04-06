import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: sticky;
  max-width: 1600px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 auto;
  padding: 1.5em 1em;
  z-index: 999;
`;

export const Navigation = styled.nav`
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (!isOpen ? 0 : "-100%")};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  transition: all 0.2s ease-in;

  @media only screen and (min-width: 960px) {
    position: inherit;
    height: 80px;
    /* width: 80%; */
    background-color: ${({ theme }) => theme.colors.white};
    padding: 3em 1.5em 2em;
    justify-content: flex-end;
    /* border-bottom: ${({ theme }) =>
      `2px solid ${theme.colors.lightGrey}`}; */

    &::after {
      position: absolute;
      content: "";
      width: 80%;
      bottom: -10px;
      right: 60px;
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.lightGrey}`};
    }
  }
`;

export const Menu = styled.ul`
  position: relative;
  border-left: ${({ theme }) => `2px solid ${theme.colors.white}`};
  padding: 1.5em 1em;

  @media only screen and (min-width: 960px) {
    display: flex;
    border-left: none;
  }
`;

export const MenuLink = styled.li`
  position: relative;
  list-style-type: none;
  margin-top: 1.5em;
  padding: 0 0.2em;
  font-size: clamp(1.8rem, 2vw, 2rem);
  text-align: center;
  cursor: pointer;

  &:last-child {
    margin-bottom: 1.5em;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;

    & a {
      color: ${({ theme }) => theme.colors.black};
    }

    &::after {
      position: absolute;
      content: "";
      width: 0;
      bottom: -10px;
      left: 15px;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid white;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    /* font-size: clamp(1.8rem, 3.5vw, 3.8rem); */
    font-size: 1.3rem;

    @media only screen and (min-width: 960px) {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media only screen and (min-width: 960px) {
    margin-right: 1.5em;
    align-self: baseline;
    padding-right: 0.7em;
    padding-left: 0.7em;

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 5px;

      a {
        color: ${({ theme }) => theme.colors.white};
      }

      &::after {
        border-left: 10px solid black;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 65px;
  cursor: pointer;
  z-index: 999;

  img {
    width: 100%;
  }
`;
export const MobileIconContainer = styled(ImageContainer)`
  @media only screen and (min-width: 960px) {
    display: none;
  }
`;
