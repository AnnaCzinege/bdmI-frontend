import React, { useState, createContext } from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import { message } from "antd";

export const WatchListContext = createContext();

export const WatchListProvider = (props) => {
  const [moviesToWatch, setMoviesToWatch] = useState([]);

  const addMovieToWatchList = (event, properties) => {
    console.log(properties);
    if (
      moviesToWatch.filter(movie => movie.id === properties.id).length === 0
    ) {
      event.preventDefault();
      setMoviesToWatch([...moviesToWatch, { ...properties.movie }]);
    } else {
      return message.warning("This movie is already in your watchlist!", 1);
    }
  };

  const getCurrentUser = () => {
    const cookies = new Cookies();
    return cookies.get('c_user');
  };

  const getWatchlistOfUser = (user) => {
    console.log(user.id);
    Axios.post(`https://localhost:44314/api/user/getWatchList`, user).then(
      (resp) => {
        setMoviesToWatch(resp.data);
      }
    );
  };

  const addMovieToWatchListDb = (watchlisItem) => {
    Axios.post(
      `https://localhost:44314/api/user/addToWatchList`,
      watchlisItem
    ).then((resp) => console.log(resp));
  };

  const deleteMovieFromWatchList = async (watchlisItem) => {
    await Axios.delete(
      `https://localhost:44314/api/user/deleteFromWatchList`,
      watchlisItem
    ).then((resp) => console.log(resp));
  };

  return (
    <WatchListContext.Provider
      value={{
        moviesToWatch,
        setMoviesToWatch,
        getCurrentUser,
        getWatchlistOfUser,
        addMovieToWatchListDb,
        deleteMovieFromWatchList,
        addMovieToWatchList
      }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
