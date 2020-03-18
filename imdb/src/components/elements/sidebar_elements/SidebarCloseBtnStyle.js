import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  margin-top: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.5;
  }
  padding-left: 20px;
  padding-right: 20px;
  background-color: orange;
  border-radius: 50%;
`;
