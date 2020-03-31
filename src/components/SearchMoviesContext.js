import React, { useState, useEffect, useCallback, createContext } from "react";
import Axios from "axios";

export const SearchMoviesContext = createContext();

export const SearchMovieProvider = props => {
  const [allMovies, setAllMovies] = useState([]);
  const [options, setOptions] = useState([]);

  const mapAllMovies = () => {
    allMovies.map(moviePage => {
      moviePage.map(movie => {
        setOptions(prevOptions => [
          ...prevOptions,
          { id: movie.id, title: movie.title }
        ]);
      });
    });
  };

  const fetchAllMovies = useCallback(() => {
    const allPages = 500;
    for (let i = 0; i < allPages; i++) {
      Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bb29364ab81ef62380611d162d85ecdb&language=en-US&page=${i +
          1}`
      ).then(resp =>
        setAllMovies(prevMovies => [...prevMovies, resp.data.results])
      );
    }
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
