import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15px;
  width: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:active {
    outline: none;
  }
  padding: 0;
  box-sizing: border-box;
`;

const ButtonLine = styled.div`
  width: 20px;
  height: 2px;
  background: white;
`;

function ToggleBtn() {
  return (
    <Button>
      <ButtonLine></ButtonLine>
      <ButtonLine></ButtonLine>
      <ButtonLine></ButtonLine>
    </Button>
  );
}

export default ToggleBtn;
