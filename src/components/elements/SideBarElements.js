import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: orange;
  }
`;

export const Nav = styled.nav`
  font-family: fantasy;
  font-size: 24px;
  height: 100%;
  width: ${(props) => props.sideSize};
  max-width: 300px;
  background-color: #1a1a1a;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  box-shadow: 2px 0px 5px black;
  overflow: hidden;
  transition: 0.5s ease-out;
`;

export const Ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Li = styled.li`
  margin: 1rem 0;
  ${(props) =>
    props.optional &&
    css`
      display: none;
      @media (max-width: 567px) {
        display: block;
      }
    `};
`;
