import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { DEFAULT_API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addWatchVideo } from '../Slices/moviesSlice';
const useWatchVideo = (movieId) => {
    const dispatch = useDispatch();

    const getMovie = async (movieId) => {
        try {
            const filterResult = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, DEFAULT_API_OPTIONS);

            // const movies = filterResult.data.results.filter((m)=>m.type === 'trailer');
            const vdo = filterResult.data.results[0];
            dispatch(addWatchVideo(vdo));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovie(movieId);
    }, [])
}

export default useWatchVideo;
