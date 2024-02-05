import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [Movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);

  async function submithandler() {
    setloading(true);

    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    setloading(false);
    const temp = data.results.map((item) => {
      return {
        id: item.episode_id,
        title: item.title,
        openingText: item.opening_crawl,
        releaseDate: item.release_date,
      };
    });
    setMovies(temp);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={submithandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && (
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
        )}
        <MoviesList movies={Movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
