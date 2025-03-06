import React from "react";
export default function Card({ title, release_date, poster_path, vote_average }

) {
    return (
        <div className="card">
            <img src={poster_path} alt="" className="card-image" />
            <div className="card-content">
                <h2 className="card-title" title="avathar">{title}</h2>
                <div className="card-info">
                    <p className="card-det">{release_date}</p>
                    <p className="card-det">{vote_average}</p>
                    <p className="card-label">Movie</p>
                </div>
            </div>
        </div>


    )
}