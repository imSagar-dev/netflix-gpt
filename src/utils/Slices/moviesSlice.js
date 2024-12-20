import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        watchMovie: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addWatchVideo: (state, action) => {
            state.watchMovie = action.payload
        },
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addPopularMovies, addUpcomingMovies, addWatchVideo } = moviesSlice.actions;

export default moviesSlice.reducer;