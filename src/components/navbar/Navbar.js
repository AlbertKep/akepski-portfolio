import { useState } from "react";
import {
  NavbarContainer,
  IconsContainer,
  Navigation,
  Menu,
  MenuLink,
  // Logo,
  MobileIcon,
} from "./Navbar.styled";
import HamburgerIcon from "../svgComponents/HamburgerIcon";
import { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { openedMenu, hiddenMenu, desktopMenu } from "../../animationsSettings";
import useCheckWidth from "../../hooks/useCheckWidth";
import Logo from "../svgComponents/Logo";

const data = [
  { name: "home", isActive: "active" },
  { name: "about", isActive: "" },
  { name: "projects", isActive: "" },
  { name: "contact", isActive: "" },
];

const Navbar = ({ getRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState(data);
  const [scope, animate] = useAnimate();
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
        <Logo />
        <MobileIcon onClick={handleClick}>
          <HamburgerIcon isOpen={isOpen} />
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
