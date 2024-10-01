import React, { useState, useEffect } from "react";
import "../styles.css"

export default function MovieCard({movie}) {
    const handleError = (e)=>{
        e.target.src = "images/default.jpg";
    }

    const getRatingClass = (rating)=>{
        if(rating >=8){
            return 'rating-good'
        }
        if(rating >=5 && rating < 8){ 
            return "rating-ok";
        }

        return "rating-bad";
    };
    return (
        <div className="movies-grid">

            {

                <div key={movie.id} className="movie-card">
                    <img src={`images/${movie.image}`} alt={movie.title}  onError={handleError}/>
                    <div className="movie-card-info">
                        <h3 className="movie-card-title">                        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
{movie.title}</h3>
                        <p className="movie-card-genre">{movie.genre}</p>
                    </div>
                </div>

            }
        </div>
    );
}