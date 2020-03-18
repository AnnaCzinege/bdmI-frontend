import React, { useContext } from "react";
import StyledSidebar from "../elements/sidebar_elements/SidebarStyle";
import StyledSidebarLink from "../elements/sidebar_elements/SidebarLinkStyle";
import StyledSidebarCloseBtn from "../elements/sidebar_elements/SidebarCloseBtnStyle";
import { LayoutContext } from "./LayoutContext";
import { MovieContext } from "../../components/MovieContext";

const SideBar = props => {
  const { isOpen, setIsOpen } = useContext(LayoutContext);
  const { id } = useContext(MovieContext);

  const onClick = () => {
    setIsOpen("0");
  };

  return (
    <StyledSidebar isOpen={isOpen}>
      <StyledSidebarCloseBtn onClick={onClick} to={{ state: { id: id } }}>
        x
      </StyledSidebarCloseBtn>
      <StyledSidebarLink>Top rated movies</StyledSidebarLink>
      <StyledSidebarLink>Top rated Series</StyledSidebarLink>
      <StyledSidebarLink>About us</StyledSidebarLink>
      <StyledSidebarLink>Info</StyledSidebarLink>
      <StyledSidebarLink>Rekt</StyledSidebarLink>
    </StyledSidebar>
  );
};

export default SideBar;
