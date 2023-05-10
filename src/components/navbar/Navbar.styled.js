import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    padding: 1em 2em 0;
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-box-shadow: 0px 6px 9px -3px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 6px 9px -3px rgba(66, 68, 90, 1);
    box-shadow: 0px 6px 9px -3px rgba(66, 68, 90, 1);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (!isOpen ? "-100%" : 0)};
  width: 100%;
  height: 100svh;
  transition: all 0.2s ease-in-out;

  @media only screen and (min-width: 960px) {
    position: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    height: auto;
    width: max-content;
  }
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 1.5em 1em;
  border-left: ${({ theme }) => `2px solid ${theme.colors.white}`};

  @media only screen and (min-width: 960px) {
    display: flex;
  }
`;

export const MenuLink = styled.li`
  position: relative;
  list-style-type: none;
  margin-top: 1.5em;
  padding: 0.5em 1em;
  text-align: center;
  cursor: pointer;

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
      height: 0;
      bottom: -10px;
      left: 15px;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid white;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.3rem;

    @media only screen and (min-width: 960px) {
      color: ${({ theme }) => theme.colors.black};
      align-self: baseline;

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
export const IconsContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  z-index: 999;

  @media only screen and (min-width: 960px) {
    width: min-content;
  }
`;

export const Logo = styled.div`
  width: 65px;
  cursor: pointer;
  z-index: 999;

  img {
    width: 100%;
  }
`;
export const MobileIcon = styled(Logo)`
  @media only screen and (min-width: 960px) {
    display: none;
  }
`;
