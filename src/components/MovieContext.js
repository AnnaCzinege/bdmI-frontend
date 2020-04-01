import React, { useState, useCallback, createContext } from "react";
import Axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([]);
  const [moviePageNumber, setMoviePageNumber] = useState(0);
  const [movieVideo, setMovieVideo] = useState("");
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
  const [isMovieDialogOpen, setMovieDialogOpenStatus] = useState(false);

  const fetchMovies = useCallback(url => {
    Axios.get(url).then(resp => {
      setMovies(resp.data);
      setMoviePageNumber(500);
    });
  }, []);

  const fetchMovieDetails = useCallback(url => {
    Axios.get(url).then(resp => {
      setMovieId(resp.data.id);
      setMovieTitle(resp.data.originalTitle);
      setMovieOverview(resp.data.overview);
      setMovieGenres(resp.data.movieGenres);
      setMovieLanguages(resp.data.movieLanguages);
      setMovieReleaseDate(resp.data.releaseDate);
      setMovieRuntime(`${resp.data.runtime} min`);
      setMovieVoteAverage(`${resp.data.voteAverage}/10`);
      setMovieVoteCount(resp.data.voteCount);
      setMoviePoster(resp.data.posterPath);
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
        movieVideo,
        setMovieVideo,
        fetchMovies,
        fetchMovieDetails,
        isMovieDialogOpen,
        setMovieDialogOpenStatus
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
