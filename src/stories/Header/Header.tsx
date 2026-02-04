import React, { useState } from "react";
import {
  Header as HeaderComponent,
  HeaderContainer,
  HeaderLogo,
  Nav,
  LogoContainer,
  MobileMenuButton,
  MobileMenu,
  MobileNav,
} from "./Header.styles";
import logo from "../../assets/logo-black.png";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = ["Home", "Characters", "Locations", "Episodes"];

  return (
    <>
      <HeaderComponent>
        <HeaderContainer>
          <LogoContainer>
            <HeaderLogo src={logo} alt="Rick and Morty" />
          </LogoContainer>

          <Nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Nav>

          <MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </HeaderContainer>
      </HeaderComponent>

      <MobileMenu $isOpen={isMenuOpen} onClick={closeMenu}>
        <MobileNav $isOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
          <ul>
            {menuItems.map((item) => (
              <li key={item} onClick={closeMenu}>
                {item}
              </li>
            ))}
          </ul>
        </MobileNav>
      </MobileMenu>
    </>
  );
};
