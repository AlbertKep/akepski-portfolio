import { useState } from "react";
import {
  NavbarContainer,
  Navigation,
  Menu,
  MenuLink,
  ImageContainer,
  MobileIconContainer,
} from "./Navbar.styled";
import logo from "../../assets/svg/logo.svg";
import hamburger from "../../assets/svg/hamburger.svg";
import close from "../../assets/svg/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <ImageContainer>
        <img src={logo} alt="logo" />
      </ImageContainer>
      <MobileIconContainer onClick={handleClick}>
        <img src={isOpen ? hamburger : close} alt="menu icon" />
      </MobileIconContainer>

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
