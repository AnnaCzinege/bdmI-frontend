import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return movies.map(movie => <p>{movie.title}</p>);
};

export default MovieList;
