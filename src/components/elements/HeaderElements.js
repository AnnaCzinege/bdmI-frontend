import styled from "styled-components";
import { Link } from "react-router-dom";
import { AutoComplete as autoComplete } from "antd";

export const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: orange;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 1rem;
  height: 55%;
`;

export const ToggleBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background: #333;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
  height: 56px;
  font-family: fantasy;
  font-size: 20px;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  padding: 0 0.5rem;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const MenuContainer = styled.div`
  @media (max-width: 567px) {
    display: none;
  }
`;

export const AutoComplete = styled(autoComplete)`
  width: 500px;
  @media (max-width: 768px) {
    width: 185px;
    margin-left: 10px;
  }
`;
