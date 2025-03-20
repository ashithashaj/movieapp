import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const location = useLocation();
  const movie = location.state;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  console.log(location.state)
  if (!movie) {
    return <div>No movie details available.</div>;
  }

  return (

    <div className="movie-detail">
      <div className="movie-det-card">
        <div className="movie-det-img">
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-det-content">
            <button className="watch-btn">Watch now</button>
            <div className="movie-title"><h1 className="card-det-title">{movie.title}</h1>
           </div>
           <div className="buttons"> <button className="hd-btn">HD</button>
           <button className="trailer-btn"><img src="/video.png" className="video-icon" alt="" />Trailor</button></div>
            <p className="overview"><strong>Overview:</strong><br /> {movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>IMDB</strong> {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
