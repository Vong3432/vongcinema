import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Spinner } from 'reactstrap'
import MovieList from '../components/MovieList'

const Key = `${process.env.REACT_APP_KEY}`;

const Detail = (props) => {

    const { movieid } = props.match.params

    const [data, setData] = useState()
    const [videos, setVideos] = useState([])
    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(() => {        
        fetchDetail()
        loadVideo()
        loadSimilarMovies()
        loadRecommendedMovies()             
    }, [props.location.pathname])

    useEffect(() => {
        console.log(recommendedMovies)
    }, [recommendedMovies])

    const fetchDetail = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${Key}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }

    const loadVideo = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${Key}`)
            .then(res => setVideos(res.data.results))
            .catch(err => console.log(err));
    }

    const loadRecommendedMovies = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieid}/recommendations?api_key=${Key}`)
            .then(res => setRecommendedMovies(res.data))
            .catch(err => console.log(err));        
    }

    const loadSimilarMovies = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=${Key}`)
            .then(res => setSimilarMovies(res.data))
            .catch(err => console.log(err));
    }

    // sections
    const mainSection = () => (
        <>
            <section className="movie-detail-section">
                <div className="container">
                    <div className="movie-detail-innercontainer">

                        <div className="movie-detail-poster">
                            <img style={{ maxWidth: "500px", width: "100%" }} src={"http://image.tmdb.org/t/p/w500/" + data.poster_path} />
                        </div>

                        <div className="movie-detail-content">

                            <strong className="hero-subtitle mt-0">Released on {data.release_date}</strong>

                            <div className="movie-detail-header">
                                <h5 className="hero-title">{data.title}</h5>
                            </div>

                            <div className="movie-detail-column">
                                <b className="mr-auto">Rating</b>
                                <div>
                                    <span className="movie-rating">{data.vote_average}</span>
                                </div>
                            </div>

                            <div className="movie-detail-column">
                                <b className="mr-auto">Status</b>
                                <div>
                                    <span className="movie-status">{data.status}</span>
                                </div>
                            </div>

                            <div className="movie-detail-column">
                                <b className="mr-auto">Duration</b>
                                <div>
                                    <p className="movie-runtime my-0">{data.runtime} hours</p>
                                </div>
                            </div>

                            <div className="movie-detail-column">
                                <b className="mr-auto">Genres</b>
                                <div>
                                    <div className="d-flex flex-wrap">
                                        {data.genres.map((genre, index) => <span>{genre.name}{index === data.genres.length - 1 ? null : ", "} </span>)}
                                    </div>
                                </div>
                            </div>

                            <div className="movie-detail-column">
                                <b className="mr-auto">Overview</b>
                                <div>
                                    <strong className="movie-tagline">{data.tagline ? '"' + data.tagline + '"' : null}</strong>
                                    <p className="movie-overview">
                                        {data.overview}
                                    </p>
                                </div>
                            </div>

                            <div className="movie-detail-column">
                                <b className="mr-auto">Made from</b>
                                <div className="d-flex flex-wrap flex-row">
                                    {data.production_countries.map(country => country && (
                                        <span>{country.name} </span>
                                    ))}
                                </div>
                            </div>


                            <div className="d-flex flex-wrap">

                                {data.production_companies.map(company => company.logo_path && (
                                    <img alt="logo" className="my-1 company-logo" src={'https://image.tmdb.org/t/p/w45/' + company.logo_path} />
                                ))}

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )

    const videoSection = () => (
        <>
            <section className="video-section">
                <div className="container">
                    <h6 className="hero-title">Video</h6>
                    {
                        videos.length > 0
                            ?
                            <>
                                <div className="video-list">
                                    {displayVideos()}
                                </div>
                            </>
                            : <p className="text-white-50">No video is found.</p>
                    }
                </div>
            </section>
        </>
    )

    const similarMovieSection = () => (
        <>
            <section className="similar-movie-section">
                <div className="container">                    
                    <div className="movie-slider-container" > 
                        <h6 className="hero-title">Similar Movie</h6>
                        {similarMovies.results ? <MovieList type="similar" movielist={similarMovies} /> : <Spinner />}                        
                    </div>
                </div>
            </section>
        </>
    )

    const recommendedSection = () => (
        <>
            <section className="recommended-movie-section">
                <div className="container">                    
                    <div className="movie-slider-container" > 
                        <h6 className="hero-title">Recommended Movie</h6>
                        {recommendedMovies.results ? <MovieList type="recommended" movielist={recommendedMovies} /> : <Spinner />}                        
                    </div>
                </div>
            </section>
        </>
    )

    // sub components
    const displayVideos = () => (
        <>
            {
                videos.map(video => {
                    return (
                        <>
                            <iframe className="video" src={`https://www.youtube.com/embed/${video.key}`} />
                        </>
                    )
                })
            }
        </>
    )

    return (
        <>
            {data ? (
                <>
                    {mainSection()}
                    {videoSection()}
                    {similarMovieSection()}
                    {recommendedSection()}

                </>
            ) : <Spinner />}
        </>
    )
}

export default Detail
