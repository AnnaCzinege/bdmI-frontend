import styled from "styled-components";

export default styled.div`
  text-align: center;
  height: 100%;
  width: ${props => props.isOpen};
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
`;
