import React, { useState, createContext } from 'react';

export const WatchListContext = createContext();

export const WatchListProvider = props => {
  const [moviesToWatch, setMoviesToWatch] = useState([]);

  return (
    <WatchListContext.Provider value={{ moviesToWatch, setMoviesToWatch }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
