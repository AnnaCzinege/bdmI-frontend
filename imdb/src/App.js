import React from "react";
import "./App.css";
import { MovieProvider } from "./components/MovieContext";
import MovieList from "./components/MovieList";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
