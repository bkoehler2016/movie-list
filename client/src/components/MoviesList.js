import React from "react";
import axios from "axios";
import Movie from "./Movies";

export default class MoviesList extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:5002/api/movies/")
      .then((res) => {
        console.log(res.data);
        this.setState({ movies: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.movies.map((movie) => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
function MovieDetails({ movie }) {
  return <Movie movie={movie} />;
}
