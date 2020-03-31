import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { LayoutContext } from "./LayoutContext";
import { SearchMoviesContext } from "../SearchMoviesContext";
import ToggleBtn from "../../ToggleBtn.png";
import Logo from "../../Logo.png";
import SearchIcon from "../../SearchIcon.png";
import StyledHeader from "../elements/header_elements/HeaderStyle";
import StyledHeaderItem from "../elements/header_elements/HeaderItemStyle";
import StyledLogo from "../elements/header_elements/HeaderLogoStyle";
import StyledToggleBtn from "../elements/header_elements/HeaderToggleBtnStyle";
//import StyledInput from "../elements/header_elements/HeaderInputStyle";
import StyledSearchIcon from "../elements/header_elements/HeaderSearchIconStyle";
import { AutoComplete } from "antd";
import StyledLink from "../elements/header_elements/HeaderLinkStyle";

const Header = props => {
  const { setIsOpen } = useContext(LayoutContext);
  const { allMovies } = useContext(SearchMoviesContext);
  const [searchedTitle, setSearchedTitle] = useState("");
  const [redirect, setRedirect] = useState("");
  const [options, setOptions] = useState([]);
  const [moviesMapped, setMoviesMapped] = useState(false);

  const onClick = () => {
    setIsOpen("15%");
  };

  const mapAllMovies = () => {
    setMoviesMapped(true);
    allMovies.map(moviePage => {
      return moviePage.map((movie, index) => {
        return setOptions(prevOptions => [
          ...prevOptions,
          { key: movie.id, id: movie.id, value: movie.title }
        ]);
      });
    });
  };

  const removeDuplicates = () => {
    let temp = [];

    options.forEach(movie => {
      if (!temp.includes(movie.value)) {
        temp.push(movie.value);
      } else {
        movie.value = movie.value + " /*/";
        temp.push(movie.value);
        //options.splice(options.indexOf(movie), 1);
      }
    });
  };

  const searchBasedOnTitle = e => {
    e.preventDefault();
    if (!moviesMapped) {
      mapAllMovies();
    }

    if (options.length !== 0) {
      removeDuplicates();
      console.log(searchedTitle);

      options.forEach(movie => {
        if (movie.value.toLowerCase() === searchedTitle) {
          console.log(movie);
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
    <StyledHeader>
      {redirect}
      <StyledHeaderItem>
        <StyledLink to="/">
          <StyledLogo src={Logo} alt=""></StyledLogo>
        </StyledLink>
      </StyledHeaderItem>
      <StyledHeaderItem onClick={onClick}>
        <StyledToggleBtn src={ToggleBtn} alt=""></StyledToggleBtn> Menu
      </StyledHeaderItem>
      <StyledHeaderItem primary>
        <form onSubmit={searchBasedOnTitle}>
          <AutoComplete
            style={{
              width: 500
            }}
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
      </StyledHeaderItem>
      <StyledHeaderItem>
        <StyledSearchIcon
          src={SearchIcon}
          alt=""
          onClick={searchBasedOnTitle}
        ></StyledSearchIcon>
      </StyledHeaderItem>
      <StyledHeaderItem>bDMIPRO</StyledHeaderItem>
      <StyledHeaderItem>
        <StyledLink to="/watchlist">WatchList</StyledLink>
      </StyledHeaderItem>
      <StyledHeaderItem>Sign In</StyledHeaderItem>
    </StyledHeader>
  );
};

export default Header;
