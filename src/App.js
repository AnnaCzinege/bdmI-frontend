import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieProvider } from "./components/MovieContext";
import { LayoutProvider } from "./components/layout/LayoutContext";
import { SearchMovieProvider } from "./components/SearchMoviesContext";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import Backdrop from "./components/backdrop/Backdrop";
import { WatchListProvider } from "./components/WatchListContext";
import {
  indexRoute,
  topRatedRoute,
  movieRoute,
  nowPlayingRoute,
  popularRoute,
  upcomingRoute,
  watchListRoute,
} from "./components/elements/RouteElements";
import { AppContainer } from "./components/elements/AppContainerElements";

function App() {
  return (
    <AppContainer>
      <Router>
        <SearchMovieProvider>
          <MovieProvider>
            <WatchListProvider>
              <LayoutProvider>
                <Header />
                <SideBar />
                <Backdrop />
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
    </AppContainer>
  );
}

export default App;
