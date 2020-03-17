import React from "react";
import { Link } from "react-router-dom";

const sideBar = props => {
  return (
    <div>
      <Link>Top rated movies</Link>
      <Link>Top rated Series</Link>
      <Link>About us</Link>
      <Link>Info</Link>
      <Link>Rekt</Link>
    </div>
  );
};

export default sideBar;