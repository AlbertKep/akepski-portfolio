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
import { useEffect } from "react";

const data = [
  { name: "home", isActive: "active" },
  { name: "about", isActive: "" },
  { name: "projects", isActive: "" },
  { name: "contact me", isActive: "" },
];
const Navbar = ({ getRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState(data);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const activeSection = (section, i) => {
    const newArr = [...sections];
    newArr.forEach((sec) => {
      sec.isActive = "";
    });
    newArr[i].isActive = "active";

    setSections(newArr);
    getRef(section.name);
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
          {sections?.map((section, index) => (
            <MenuLink
              key={section.name}
              isActiveLink={section.isActive}
              onClick={() => activeSection(section, index)}
            >
              {section.name}
            </MenuLink>
          ))}
        </Menu>
      </Navigation>
    </NavbarContainer>
  );
};

export default Navbar;
