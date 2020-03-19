import React, { useContext } from "react";
import { LayoutContext } from "./LayoutContext";
import ToggleBtn from "../../ToggleBtn.png";
import Logo from "../../Logo.png";
import SearchIcon from "../../SearchIcon.png";
import StyledHeader from "../elements/header_elements/HeaderStyle";
import StyledHeaderItem from "../elements/header_elements/HeaderItemStyle";
import StyledLogo from "../elements/header_elements/HeaderLogoStyle";
import StyledToggleBtn from "../elements/header_elements/HeaderToggleBtnStyle";
import StyledInput from "../elements/header_elements/HeaderInputStyle";
import StyledSearchIcon from "../elements/header_elements/HeaderSearchIconStyle";
import StyledLink from "../elements/header_elements/HeaderLinkStyle";

const Header = props => {
  const { setIsOpen } = useContext(LayoutContext);

  const onClick = () => {
    setIsOpen("15%");
  };

  return (
    <StyledHeader>
      <StyledHeaderItem>
        <StyledLink to="/">
          <StyledLogo src={Logo} alt=""></StyledLogo>
        </StyledLink>
      </StyledHeaderItem>
      <StyledHeaderItem onClick={onClick}>
        <StyledToggleBtn src={ToggleBtn} alt=""></StyledToggleBtn> Menu
      </StyledHeaderItem>
      <StyledHeaderItem primary>
        <StyledInput type="text" placeholder="Search..."></StyledInput>
      </StyledHeaderItem>
      <StyledHeaderItem>
        <StyledSearchIcon src={SearchIcon} alt=""></StyledSearchIcon>
      </StyledHeaderItem>
      <StyledHeaderItem>IMDbPRO</StyledHeaderItem>
      <StyledHeaderItem>
        <StyledLink to="/watchlist">WatchList</StyledLink>
      </StyledHeaderItem>
      <StyledHeaderItem>Sign In</StyledHeaderItem>
    </StyledHeader>
  );
};

export default Header;
