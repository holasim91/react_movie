import React from "react";
import './Detail.css'
const Detail = ({ location, history }) => {
  const { title, year, summary, poster } = location.state;
  const full_poster = `https://image.tmdb.org/t/p/w500${poster}`;

  if (!location.state) {
    history.push("/");
  }

  return (
    <div>
        <div className="info">
      <h1 className="title">{title}</h1>
      <h4 className="year">Release Date: {year}</h4>
      <p className="summary"><p style={{fontWeight:300}}>Description:</p> {summary}</p>
      </div>
      <img className="poster" src={full_poster} alt={title} title={title} />
    </div>
  );
};

export default Detail;
