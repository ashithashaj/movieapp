import React, { useEffect, useState } from "react";
import Navbar from './components/navbar'
import Search from './components/search' 
import Card from './components/card'
import './App.css'
import Footer from './components/footer'

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    // Set loading to true when fetching begins
    setLoading(true);
    
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4b2f25bebb9f38b174aa70b8397e0424")
      .then((res) => res.json())
      .then((data) => {
        // Check if data and results exist before setting state
        if (data && data.results) {
          setMovies(data.results);
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
    <>
    <div className="header">
      <Navbar />
      <div className='title'>
        <h1>Find Movies, TV Shows and more</h1>
      </div>
      <Search />
      </div>
      
      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <div className='card-container'>
          {movies.map(movie => (
            <Card 
              key={movie.id} 
              title={movie.title} 
              release_date={movie.release_date} 
             
              poster_path={movie.poster_path ?` ${IMAGE_BASE_URL}${movie.poster_path}` : null}
            />
          ))}
        </div>
      )}
      <Footer/>
    </>
  )
}

export default App