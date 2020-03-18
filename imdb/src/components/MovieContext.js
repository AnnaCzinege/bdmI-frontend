import React, { useState, useCallback, createContext } from "react";
import Axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([]);
  const [moviePageNumber, setMoviePageNumber] = useState(0);

  const [movieId, setMovieId] = useState(0);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieOverview, setMovieOverview] = useState("");
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieLanguages, setMovieLanguages] = useState([]);
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [movieRuntime, setMovieRuntime] = useState(0);
  const [movieVoteAverage, setMovieVoteAverage] = useState(0);
  const [movieVoteCount, setMovieVoteCount] = useState(0);
  const [moviePoster, setMoviePoster] = useState("");

  const fetchMovies = useCallback(url => {
    Axios.get(url).then(resp => {
      setMovies(resp.data.results);
      setMoviePageNumber(resp.data.total_pages);
    });
  }, []);

  const fetchMovieDetails = useCallback(url => {
    Axios.get(url).then(resp => {
      setMovieId(resp.data.id);
      setMovieTitle(resp.data.title);
      setMovieOverview(resp.data.overview);
      setMovieGenres(resp.data.genres);
      setMovieLanguages(resp.data.spoken_languages);
      setMovieReleaseDate(resp.data.release_date);
      setMovieRuntime(`${resp.data.runtime} min`);
      setMovieVoteAverage(resp.data.vote_average);
      setMovieVoteCount(resp.data.vote_count);
      setMoviePoster(resp.data.poster_path);
    });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        moviePageNumber,
        setMovies,
        movieId,
        movieTitle,
        movieOverview,
        movieGenres,
        movieLanguages,
        movieReleaseDate,
        movieRuntime,
        movieVoteAverage,
        movieVoteCount,
        moviePoster,
        fetchMovies,
        fetchMovieDetails
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
