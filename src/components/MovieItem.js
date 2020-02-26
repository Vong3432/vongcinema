import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieItem = ({ id, title, poster_path, release_date, vote_average, original_language, adult }) => {

    return (
        <div className="movie-slider-item">

            <img src={"http://image.tmdb.org/t/p/w154/" + poster_path} />

            <div className="movie-slider-item-header">
                <NavLink className="hero-title" to={`/m/${id}`}>{title}</NavLink>
            </div>

            <div className="d-flex align-items-center">
                <img className="icon" src={process.env.PUBLIC_URL + '/assets/images/calendar.svg'} alt="calendar" />
                <p className="movie-slider-item-releaseDate my-0 mt-1 pl-2">{release_date}</p>
            </div>

            <div className="d-flex align-items-center">
                <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/Star.svg"} alt="rating" />
                <p className="my-0 mt-1 pl-2 movie-slider-item-rating">{vote_average}</p>
            </div>

            <div className="d-flex align-items-center">
                <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/Tag.svg"} alt="tag" />
                <p className="movie-slider-item-description my-0 mt-1 pl-2">{adult ? 'Adult, ' : null} {original_language}</p>
            </div>

        </div>
    )
}

export default MovieItem
