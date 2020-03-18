import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";
import styled from "styled-components";
import StyledPagination from "./elements/movie_list_elements/StyledPagination";

const Card = styled.div`
  display: inline-block;
`;

const CardContainer = styled.div`
  margin-top: 80px;
`;

const MovieList = () => {
  const { movies, fetchMovies } = useContext(MovieContext);
  const [page, setPage] = useState(1);

  const onChange = pageNumber => {
    setPage(pageNumber);
  };

  useEffect(() => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=bb29364ab81ef62380611d162d85ecdb&language=en-US&page=${page}`
    );
  }, [fetchMovies, page]);

  return (
    <CardContainer>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Top rated movies</h1>
      <StyledPagination
        showQuickJumper
        defaultCurrent={1}
        total={3500}
        onChange={onChange}
      />
      {movies.map(movie => (
        <Card>
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
          />
        </Card>
      ))}
      ;
    </CardContainer>
  );
};

export default MovieList;
