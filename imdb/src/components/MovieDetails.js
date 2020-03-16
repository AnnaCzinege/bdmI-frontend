import React, { useState, useEffect } from "react";
import Axios from "axios";

const MovieDetails = props => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieOverview, setMovieOverview] = useState("");
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieLanguages, setMovieLanguages] = useState([]);
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [movieRuntime, setMovieRuntime] = useState(0);
  const [movieVoteAverage, setMovieVoteAverage] = useState(0);
  const [movieVoteCount, setMovieVoteCount] = useState(0);

  const fetchMovieDetails = url => {
    Axios.get(url).then(resp => {
      setMovieTitle(resp.data.title);
      setMovieOverview(resp.data.overview);
      setMovieGenres(resp.data.genres);
      setMovieLanguages(resp.data.spoken_languages);
      setMovieReleaseDate(resp.data.release_date);
      setMovieRuntime(`${resp.data.runtime} min`);
      setMovieVoteAverage(resp.data.vote_average);
      setMovieVoteCount(resp.data.vote_count);
    });
  };

  useEffect(() => {
    fetchMovieDetails(
      `https://api.themoviedb.org/3/movie/${props.location.state.id}?api_key=bc3417b21d3ce5c6f51a602d8422eff9&language=en-US`
    );
  }, [props.location.state.id]);

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
      <p>{languages}</p>
      <p>Average vote: {movieVoteAverage}</p>
      <p>All vote: {movieVoteCount}</p>
    </div>
  );
};

export default MovieDetails;
