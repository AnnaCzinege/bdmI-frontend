import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";
import styled from "styled-components";

const Card = styled.div`
  display: inline-block;
`;

const CardContainer = styled.div`
  margin-top: 80px;
`;

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <CardContainer>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Top rated movies</h1>
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
