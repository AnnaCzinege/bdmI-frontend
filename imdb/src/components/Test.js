import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const Test = () => {
  const { movies, setMovies, setBooks } = useContext(MovieContext);

  return movies.map(movie => <p>{movie.title}</p>);
};
