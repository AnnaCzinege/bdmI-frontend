import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
  color: white;
`;
