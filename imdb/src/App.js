import React from "react";
import "./App.css";
import {MovieProvider} from "./components/MovieContext";
import Test from "./components/Test";

function App() {
  return (
    <MovieProvider>
      <div className="App">
      <Test />
      </div>

    </MovieProvider>
  );
}

export default App;
