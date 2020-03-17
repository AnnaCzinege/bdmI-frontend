import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Header from './components/layout/Header';
import Sidebar from './components/layout/SideBar';

function App() {
  return (
    <Router>
      <MovieProvider>
        <Header />
        <Sidebar />
        <div className="App">
          <Route exact path="/" component={MovieList} />

          <Route path="/top-rated-movies" component={MovieList} />

          <Route path="/movie/" component={MovieDetails} />
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
