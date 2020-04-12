import React from "react";
import { Card, CardText, CardBody, CardSubtitle } from "reactstrap";

const Movie = (props) => {
  const { owner, title, release_year, rating, format } = props.movie;

  return (
    <div>
      <Card>
        <CardText>Owner: {owner}</CardText>
        <CardBody>{title}</CardBody>
        <CardSubtitle>{release_year}</CardSubtitle>
        <CardSubtitle>{rating}</CardSubtitle>
        <CardSubtitle>{format}</CardSubtitle>
      </Card>
    </div>
  );
};
export default Movie;
