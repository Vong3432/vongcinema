import React, { useState, useEffect, Suspense } from 'react'
import { Button, Spinner, Nav } from 'reactstrap'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import MovieList from '../components/MovieList'
import { fetchMovie } from '../api/FetchMovie';

const Home = () => {

    const [nowPlayingMovies, setNowPlayingMovies] = useState()
    const [popularMovies, setPopularMovies] = useState()
    const [topRatedMovies, setTopRatedMovies] = useState()
    const [upcomingMovies, setUpComingMovies] = useState()

    useEffect(() => {
        fetchNowPlayingMovies()
        fetchPopularMovies()
        fetchTopRatedMovies()
        fetchUpcomingMovies()

        return () => { console.log('closed home') }
    }, [])


    const fetchNowPlayingMovies = () => {
        fetchMovie('now_playing')
            .then(data => setNowPlayingMovies(data))
            .catch(err => console.log(err))
    }

    const fetchPopularMovies = () => {
        fetchMovie('popular')
            .then(data => setPopularMovies(data))
            .catch(err => console.log(err))
    }

    const fetchTopRatedMovies = () => {
        fetchMovie('top_rated')
            .then(data => setTopRatedMovies(data))
            .catch(err => console.log(err))
    }

    const fetchUpcomingMovies = () => {
        fetchMovie('upcoming')
            .then(data => setUpComingMovies(data))
            .catch(err => console.log(err))        
    }

    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <strong className="hero-subdescription">the world need a hero, <br />they got a guy</strong>
                        <h3 className="hero-title">Free guy</h3>
                        <h6 className="hero-subtitle">july 3</h6>
                        <Button className="primaryBtn-bg"><img style={{ width: "20px", height: "20px" }} alt="hero" src={process.env.PUBLIC_URL + "/assets/images/play.svg"} /><div style={{ marginTop: "5px" }}>watch trailer</div></Button>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="container">
                    <div className="movie-slider-container" >
                        <h6 className="hero-title">Now Playing</h6>
                        {nowPlayingMovies ? <MovieList type="nowplaying" movielist={nowPlayingMovies} /> : <Spinner />}
                    </div>

                    <div className="movie-slider-container" >
                        <h6 className="hero-title">Popular</h6>
                        <div className="movie-slider-innercontainer">
                            {popularMovies ? <MovieList type="popular" movielist={popularMovies} /> : <Spinner />}
                        </div>

                    </div>

                    <div className="movie-slider-container" >
                        <h6 className="hero-title">Top Rated</h6>
                        <div className="movie-slider-innercontainer">
                            {topRatedMovies ? <MovieList type="toprated" movielist={topRatedMovies} /> : <Spinner />}
                        </div>

                    </div>

                    <div className="movie-slider-container" >
                        <h6 className="hero-title">Upcoming</h6>
                        <div className="movie-slider-innercontainer">
                            {upcomingMovies ? <MovieList type="upcoming" movielist={upcomingMovies} /> : <Spinner />}
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
