import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = () => {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);

  const fetchMovies = url => {
    Axios.get(url).then(resp => setMovies(res.data.results));
  };

  useEffect(() => {
    fetchMovies(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=bb29364ab81ef62380611d162d85ecdb&language=en-US&page=1"
    );
  }, []);

  return (
    <MovieContext.Provider value={{ setMovies, setBooks }}>
      {props.children}
    </MovieContext.Provider>
  );
};
