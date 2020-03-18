import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';
import styled from 'styled-components';
import { Pagination } from 'antd';

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
  const { movies, fetchMovies, moviePageNumber } = useContext(MovieContext);
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
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Top rated movies</h1>
      <div>
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={moviePageNumber * 10}
          onChange={onChange}
          style={{ paddingBottom: '20px' }}
        />
      </div>
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
