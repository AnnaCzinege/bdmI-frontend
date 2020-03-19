import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { MovieProvider } from "./components/MovieContext";
import { LayoutProvider } from "./components/layout/LayoutContext";
import { SearchMovieProvider } from "./components/SearchMoviesContext";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/SideBar";
import WatchList from "./components/WatchList";
import { WatchListProvider } from "./components/WatchListContext";

function App() {
  const indexRoute = (
    <Route
      exact
      path="/"
      render={props => (
        <React.Fragment>
          <MovieList url="top_rated" />
        </React.Fragment>
      )}
    />
  );

  const topRatedRoute = (
    <Route
      path="/top-rated-movies"
      render={props => (
        <React.Fragment>
          <MovieList url="top_rated" />
        </React.Fragment>
      )}
    />
  );

  const movieRoute = <Route path="/movie/" component={MovieDetails} />;

  const nowPlayingRoute = (
    <Route
      path="/now-playing-movies"
      render={props => (
        <React.Fragment>
          <MovieList url="now_playing" />
        </React.Fragment>
      )}
    />
  );

  const popularRoute = (
    <Route
      path="/popular-movies"
      render={props => (
        <React.Fragment>
          <MovieList url="popular" />
        </React.Fragment>
      )}
    />
  );

  const upcomingRoute = (
    <Route
      path="/upcoming-movies"
      render={props => (
        <React.Fragment>
          <MovieList url="upcoming" />
        </React.Fragment>
      )}
    />
  );

  const watchListRoute = (
    <Route
      path="/watchlist"
      render={props => (
        <React.Fragment>
          <WatchList url="watchlist" />
        </React.Fragment>
      )}
    />
  );

  return (
    <Router>
      <SearchMovieProvider>
        <MovieProvider>
          <WatchListProvider>
            <LayoutProvider>
              <Header />
              <Sidebar />
            </LayoutProvider>
            <div className="App">
              {indexRoute}
              {topRatedRoute}
              {movieRoute}
              {nowPlayingRoute}
              {popularRoute}
              {upcomingRoute}
              {watchListRoute}
            </div>
          </WatchListProvider>
        </MovieProvider>
      </SearchMovieProvider>
    </Router>
  );
}

export default App;
