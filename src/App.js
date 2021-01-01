import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {
          data: {
            data: { movies },
          },
        } = await axios.get(
          "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        setMovies(movies);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
    );
  }
  if (!movies) {
    return null;
  }

  return (
    <section className="container">
      <div className="movies">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
