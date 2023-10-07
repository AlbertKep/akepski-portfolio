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
import { useAnimate } from "framer-motion";
import { openedMenu, hiddenMenu, desktopMenu } from "../../animationsSettings";
import useCheckWidth from "../../hooks/useCheckWidth";

const data = [
  { name: "home", isActive: "active" },
  { name: "about", isActive: "" },
  { name: "projects", isActive: "" },
  { name: "contact me", isActive: "" },
];

const Navbar = ({ getRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState(data);
  const [scope, animate] = useAnimate();
  // const [sWidth, setSWidth] = useState(window.innerWidth);
  const currentWidth = useCheckWidth();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const activeSection = (section, i) => {
    handleClick();
    const newArr = [...sections];
    newArr.forEach((sec) => {
      sec.isActive = "";
    });
    newArr[i].isActive = "active";

    setSections(newArr);
    getRef(section.name);
  };

  useEffect(() => {
    if (currentWidth <= 960) {
      const sequence = isOpen ? openedMenu : hiddenMenu;
      animate(sequence, { duration: 1 });
    } else if (currentWidth > 960) {
      animate(desktopMenu, { duration: 0.1 });
    }
  }, [isOpen, currentWidth]);

  return (
    <NavbarContainer ref={scope}>
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
