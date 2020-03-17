import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return movies.map(movie => (
    <CardContainer>
      <Movie key={movie.id} id={movie.id} title={movie.title} />
    </CardContainer>
  ));
};

export default MovieList;
