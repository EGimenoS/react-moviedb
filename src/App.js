import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { MovieGrid } from "./components/MovieGrid";

function App() {
  return (
    <div className="App">
      <h1>Search Movies from TheMovieDatabase</h1>
      <Nav />
      <MovieGrid />
    </div>
  );
}

export default App;
