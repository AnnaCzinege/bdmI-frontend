import React, { useState, useEffect, useCallback, createContext } from "react";
import Axios from "axios";

export const SearchMoviesContext = createContext();

export const SearchMovieProvider = (props) => {
  const [allMovies, setAllMovies] = useState([]);
  const DOMAIN_STRING = "https://localhost:44314/api/";

  const fetchAllMovies = useCallback(() => {
    Axios.get(`${DOMAIN_STRING}allmovies`).then((resp) => {
      setAllMovies(resp.data);
    });
  }, []);

  useEffect(() => {
    fetchAllMovies();
  }, [fetchAllMovies]);

  return (
    <SearchMoviesContext.Provider value={{ allMovies }}>
      {props.children}
    </SearchMoviesContext.Provider>
  );
};
