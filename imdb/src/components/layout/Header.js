import React from "react";
import { Link } from "react-router-dom";
import ToggleBtn from "../../ToggleBtn.png";
import Logo from "../../Logo.png";
import SearchIcon from "../../SearchIcon.png";
import StyledHeader from "../elements/header_elements/HeaderStyle";
import StyledHeaderItem from "../elements/header_elements/HeaderItemStyle";
import StyledLogo from "../elements/header_elements/HeaderLogoStyle";
import StyledToggleBtn from "../elements/header_elements/HeaderToggleBtnStyle";
import StyledInput from "../elements/header_elements/HeaderInputStyle";
import StyledSearchIcon from "../elements/header_elements/HeaderSearchIconStyle";

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
      <StyledHeaderItem primary>
        <StyledInput type="text" placeholder="Search..."></StyledInput>
      </StyledHeaderItem>
      <StyledHeaderItem>
        <StyledSearchIcon src={SearchIcon} alt=""></StyledSearchIcon>
      </StyledHeaderItem>
      <StyledHeaderItem>IMDbPRO</StyledHeaderItem>
      <StyledHeaderItem>WatchList</StyledHeaderItem>
      <StyledHeaderItem>Sign In</StyledHeaderItem>
    </StyledHeader>
  );
};

export default Header;
