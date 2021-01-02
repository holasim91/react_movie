import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from 'dotenv'
import Movie from "../components/Movie";
import "./Home.css";

dotenv.config()

const API_KEY = process.env.REACT_APP_API_KEY

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
    console.log('데이터 없는디;')
    return null;
  }

  return (
    <section className="container">
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
