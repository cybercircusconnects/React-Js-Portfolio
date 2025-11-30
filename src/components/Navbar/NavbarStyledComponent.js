import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const NavLogo = styled(LinkR)`
  flex: 1;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  min-width: 0;
  @media (max-width: 768px) {
    flex: 0 0 auto;
    padding: 0 4px;
  }
  @media (max-width: 480px) {
    padding: 0 2px;
  }
`;
export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  white-space: nowrap;
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0 2px;
  }
`;
export const NavItems = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    gap: 20px;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  padding: 4px 0;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  min-height: 36px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  white-space: nowrap;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    padding: 0 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0 12px;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  gap: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    gap: 8px;
    padding: 0 4px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    padding: 8px;
    min-width: 44px;
    min-height: 44px;
    transition: color 0.3s ease;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
    :active {
      transform: scale(0.95);
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 20px 24px 32px 24px;
  background: ${({ theme }) => theme.card_light};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: 999;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  @media (max-width: 480px) {
    padding: 16px 16px 24px 16px;
    gap: 12px;
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 12px 16px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + "15"};
  }
  :active {
    transform: scale(0.98);
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
