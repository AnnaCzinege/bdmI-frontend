import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return movies.map(movie => (
    <Movie key={movie.id} id={movie.id} title={movie.title} />
  ));
};

export default MovieList;
