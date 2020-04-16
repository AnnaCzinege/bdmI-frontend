import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieProvider } from './components/contexts/MovieContext';
import { LayoutProvider } from './components/contexts/LayoutContext';
import { SearchMovieProvider } from './components/contexts/SearchMoviesContext';
import { UserProvider } from './components/contexts/UserContext';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Authentication from './components/layout/Authentication';
import Backdrop from './components/backdrop/Backdrop';
import {
  indexRoute,
  topRatedRoute,
  movieRoute,
  nowPlayingRoute,
  popularRoute,
  upcomingRoute,
  watchListRoute,
} from './components/elements/RouteElements';
import { AppContainer } from './components/elements/AppContainerElements';

function App() {
  return (
    <AppContainer>
      <Router>
        <SearchMovieProvider>
          <MovieProvider>
            <UserProvider>
              <LayoutProvider>
                <Header />
                <SideBar />
                <Authentication />
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
            </UserProvider>
          </MovieProvider>
        </SearchMovieProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
