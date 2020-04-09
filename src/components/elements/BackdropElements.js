import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  display: ${props => props.status};
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: 2;
  top: 0;
  left: 0;
  transition: 0.5s;
`;
