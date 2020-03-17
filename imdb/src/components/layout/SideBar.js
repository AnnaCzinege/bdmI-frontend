import React from "react";
import StyledSidebar from "../elements/sidebar_elements/SidebarStyle";
import StyledSidebarLink from "../elements/sidebar_elements/SidebarLinkStyle";
import StyledSidebarCloseBtn from "../elements/sidebar_elements/SidebarCloseBtnStyle";

const sideBar = props => {
  return (
    <StyledSidebar>
      <StyledSidebarCloseBtn>x</StyledSidebarCloseBtn>
      <StyledSidebarLink>Top rated movies</StyledSidebarLink>
      <StyledSidebarLink>Top rated Series</StyledSidebarLink>
      <StyledSidebarLink>About us</StyledSidebarLink>
      <StyledSidebarLink>Info</StyledSidebarLink>
      <StyledSidebarLink>Rekt</StyledSidebarLink>
    </StyledSidebar>
  );
};

export default sideBar;
