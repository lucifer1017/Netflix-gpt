import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;

        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;

        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;

        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;

        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;

        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTrendingMovies,
    addUpcomingMovies, addTopRatedMovies
} = moviesSlice.actions;
