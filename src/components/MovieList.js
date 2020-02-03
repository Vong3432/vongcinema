import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movielist, type }) => {

    // const [ movingDirection, setMovingDirection ] = useState("")    
    const scrollSlider = (section, direction) => {
        const slider = document.querySelector(`.${section}`);

        switch(direction) {
            case "left":                
                // slider.classList.add('slide-left')                
                var scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    slider.scrollLeft -= 10;
                    scrollAmount += 10;

                    if( scrollAmount >= slider.clientWidth )
                        window.clearInterval(slideTimer)
                }, 3)
                break;
                
            case "right":
                var scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    slider.scrollLeft += 10;
                    scrollAmount += 10;

                    if( scrollAmount >= slider.clientWidth )
                        window.clearInterval(slideTimer)
                }, 3)
                break;
        }    
    }

    return (
        <>
            {movielist.results.length > 0 ?
                <>
                    <div className={`movie-slider-innercontainer ${type}`}>
                        <button className="btn-left" onClick={e => scrollSlider(type, 'left')}></button>
                        <button className="btn-right" onClick={e => scrollSlider(type, 'right')}></button>
                        {movielist.results.map((movie, index) =>
                            <MovieItem
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                                release_date={movie.release_date}
                                vote_average={movie.vote_average}
                                adult={movie.adult}
                                original_language={movie.original_language}
                            />
                        )}
                    </div>
                </>
                : <p className="text-white-50">No results</p>}

        </>
    )
}

export default MovieList
