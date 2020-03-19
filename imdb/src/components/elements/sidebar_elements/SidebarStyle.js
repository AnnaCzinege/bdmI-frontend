import styled from "styled-components";

export default styled.div`
  font-family: fantasy;
  text-align: left;
  height: 100%;
  width: ${props => props.isOpen};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #1a1a1a;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
`;
