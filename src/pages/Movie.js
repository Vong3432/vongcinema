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
        
        // If user clicks on new tag,
        // reset the pagination number to 1
        // if(type !== tag.tag_name)
        //     props.history.push('/movie?page=1')

        _displayMovies(tag.tag_name, page)
        
    }, [tag])

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
                    <div className="tag-container">
                        <div className="tag--desktop">
                            <span className={`tag ${tag.tag_index === 0 && 'tag--active'}`} onClick={() => _changeTag("NOW_PLAYING")}>Now playing</span>
                            <span className={`tag ${tag.tag_index === 1 && 'tag--active'}`} onClick={() => _changeTag("POPULAR")}>Popular</span>
                            <span className={`tag ${tag.tag_index === 2 && 'tag--active'}`} onClick={() => _changeTag("UPCOMING")}>Upcoming</span>
                        </div>
                        <div className="tag--mobile"> 
                            <span className={`tag ${tag.tag_index === 0 && 'tag--active'}`} onClick={() => _changeTag("NOW_PLAYING")}>                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="Layer 2"><path className="svg--secondary" d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"/><path className="svg--secondary" d="M17,17H9a1,1,0,0,1-1-1H8a1,1,0,0,1,1-1h6V7a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1Z"/></g></svg>
                                Now playing
                            </span>
                            <span className={`tag ${tag.tag_index === 1 && 'tag--active'}`} onClick={() => _changeTag("POPULAR")}>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path className="svg--secondary" d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                Popular
                            </span>
                            <span className={`tag ${tag.tag_index === 2 && 'tag--active'}`} onClick={() => _changeTag("UPCOMING")}>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 46 46"><defs><clipPath id="a"><rect width="32" height="32" x="7" y="7" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path className="svg--secondary" d="M34,13V9h4V7H8V9h4v4a11,11,0,0,0,6.41,10A11,11,0,0,0,12,33v4H8v2H38V37H34V33a11,11,0,0,0-6.41-10A11,11,0,0,0,34,13ZM32,33v4H14V33a9,9,0,0,1,18,0ZM23,22a9,9,0,0,1-9-9V9H32v4A9,9,0,0,1,23,22Z"/><rect width="6" height="2" x="18" y="30" fill="#1d1d1b"/></g></svg>
                                Upcoming
                                </span>
                        </div>
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
