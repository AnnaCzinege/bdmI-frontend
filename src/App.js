import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieProvider } from "./components/MovieContext";
import { LayoutProvider } from "./components/layout/LayoutContext";
import { SearchMovieProvider } from "./components/SearchMoviesContext";
import RespHeader from "./components/layout/RespHeader";
import Sidebar from "./components/layout/SideBar";
import { WatchListProvider } from "./components/WatchListContext";
import {
  indexRoute,
  topRatedRoute,
  movieRoute,
  nowPlayingRoute,
  popularRoute,
  upcomingRoute,
  watchListRoute
} from "./components/elements/RouteElements";

function App() {
  return (
    <Router>
      <SearchMovieProvider>
        <MovieProvider>
          <WatchListProvider>
            <LayoutProvider>
              <RespHeader />
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
