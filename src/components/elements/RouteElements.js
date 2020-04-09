import React from "react";
import { Route } from "react-router-dom";
import MovieList from "../MovieList";
import MovieDetails from "../MovieDetails";
import WatchList from "../WatchList";

export const indexRoute = (
  <Route
    exact
    path="/"
    render={props => (
      <React.Fragment>
        <MovieList url="top-rated" />
      </React.Fragment>
    )}
  />
);

export const topRatedRoute = (
  <Route
    exact
    path="/top-rated-movies"
    render={props => (
      <React.Fragment>
        <MovieList url="top-rated" />
      </React.Fragment>
    )}
  />
);

export const movieRoute = <Route path="/movie/" component={MovieDetails} />;

export const nowPlayingRoute = (
  <Route
    exact
    path="/now-playing-movies"
    render={props => (
      <React.Fragment>
        <MovieList url="now-playing" />
      </React.Fragment>
    )}
  />
);

export const popularRoute = (
  <Route
    exact
    path="/popular-movies"
    render={props => (
      <React.Fragment>
        <MovieList url="popular" />
      </React.Fragment>
    )}
  />
);

export const upcomingRoute = (
  <Route
    exact
    path="/upcoming-movies"
    render={props => (
      <React.Fragment>
        <MovieList url="upcoming" />
      </React.Fragment>
    )}
  />
);

export const watchListRoute = (
  <Route
    exact
    path="/watchlist"
    render={props => (
      <React.Fragment>
        <WatchList url="watchlist" />
      </React.Fragment>
    )}
  />
);
