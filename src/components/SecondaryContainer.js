
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);
    // console.log(movies?.nowPlayingMovies)
    return (
        <div className='bg-black'>
            <div className='-mt-[250px] pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies?.trendingMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />


            </div>
            {/**
             * MovieList
             *  Types can be, Popular, critically acclaimed, Classics etc
             *      - MovieList will contain MovieCards that we see on netflix
             */}
        </div>
    )
}

export default SecondaryContainer