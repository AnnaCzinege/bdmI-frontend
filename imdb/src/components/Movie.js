import React from "react";
import { Link } from "react-router-dom";

const Movie = props => {
  return (
    <div>
      <Link
        to={{
          pathname: `/movie/${props.id}`,
          state: {
            id: props.id
          }
        }}
      >
        {props.title}
      </Link>
    </div>
  );
};

export default Movie;
