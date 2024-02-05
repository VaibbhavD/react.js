import React, { useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [Movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(
    () =>
      async function submithandler() {
        setloading(true);
        seterror(null);
        try {
          const response = await fetch("https://swapi.dev/api/films");

          if (!response.ok) {
            throw new Error("'Something went wrong ....Retrying' !");
          }

          const data = await response.json();
          const temp = data.results.map((item) => {
            return {
              id: item.episode_id,
              title: item.title,
              openingText: item.opening_crawl,
              releaseDate: item.release_date,
            };
          });
          setMovies(temp);
        } catch (error) {
          seterror(error.message);
        }
        setloading(false);
      },
    []
  );

  let content = <h3>No Found Movies</h3>;

  if (Movies.length > 0) {
    content = <MoviesList movies={Movies} />;
  }

  if (error) {
    content = <h3>{error}</h3>;
  }

  if (loading) {
    content = (
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
