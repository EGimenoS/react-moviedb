import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { MovieGrid } from "./components/MovieGrid";

function App() {
  return (
    <div className="App">
      <Nav />
      <MovieGrid />
    </div>
  );
}

export default App;
