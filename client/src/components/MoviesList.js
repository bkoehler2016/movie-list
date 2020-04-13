import React from "react";
import axios from "axios";
import Movie from "./Movies";
import { Table } from "reactstrap";

export default class MoviesList extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    axios
      .get("https://koehler-movie-list.herokuapp.com/api/movies")
      .then((res) => {
        console.log(res.data);
        this.setState({ movies: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Title</th>
              <th>Release year</th>
              <th>Rating</th>
              <th>Format</th>
            </tr>
          </thead>
        </Table>
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
