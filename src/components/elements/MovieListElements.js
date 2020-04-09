import styled from "styled-components";
import { Pagination } from "antd";

export const StyledTitle = styled.h1`
  text-align: left;
  margin-left: 25px;
  margin-top: 15px;
  font-size: 32px;
  font-weight: bold;
  font-family: "Montserrat-Medium";
  color: orange;
`;

export const StyledPagination = styled(Pagination)`
  padding-top: 80px;
  padding-bottom: 10px;
`;

export const Card = styled.div`
  display: inline-block;
`;
