import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [Movies, setMovies] = useState([]);

  const submithandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        const temp = data.results.map((item) => {
          return {
            id: item.episode_id,
            title: item.title,
            openingText: item.opening_crawl,
            releaseDate: item.release_date,
          };
        });
        setMovies(temp);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={submithandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={Movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
