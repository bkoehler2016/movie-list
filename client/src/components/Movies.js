import React from "react";
import { Table } from "reactstrap";
const Movie = (props) => {
  const { id, owner, title, release_year, rating, format } = props.movie;

  return (
    <div>
      <Table striped>
        <tbody>
          <td>{id}</td>
          <td>{owner}</td>
          <td>{title}</td>
          <td>{release_year}</td>
          <td>{rating}</td>
          <td>{format}</td>
        </tbody>
      </Table>
    </div>
  );
};
export default Movie;
