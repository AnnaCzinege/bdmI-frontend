import React, { useContext } from 'react';
import { WatchListContext } from './WatchListContext';
import StyledPagination from './elements/movie_list_elements/StyledPagination';
import StyledTitle from './elements/movie_list_elements/StyledTitle';

const WatchList = props => {
  const { moviesToWatch } = useContext(WatchListContext);

  console.log(moviesToWatch);

  return (
    <div style={{ marginTop: '50px' }}>
      {moviesToWatch.map(movie => (
        <p>{movie.title}</p>
      ))}
    </div>
  );
};

export default WatchList;
