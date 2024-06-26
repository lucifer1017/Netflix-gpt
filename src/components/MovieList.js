
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    return (
        <div className='px-6'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scroll-smooth no-scrollbar'>

                <div className='flex space-x-4 snap-container'>
                    {movies.map((movie) => <MovieCard key={movie?.id} posterPath={movie?.poster_path} />)}

                </div>
            </div>
        </div>
    )
}

export default MovieList