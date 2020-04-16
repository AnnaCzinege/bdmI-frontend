import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { LayoutContext } from '../contexts/LayoutContext';
import { SearchMoviesContext } from '../contexts/SearchMoviesContext';
import { UserContext } from '../contexts/UserContext';
import {MovieContext} from "../contexts/MovieContext";
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
  P,
  AvatarContainer,
} from '../elements/HeaderElements';
import LogoImg from '../../Logo.png';
import AvatarImg from '../../avatar.png';
import ToggleBtn from './ToggleBtn';
import Cookies from 'universal-cookie';
import { message } from 'antd';

function RespHeader() {
  const { setSideSize, setBackdropStatus, setAuthenticationSize } = useContext(
    LayoutContext
  );
  const {
    setDrawerType,
    logOutUser,
    signInStatus,
    getWatchlistOfUser,
    getCurrentUser,
  } = useContext(UserContext);
  const {setMovieId} = useContext(MovieContext);
  const { allMovies } = useContext(SearchMoviesContext);
  const [searchedTitle, setSearchedTitle] = useState('');
  const [redirect, setRedirect] = useState('');
  const [options, setOptions] = useState([]);
  const [moviesMapped, setMoviesMapped] = useState(false);

  const onClick = () => {
    setSideSize('0');
    setBackdropStatus('block');
  };

  const ClickOnSignIn = () => {
    setDrawerType('SignIn');
    setAuthenticationSize('0');
    setBackdropStatus('block');
  };

  const ClickOnWatchList = () => {
    if (getCurrentUser()) {
      getWatchlistOfUser(getCurrentUser());
    } else {
      message.warning('Please sign in to access your watchlist!', 2);
    }
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

  const logOut = () => {
    logOutUser();
  };

  const searchBasedOnTitle = (e) => {
    e.preventDefault();
    if (!moviesMapped) {
      mapAllMovies();
    }
    if (options.length !== 0) {
      options.forEach((movie) => {
        if (movie.value.toLowerCase() === searchedTitle) {
          setMovieId(movie.id);
          return setRedirect(
            <Redirect
              to={{ pathname: `/movie/${movie.id}`}}
            ></Redirect>
          );
        }
      });
    }
  };

  useEffect(() => {}, [signInStatus]);

  const choseBtn = () => {
    if (signInStatus === 'out') {
      return <SLink onClick={ClickOnSignIn}>Sign in</SLink>;
    }
    return <SLink onClick={logOut}>Log out</SLink>;
  };

  const setAvatar = () => {
    if (signInStatus === 'in') {
      return (
        <AvatarContainer>
          <Logo src={AvatarImg} alt="" />
          <P>{new Cookies().get('c_user').userName}</P>
        </AvatarContainer>
      );
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
              <SLink to="/watchlist" onClick={ClickOnWatchList}>
                Watchlist
              </SLink>
            </Li>
            <Li>{choseBtn()}</Li>
          </Ul>
        </MenuContainer>
        {setAvatar()}
        <Spacer />
      </Nav>
    </Header>
  );
}

export default RespHeader;
