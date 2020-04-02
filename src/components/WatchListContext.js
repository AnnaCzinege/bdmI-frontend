import React, { useState, createContext } from "react";
import { message } from "antd";

export const WatchListContext = createContext();

export const WatchListProvider = props => {
  const [moviesToWatch, setMoviesToWatch] = useState([]);

  const addMovieToWatchList = (event, properties) => {
    if (
      moviesToWatch.filter(movie => movie.id === properties.id).length === 0
    ) {
      event.preventDefault();
      setMoviesToWatch([...moviesToWatch, { ...properties.movie }]);
    } else {
      return message.warning("This movie is already in your watchlist!", 1);
    }
  };

  return (
    <WatchListContext.Provider
      value={{ moviesToWatch, setMoviesToWatch, addMovieToWatchList }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
