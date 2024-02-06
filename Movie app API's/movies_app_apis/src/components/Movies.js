import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const Deletehandler = () => {
    fetch(
      "https://react-movie-rest-api-default-rtdb.firebaseio.com/Movies.json/",
      {
        method: "DELETE",
        id: props.id,
      }
    );
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      {/* <button onClick={Deletehandler}>Delete</button> */}
    </li>
  );
};

export default Movie;
