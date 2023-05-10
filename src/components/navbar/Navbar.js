import { useState } from "react";
import {
  NavbarContainer,
  IconsContainer,
  Navigation,
  Menu,
  MenuLink,
  Logo,
  MobileIcon,
} from "./Navbar.styled";
import logo from "../../assets/svg/logo.svg";
import hamburger from "../../assets/svg/hamburger.svg";
import close from "../../assets/svg/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <IconsContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <MobileIcon onClick={handleClick}>
          <img src={!isOpen ? hamburger : close} alt="menu icon" />
        </MobileIcon>
      </IconsContainer>

      <Navigation isOpen={isOpen}>
        <Menu>
          <MenuLink>
            <a href="#">home</a>
          </MenuLink>
          <MenuLink>
            <a href="#">about me</a>
          </MenuLink>
          <MenuLink>
            <a href="#">works</a>
          </MenuLink>
          <MenuLink>
            <a href="#">contact me</a>
          </MenuLink>
        </Menu>
      </Navigation>
    </NavbarContainer>
  );
};

export default Navbar;
