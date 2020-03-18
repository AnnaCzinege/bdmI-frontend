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
      <StyledSidebarLink onClick={onClick} to="/top-rated-movies">
        Top rated
      </StyledSidebarLink>
      <StyledSidebarLink onClick={onClick}>Latest</StyledSidebarLink>
      <StyledSidebarLink onClick={onClick}>Popular</StyledSidebarLink>
      <StyledSidebarLink onClick={onClick} to="/now-playing-movies">
        Now Playing
      </StyledSidebarLink>
      <StyledSidebarLink onClick={onClick}>Upcoming</StyledSidebarLink>
    </StyledSidebar>
  );
};

export default SideBar;
