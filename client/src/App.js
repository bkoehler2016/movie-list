import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import MoviesForm from "./components/MoviesForm";

function App() {
  return (
    <div className="App">
      <h1>Family Movie List</h1>
      <MoviesList />
      <MoviesForm />
    </div>
  );
}

export default App;
