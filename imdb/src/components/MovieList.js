import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';
import styled from 'styled-components';

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

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <CardContainer>
      {movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          video={movie.video}
          voteAvg={movie.vote_average}
        />
      ))}
      ;
    </CardContainer>
  );
};

export default MovieList;
