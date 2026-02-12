import { useState } from "react";
import * as S from "./Header.styles.ts";
import logo from "/logo-black.png";
import { Link } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Characters" },
  { to: "/episodes", label: "Episodes" },
  { to: "/locations", label: "Locations" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoContainer>
          <Link to="/" onClick={closeMenu}>
            <S.HeaderLogo src={logo} alt="Rick and Morty" />
          </Link>
        </S.LogoContainer>

        <S.Nav>
          <ul>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </S.Nav>

        <S.MobileMenuButton
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          $isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </S.MobileMenuButton>
      </S.HeaderContainer>

      <S.MobileMenu $isOpen={isMenuOpen} onClick={closeMenu} aria-hidden />
      <S.MobileNav $isOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
        <ul>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </S.MobileNav>
    </S.Header>
  );
};
