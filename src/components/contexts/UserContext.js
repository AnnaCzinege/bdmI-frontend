import React, { createContext, useState, useEffect, useCallback } from "react";
import Cookies from "universal-cookie";
import Axios from "axios";
import { message } from "antd";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [drawerType, setDrawerType] = useState("SignIn");
  const [signInStatus, setSignInStatus] = useState("out");
  const [watchlist, setWatchlist] = useState([]);

  const checkCookiesForLog = useCallback(() => {
    const cookies = new Cookies();
    if (!cookies.get("c_user")) {
      setSignInStatus("out");
      setWatchlist([]);
    } else {
      setSignInStatus("in");
      getWatchlistOfUser(getCurrentUser());
    }
  }, []);

  const registerNewUser = (newUser) => {
    Axios.post(
      "https://localhost:44314/api/user/register",
      newUser
    ).then((resp) => message.warning(resp.data, 1)); //TODO
  };

  const logInUser = (User) => {
    Axios.post("https://localhost:44314/api/user/login", User).then((resp) => {
      if (resp.data.errorMessage === "Username or password was invalid") {
        message.warning(resp.data.errorMessage, 1);
      } else {
        new Cookies().set("c_user", resp.data);
        checkCookiesForLog();
      }
    }); //TODO
  };

  const logOutUser = () => {
    const cookies = new Cookies();
    Axios.post(
      "https://localhost:44314/api/user/logout",
      cookies.get("c_user")
    ).then((resp) => {
      if (resp.data === "You have been logged out") {
        cookies.remove("c_user");
        checkCookiesForLog();
      }
    });
  };

  const addMovieToWatchList = (event, properties) => {
    if (watchlist.filter((movie) => movie.id === properties.id).length === 0) {
      event.preventDefault();
      setWatchlist([...watchlist, { ...properties.movie }]);
    } else {
      return message.warning("This movie is already in your watchlist!", 1);
    }
  };

  const getCurrentUser = () => {
    const cookies = new Cookies();
    return cookies.get("c_user");
  };

  const getWatchlistOfUser = (user) => {
    console.log(user.id);
    Axios.post(`https://localhost:44314/api/user/getWatchList`, user).then(
      (resp) => {
        setWatchlist(resp.data);
      }
    );
  };

  const addMovieToWatchListDb = (watchlisItem) => {
    Axios.post(
      `https://localhost:44314/api/user/addToWatchList`,
      watchlisItem
    ).then((resp) => {
      message.warning(resp.data);
    });
  };

  const deleteMovieFromWatchList = (watchlisItem) => {
    Axios.post(
      `https://localhost:44314/api/user/deleteFromWatchList`,
      watchlisItem
    ).then((resp) => console.log(resp));
  };

  useEffect(() => {
    checkCookiesForLog();
  }, [checkCookiesForLog]);

  return (
    <UserContext.Provider
      value={{
        registerNewUser,
        logInUser,
        logOutUser,
        drawerType,
        setDrawerType,
        checkCookiesForLog,
        signInStatus,
        setSignInStatus,
        watchlist,
        setWatchlist,
        getCurrentUser,
        getWatchlistOfUser,
        addMovieToWatchListDb,
        deleteMovieFromWatchList,
        addMovieToWatchList,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
