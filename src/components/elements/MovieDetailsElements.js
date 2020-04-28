import styled from "styled-components";
import { Card as card } from "antd";
import { Layout, PageHeader, Row } from "antd";

export const StyledCard = styled(card)`
  margin: 0 15px;
  font-family: "Montserrat-Regular";
  font-size: 22px;
  background-color: #f2f2f2;
  border-color: white !important;
`;

export const StyledContent = styled(Layout)`
  background: white;
  padding: 30px 50px;
  margin: 110px 50px;
`;

export const StyledDetailsTitle = styled.h1`
  text-align: left;
  margin-top: 15px;
  font-size: 32px;
  font-weight: bold;
  font-family: "Montserrat-Medium";
  color: orange;
  border-bottom: 2px solid #1a1a1a;
`;

export const StyledFooter = styled(Layout)`
  text-align: "center";
`;

export const StyledInfoContainer = styled(PageHeader)`
  border-top: 2px solid #1a1a1a;
  font-family: "Montserrat-Medium";
  font-size: 18px;
`;

export const StyledRate = styled(Row)`
  margin-top: 30px;
  font-family: "Montserrat-Medium";
  font-size: 15px;
`;
