import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";
import styled from "styled-components";
import StyledPagination from "./elements/movie_list_elements/StyledPagination";
import StyledTitle from "./elements/movie_list_elements/StyledTitle";

const Card = styled.div`
  display: inline-block;
`;

const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: rgb(122, 58, 46);
  background: linear-gradient(
    0deg,
    rgba(122, 58, 46, 1) 0%,
    rgba(119, 117, 117, 1) 95%
  );
`;

const MovieList = props => {
  const { movies, fetchMovies, moviePageNumber } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const pageTitle =
    props.url.charAt(0).toUpperCase() +
    props.url.replace("_", " ").slice(1) +
    " movies";
  const onChange = pageNumber => {
    setPage(pageNumber);
  };

  useEffect(() => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/${props.url}?api_key=bb29364ab81ef62380611d162d85ecdb&language=en-US&page=${page}`
    );
  }, [fetchMovies, page, props.url]);

  return (
    <CardContainer>
      <StyledTitle>{pageTitle}</StyledTitle>
      <StyledPagination
        showQuickJumper
        defaultCurrent={1}
        total={moviePageNumber * 10}
        onChange={onChange}
      />
      {movies.map(movie => (
        <Card>
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            video={movie.video}
            voteAvg={movie.vote_average}
          />
        </Card>
      ))}
      ;
    </CardContainer>
  );
};

export default MovieList;
