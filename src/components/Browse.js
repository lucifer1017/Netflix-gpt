
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            {/**
             * MainVideoContainer
             *  -VideoBackground
             *  -VideoTitle
             * SecondaryContainer
             *  -MovieList
             *      -MovieCards
             */}
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse