import React from "react";
import "./App.css";
import MovieProvider from "./components/MovieContext";
import Test from "./components/Test";
import SideBar from "./components/layout/SideBar";

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
