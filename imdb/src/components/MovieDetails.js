import React, { useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";

const MovieDetails = props => {
  const {
    movieTitle,
    movieOverview,
    movieLanguages,
    movieGenres,
    movieReleaseDate,
    movieRuntime,
    movieVoteAverage,
    movieVoteCount,
    fetchMovieDetails
  } = useContext(MovieContext);

  useEffect(() => {
    console.log("movieDetails");
    const movieId = props.location.state.id;
    fetchMovieDetails(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bc3417b21d3ce5c6f51a602d8422eff9&language=en-US`
    );
  }, [fetchMovieDetails, props.location.state.id]);

  const genres = movieGenres.map(item => {
    return <div>{item.name}</div>;
  });

  const languages = movieLanguages.map(item => {
    return <div>{item.name}</div>;
  });

  return (
    <div>
      <p>Title: {movieTitle}</p>
      <p>Overview: {movieOverview}</p>
      <p>Release date: {movieReleaseDate}</p>
      <p>Runtime: {movieRuntime}</p>
      <p>Genres:</p>
      <div>{genres}</div>
      <p>Languages:</p>
      <div>{languages}</div>
      <p>Average vote: {movieVoteAverage}</p>
      <p>All vote: {movieVoteCount}</p>
    </div>
  );
};

export default MovieDetails;
