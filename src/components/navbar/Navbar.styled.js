import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.state.navigationBgColor};
  transition: all 0.5s ease-out;

  position: sticky;
  top: 0;
  z-index: 999;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    padding: 1em 2em 0;
    backdrop-filter: none;
    -webkit-box-shadow: 0px 6px 9px -3px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 6px 9px -3px rgba(66, 68, 90, 1);
    box-shadow: 0px 6px 9px -3px rgba(66, 68, 90, 1);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.state.navigationBgColor};

  position: fixed;
  top: 0;
  /* transform: translateX(100%); */
  /* right: ${({ isOpen }) => (!isOpen ? "-100%" : 0)}; */
  width: 100%;
  height: 100vh;
  transition: all 0.2s ease-in-out;

  @media only screen and (min-width: 960px) {
    background-color: transparent;
    position: inherit;
    /* transform: translateX(0); */
    /* background-color: transparent; */
    height: auto;
    width: max-content;
  }
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 1.5em 1em;
  border-left: ${({ theme }) => `2px solid ${theme.state.pageBarColor}`};

  @media only screen and (min-width: 960px) {
    display: flex;
    border-left: none;
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
    isActiveLink ? theme.state.activeLinkFontColor : theme.state.linkFontColor};
  background-color: ${({ theme, isActiveLink }) =>
    isActiveLink ? theme.state.activelinkBgColor : `transparent`};
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
    border-right-color: ${({ theme, isActiveLink }) =>
      isActiveLink ? theme.state.activelinkBgColor : `transparent`};
  }

  @media only screen and (min-width: 960px) {
    opacity: 1;
    margin-right: 1.5em;
    align-self: baseline;
    padding-right: 0.7em;
    padding-left: 0.7em;

    &::after {
      left: 10px;
      bottom: -10px;
      transform: rotateY(150deg);
    }

    &:hover {
      background-color: ${({ theme, isActiveLink }) =>
        isActiveLink || !isActiveLink
          ? theme.state.activelinkBgColor
          : `transparent`};
      color: ${({ theme, isActiveLink }) =>
        isActiveLink || !isActiveLink
          ? theme.state.activeLinkFontColor
          : theme.colors.linkFontColor};

      &::after {
        border-right-color: ${({ isActiveLink, theme }) =>
          isActiveLink || !isActiveLink
            ? theme.state.activelinkBgColor
            : `transparent`};
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
