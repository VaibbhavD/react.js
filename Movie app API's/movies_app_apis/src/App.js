import React, { useCallback, useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import Form from "./components/Form/AddMovieForm";

function App() {
  const [Movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchmoviehandler = useCallback(async () => {
    setloading(true);
    seterror(null);
    try {
      const response = await fetch(
        "https://react-movie-rest-api-default-rtdb.firebaseio.com/Movies.json"
      );

      if (!response.ok) {
        throw new Error("'Something went wrong ....Retrying' !");
      }

      const data = await response.json();
      let loadMovies = [];

      for (const key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadMovies);
    } catch (error) {
      seterror(error.message);
    }
    setloading(false);
  }, []);

  const AddMovie = useCallback(async (movie) => {
    setloading(true);
    seterror(null);
    try {
      const response = await fetch(
        "https://react-movie-rest-api-default-rtdb.firebaseio.com/Movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("'Something went wrong ....Retrying' !");
      }
      const data = await response.json();
      fetchmoviehandler();
    } catch (error) {
      seterror(error.message);
    }
    setloading(false);
  }, []);

  useEffect(() => {
    fetchmoviehandler();
  }, [fetchmoviehandler]);

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
        <Form AddMovie={AddMovie} />
        {/* <button>Fetch Movies</button> */}
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
