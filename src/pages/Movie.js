import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchMovie } from '../api/FetchMovie'
import { Spinner } from 'reactstrap'

const Movie = (props) => {

    // state
    const [matchedResults, setMatchedResults] = useState([])

    const keywords = useSelector(state => state.defaultState.keywords)

    useEffect(() => {
        console.log(props)
        displayMovies()
    }, [])
    

    useEffect(() => {
        console.log(keywords)
    }, [keywords])
    
    const displayMovies = () => {
        
        fetchMovie('now_playing')
            .then(data => setMatchedResults(data.results))
            .catch(err => console.log(err))
    }    

    return (
        <>
            <div className="container">
                <div className="movie-list">
                    <h5>Sort by:</h5>
                    <div className="d-flex">
                        <p>Latest</p>
                        <p>Popular</p>
                        <p>Upcoming</p>
                    </div>
                    {
                        matchedResults.length > 0
                            ? matchedResults.map((movie, index) => (                                
                                <div className="movie-list__column" onClick={e => props.history.push(`/m/${movie.id}`)}>
                                    <div className="movie-list__column-container" key={index}>
                                        <img alt={movie.title} className="movie-list__column-poster" src={"http://image.tmdb.org/t/p/w300/" + movie.poster_path} />

                                        <div className="movie-list__column-info">

                                            <h5 className="movie-list__column-title">{movie.title}</h5>
                                            <p className="movie-list__column-description">{movie.overview}</p>

                                            <div className="d-flex align-items-center">
                                                <img className="icon" src={process.env.PUBLIC_URL + '/assets/images/calendar.svg'} alt="calendar" />
                                                <p className="movie-slider-item-releaseDate my-0 mt-1 pl-2">{movie.release_date}</p>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/Star.svg"} alt="rating" />
                                                <p className="my-0 mt-1 pl-2 movie-slider-item-rating">{movie.vote_average}</p>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/Tag.svg"} alt="tag" />
                                                <p className="movie-slider-item-description my-0 mt-1 pl-2">{movie.adult ? 'Adult, ' : null} {movie.original_language}</p>
                                            </div>                                            

                                        </div>
                                    </div>
                                </div>
                            ))
                            : <Spinner />
                    }
                </div>
            </div>
        </>
    )
}

export default Movie
