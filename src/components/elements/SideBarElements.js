import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SLink = styled(Link)`
  overflow: hidden;
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
  width: 70%;
  max-width: 300px;
  background-color: #1a1a1a;
  position: fixed;
  overflow-y: hidden;
  z-index: 3;
  top: 0;
  left: 0;
  box-shadow: 2px 0px 5px black;
  transform: ${(props) => `translateX(${props.sideSize})`};
  -webkit-transition: all 0.7s ease;
  -moz-transition: all 0.7s ease;
  -ms-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;
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
      @media (max-width: 617px) {
        display: block;
      }
    `};
`;
