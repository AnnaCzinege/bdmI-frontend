import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const Test = () => {
  const { movies } = useContext(MovieContext);

  return movies.map(movie => <Movie>{movie.title}</Movie>);
};
