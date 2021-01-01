import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const API_KEY = '3e7a66c4d6dbae8f867aa285509a095d'
function Home() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
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
      {console.log(movies)}
      <div className="movies">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.release_date}
            title={movie.title}
            summary={movie.overview}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
