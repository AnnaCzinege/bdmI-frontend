import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { LayoutContext } from "../contexts/LayoutContext";
import { SearchMoviesContext } from "../contexts/SearchMoviesContext";
import {
  Header,
  Nav,
  ToggleBtnContainer,
  LogoContainer,
  SLink,
  Logo,
  Spacer,
  Ul,
  Li,
  MenuContainer,
  AutoComplete,
} from "../elements/HeaderElements";
import LogoImg from "../../Logo.png";
import ToggleBtn from "./ToggleBtn";

function RespHeader() {
  const { setSideSize, setBackdropStatus, setAuthenticationSize } = useContext(LayoutContext);
  const { allMovies } = useContext(SearchMoviesContext);
  const [searchedTitle, setSearchedTitle] = useState("");
  const [redirect, setRedirect] = useState("");
  const [options, setOptions] = useState([]);
  const [moviesMapped, setMoviesMapped] = useState(false);

  const onClick = () => {
    setSideSize("0");
    setBackdropStatus("block");
  };

  const ClickOnSignIn = () => {
    setAuthenticationSize("0");
    setBackdropStatus("block");
  };

  const mapAllMovies = () => {
    setMoviesMapped(true);
    allMovies.map((movie, index) => {
      return setOptions((prevOptions) => [
        ...prevOptions,
        {
          id: movie.id,
          value: movie.originalTitle,
        },
      ]);
    });
  };

  const searchBasedOnTitle = (e) => {
    e.preventDefault();
    if (!moviesMapped) {
      mapAllMovies();
    }

    if (options.length !== 0) {
      options.forEach((movie) => {
        if (movie.value.toLowerCase() === searchedTitle) {
          return setRedirect(
            <Redirect
              to={{ pathname: `/movie/${movie.id}`, state: { id: movie.id } }}
            ></Redirect>
          );
        }
      });
    }
  };

  return (
    <Header>
      {redirect}
      <Nav>
        <Spacer />
        <ToggleBtnContainer onClick={onClick}>
          <ToggleBtn />
        </ToggleBtnContainer>
        <LogoContainer>
          <SLink to="/">
            <Logo src={LogoImg} alt="" />
          </SLink>
        </LogoContainer>
        <div>
          <form onSubmit={searchBasedOnTitle}>
            <AutoComplete
              options={options}
              defaultActiveFirstOption={false}
              placeholder="Search..."
              onSelect={(value, option) =>
                setSearchedTitle(option.value.toLowerCase())
              }
              filterOption={(inputValue, option) =>
                option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !==
                -1
              }
            ></AutoComplete>
          </form>
        </div>
        <MenuContainer>
          <Ul>
            <Li>
              <SLink to="">bDMIPRO</SLink>
            </Li>
            <Li>
              <SLink to="/watchlist">WatchList</SLink>
            </Li>
            <Li>
              <SLink onClick={ClickOnSignIn}>SignIn</SLink>
            </Li>
          </Ul>
        </MenuContainer>
        <Spacer />
      </Nav>
    </Header>
  );
}

export default RespHeader;
