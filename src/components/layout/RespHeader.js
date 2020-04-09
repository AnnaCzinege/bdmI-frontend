import React from "react";
import styled from "styled-components";
import LogoImg from "../../Logo.png";
import { Link } from "react-router-dom";

const SLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const LogoContainer = styled.div`
    height: 50%;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
  height: 56px;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled.img`
  height: 100%;
`;

function RespHeader() {
  return (
    <Header>
      <Nav>
        <LogoContainer>
          <SLink to="/">
            <Logo src={LogoImg} alt="" />
          </SLink>
        </LogoContainer>
          <div></div>
          <div>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
      </Nav>
    </Header>
  );
}

export default RespHeader;
