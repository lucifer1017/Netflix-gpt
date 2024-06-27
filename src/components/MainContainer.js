
import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // const [original_title, setOriginal_title] = useState(null);
    // const [overview, setOverview] = useState(null);
    // const [id, setId] = useState(null);

    if (!movies) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />





        </div>
    )
}

export default MainContainer