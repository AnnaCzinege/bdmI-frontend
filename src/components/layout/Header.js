import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { LayoutContext } from "./LayoutContext";
import { SearchMoviesContext } from "../SearchMoviesContext";
import ToggleBtn from "../../ToggleBtn.png";
import Logo from "../../Logo.png";
import StyledHeader from "../elements/header_elements/HeaderStyle";
import StyledHeaderItem from "../elements/header_elements/HeaderItemStyle";
import StyledLogo from "../elements/header_elements/HeaderLogoStyle";
import StyledToggleBtn from "../elements/header_elements/HeaderToggleBtnStyle";
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
    allMovies.map((movie, index) => {
      return setOptions(prevOptions => [
        ...prevOptions,
        {
          year: movie.releaseDate,
          id: movie.originalId,
          value: movie.originalTitle
        }
      ]);
    });
  };

  const removeDuplicates = () => {
    let temp = [];
    let year = " *";

    options.forEach(movie => {
      if (movie.year) {
        year = movie.year.slice(0, 4);
      }
      if (!temp.includes(movie.value)) {
        console.log("not in temp");
        temp.push(movie.value);
      } else {
        console.log("in temp already");
        movie.value = `${movie.value} (${year})`;
        temp.push(movie.value);
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

      <StyledHeaderItem>bDMIPRO</StyledHeaderItem>
      <StyledHeaderItem>
        <StyledLink to="/watchlist">WatchList</StyledLink>
      </StyledHeaderItem>
      <StyledHeaderItem>Sign In</StyledHeaderItem>
    </StyledHeader>
  );
};

export default Header;
