import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Card from "./components/card";
import MovieDetail from "./components/Moviedetails"; // New component
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setLoading(true);
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4b2f25bebb9f38b174aa70b8397e0424")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setMovies(data.results);
          console.log(data.results);
        } else {
          console.error("Invalid data format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="header">
                <div className="title">
                  <h1>Find Movies, TV Shows and more</h1>
                </div>
                <Search />
              </div>

              {loading ? (
                <div className="loading">Loading movies...</div>
              ) : (
                <div className="card-container">
                  {movies.map((movie) => (
                    <Card
                      key={movie.id}
                      id={movie.id} // Pass ID for navigation
                      title={movie.title}
                      overview={movie.overview}
                      vote_average={movie.vote_average}

                      release_date={movie.release_date}
                      poster_path={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null}
                    />
                  ))}
                </div>
              )}
              <Footer />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;