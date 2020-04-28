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
    Axios.post("https://localhost:44314/api/user/register", newUser)
      .then((resp) => {
        if (resp.status === 200) {
          message.warning(
            `We sent a confirmation email to ${newUser.Email}. In order to enjoy the full benefits of your bDMI account you need to click the link in that email!`,
            10
          );
        }
      })
      .catch((error) => {
        console.log(error);
        switch (error.response.status) {
          case 422:
            message.warning("Username already exists", 5);
            break;
          case 409:
            message.warning(
              `Account already exists with the e-mail ${newUser.Email}`,
              5
            );
            break;
          case 400:
            message.warning("There was a problem with input validation");
            break;
          case 500:
            message.warning("Cannot connect to bDMI database", 5);
            break;
          default:
            break;
        }
      });
  };

  const logInUser = (User) => {
    Axios.post("https://localhost:44314/api/user/login", User)
      .then((resp) => {
        if (resp.status === 200) {
          new Cookies().set("c_user", resp.data);
          checkCookiesForLog();
        }
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400:
            message.warning("Username or password was invalid!", 5);
            break;
          default:
            message.warning("Cannot connect to bDMI database", 5);
            break;
        }
      });
  };

  const logOutUser = () => {
    const cookies = new Cookies();
    Axios.post("https://localhost:44314/api/user/logout", cookies.get("c_user"))
      .then((resp) => {
        if (resp.status === 200) {
          cookies.remove("c_user");
          checkCookiesForLog();
        }
      })
      .catch((error) => {
        cookies.remove("c_user");
        checkCookiesForLog();
        message.warning("Cannot connect to bDMI database", 5);
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
