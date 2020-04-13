import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

export default function MoviesForm() {
  const [newMovie, setNewMovie] = useState({});

  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("https://koehler-movie-list.herokuapp.com/api/movies", newMovie)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="owner"
        id="owner"
        value={newMovie.owner}
        placeholder="Owner"
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        id="title"
        value={newMovie.title}
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="release_year"
        id="release_year"
        value={newMovie.release_year}
        placeholder="release year"
        onChange={handleChange}
      />
      <input
        type="text"
        name="rating"
        id="rating"
        value={newMovie.rating}
        placeholder="rating"
        onChange={handleChange}
      />
      <input
        type="text"
        name="format"
        id="format"
        value={newMovie.format}
        placeholder="format"
        onChange={handleChange}
      />
      <Button color="primary" type="submit">
        Add New Movie
      </Button>
    </form>
  );
}
