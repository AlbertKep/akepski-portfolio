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
  color: ${({ theme, isActiveLink }) =>
    isActiveLink ? theme.colors.black : theme.colors.white};
  background-color: ${({ theme, isActiveLink }) =>
    isActiveLink ? theme.colors.white : theme.colors.black};
  font-size: 1.3rem;
  border-radius: 5px;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    bottom: 13px;
    left: -10px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid;
    border-right-color: ${({ isActiveLink, theme }) =>
      isActiveLink && theme ? theme.colors.white : theme.colors.black};
  }

  &:hover {
    background-color: ${({ theme, isActiveLink }) =>
      isActiveLink || !isActiveLink ? theme.colors.white : theme.colors.black};
    color: ${({ theme, isActiveLink }) =>
      isActiveLink || !isActiveLink ? theme.colors.black : theme.colors.white};

    &::after {
      border-right-color: ${({ isActiveLink, theme }) =>
        isActiveLink || !isActiveLink
          ? theme.colors.white
          : theme.colors.black};
    }
  }

  @media only screen and (min-width: 960px) {
    margin-right: 1.5em;
    align-self: baseline;
    padding-right: 0.7em;
    padding-left: 0.7em;
    color: ${({ theme, isActiveLink }) =>
      isActiveLink ? theme.colors.white : theme.colors.black};
    background-color: ${({ theme, isActiveLink }) =>
      isActiveLink ? theme.colors.black : theme.colors.white};

    &::after {
      left: 10px;
      bottom: -10px;
      transform: rotateY(150deg);
      border-right-color: ${({ isActiveLink, theme }) =>
        isActiveLink && theme ? theme.colors.black : theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme, isActiveLink }) =>
        isActiveLink || !isActiveLink
          ? theme.colors.black
          : theme.colors.white};
      color: ${({ theme, isActiveLink }) =>
        isActiveLink || !isActiveLink
          ? theme.colors.white
          : theme.colors.black};

      &::after {
        border-right-color: ${({ isActiveLink, theme }) =>
          isActiveLink || !isActiveLink
            ? theme.colors.black
            : theme.colors.white};
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
