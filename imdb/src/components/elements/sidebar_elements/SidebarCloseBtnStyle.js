import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  text-decoration: none;
  color: orange;
  &:hover {
    opacity: 0.5;
  }
`;
