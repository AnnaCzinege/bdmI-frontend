import React from 'react';
import './App.css';
import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <MovieProvider>
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
