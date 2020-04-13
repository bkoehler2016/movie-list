import React from "react";
import { Table } from "reactstrap";
const Movie = (props) => {
  const { owner, title, release_year, rating, format } = props.movie;

  return (
    <div>
      <Table striped>
        <thead>
          <td>{owner}</td>
          <td>{title}</td>
          <td>{release_year}</td>
          <td>{rating}</td>
          <td>{format}</td>
        </thead>
      </Table>
    </div>
  );
};
export default Movie;
