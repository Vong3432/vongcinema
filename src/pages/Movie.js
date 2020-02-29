import React, { useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { fetchMovie } from '../api/FetchMovie'
import { Spinner } from 'reactstrap'
import { FilterMovieContext } from '../contexts/FilterMovieContext'
import Pagination from '../components/Pagination'

const Movie = (props) => {

    // routes parameter
    const queryString = require('query-string')
    const { page } = queryString.parse(props.location.search)                

    // state
    const [tags, setTags] = useState([])    

    const [totalPages, setTotalPages] = useState(0)
    const [matchedResults, setMatchedResults] = useState([])

    // reducers
    const { dispatch, tag } = useContext(FilterMovieContext)
    const keywords = useSelector(state => state.defaultState.keywords)

    // Hooks
    useEffect(() => {            
        setTags(document.querySelectorAll('.tag'))                   
    }, [])

    useEffect(() => {
        
    }, [keywords])

    useEffect(() => {        
        if (totalPages > 0)
            _createPaginationNumber()
    }, [totalPages])    

    useEffect(() => {        
        _displayMovies(tag.tag_name, page)
    }, [page])

    // Methods
    const _displayMovies = (category, page) => {
        if (matchedResults)
            setMatchedResults([])

        fetchMovie(category, page)
            .then(data => {setMatchedResults(data.results); return data})
            .then(data => setTotalPages(data.total_pages))
            .catch(err => console.log(err))
    }

    const _createPaginationNumber = () => {
        
        let elements = []                

        for (var i = 0; i < totalPages; i++)
            elements.push(<Pagination history={props.history} key={i+1} number={i+1} currentPage={page} />)
        return elements
    }

    const _changeTag = (type) => {
        
        // If user clicks on new tag,
        // reset the pagination number to 1
        if(type !== tag.tag_name)
            props.history.push('/movie?page=1')

        dispatch({ type })
    }

    return (
        <>
            <div className="container">
                <div className="movie-list">
                    <h5>Sort by:</h5>
                    <div className="d-flex mb-4 flex-sm-row flex-column">
                        <span className={`tag ${tag.tag_index === 0 && 'tag--active'}`} onClick={() => _changeTag("NOW_PLAYING")}>Now playing</span>
                        <span className={`tag ${tag.tag_index === 1 && 'tag--active'}`} onClick={() => _changeTag("POPULAR")}>Popular</span>
                        <span className={`tag ${tag.tag_index === 2 && 'tag--active'}`} onClick={() => _changeTag("UPCOMING")}>Upcoming</span>
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
                    <div className="movie-list-pagination">
                        {totalPages > 0 && _createPaginationNumber()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie
