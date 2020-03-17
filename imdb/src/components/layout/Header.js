import React from "react";
import { Link } from "react-router-dom";
import ToggleBtn from "../../ToggleBtn.png";
import Logo from "../../Logo.png";
import StyledHeader from "../elements/HeaderStyle";
import StyledHeaderItem from "../elements/HeaderItemStyle";
import StyledLogo from "../elements/HeaderLogoStyle";
import StyledToggleBtn from "../elements/HeaderToggleBtnStyle";

const Header = props => {
  return (
    <StyledHeader>
      <StyledHeaderItem>
        <Link to="/">
          <StyledLogo src={Logo} alt=""></StyledLogo>
        </Link>
      </StyledHeaderItem>
      <StyledHeaderItem>
        <StyledToggleBtn src={ToggleBtn} alt=""></StyledToggleBtn> Menu
      </StyledHeaderItem>
      <StyledHeaderItem primary></StyledHeaderItem>
      <StyledHeaderItem>CsicskaGEci</StyledHeaderItem>
      <StyledHeaderItem>Faszláma</StyledHeaderItem>
      <StyledHeaderItem>Lófasz</StyledHeaderItem>
      <StyledHeaderItem>láááááál</StyledHeaderItem>
    </StyledHeader>
  );
};

export default Header;
