import styled, { css } from "styled-components";

export default styled.div`
  display: inline-block;
  line-height: 30px;
  height: 30px;
  margin: 0 15px 0 15px;
  ${props =>
    !props.primary &&
    css`
      &:hover {
        opacity: 0.5;
      }
    `}
    ;
  cursor: pointer;
`;
