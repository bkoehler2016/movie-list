import React from "react";
import "./App.css";
import { Table } from "reactstrap";
import MoviesList from "./components/MoviesList";
import MoviesForm from "./components/MoviesForm";

function App() {
  return (
    <div className="App">
      <h1>Family Movie List</h1>
      <Table striped>
        <thead className="mainHeader">
          <tr>
            <th>#</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Release Year</th>
            <th>Rating</th>
            <th>Format</th>
          </tr>
        </thead>
      </Table>
      <MoviesList />
      <MoviesForm />
    </div>
  );
}

export default App;
