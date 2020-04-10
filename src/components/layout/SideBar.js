import React, { useContext } from "react";
import { LayoutContext } from "./LayoutContext";
import { SLink, Nav, Ul, Li } from "../elements/SideBarElements";

function RespSideBar(props) {
  const { sideSize, setSideSize, setBackdropStatus } = useContext(
    LayoutContext
  );

  const onClick = () => {
    setSideSize("-100%");
    setTimeout(() => {
      setBackdropStatus("none");
    }, 500);
  };

  return (
    <Nav sideSize={sideSize}>
      <Ul>
        <Li>
          <SLink onClick={onClick} to="/top-rated-movies">
            Top rated movies
          </SLink>
        </Li>
        <Li>
          <SLink onClick={onClick} to="/popular-movies">
            Popular movies
          </SLink>
        </Li>
        <Li>
          <SLink onClick={onClick} to="/now-playing-movies">
            Now playing movies
          </SLink>
        </Li>
        <Li>
          <SLink onClick={onClick} to="/upcoming-movies">
            Upcoming movies
          </SLink>
        </Li>
        <Li optional>
          <SLink onClick={onClick} to="">
            bDMIPRO
          </SLink>
        </Li>
        <Li optional>
          <SLink onClick={onClick} to="/watchlist">
            Watchlist
          </SLink>
        </Li>
        <Li optional>
          <SLink onClick={onClick} to="">
            Sign In
          </SLink>
        </Li>
      </Ul>
    </Nav>
  );
}

export default RespSideBar;
