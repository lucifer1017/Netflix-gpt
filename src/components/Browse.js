
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {
    useNowPlayingMovies();
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