import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ id, title, release_date, poster_path, vote_average,overview }) {
    const navigate = useNavigate();
    
    return (
        <div 
            className="card" 
            onClick={() => navigate(`/movie/${id}`, { 
                state: { title, release_date, poster_path, vote_average, overview } 
            })}
            
        >
            <img src={poster_path} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <div className="card-info">
                    <p className="card-det">{release_date}</p>
                    <p className="card-det">{vote_average}</p>
                    <p className="card-label">Movie</p>
                </div>
            </div>
        </div>
    );
}
