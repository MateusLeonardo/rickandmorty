import styled from "styled-components";

export const Header = styled.header`
  background-color: white;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1003;

  @media (max-width: 768px) {
    z-index: 1003;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1003;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  height: 40px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  display: block;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 24px;
  }

  li {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #555ab9;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: ${({ $isOpen }) =>
    $isOpen ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px;
  top: 16px;
  right: 16px;
  z-index: 1002;

  span {
    width: 100%;
    height: 3px;
    background-color: #333;
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translate(8px, 8px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translate(3px, -3px)" : "none"};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 1001;
  padding-top: 80px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 16px 24px;
    font-size: 18px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f5f5f5;
      color: #555ab9;
    }

    &:active {
      background-color: #e0e0e0;
    }
  }
`;
