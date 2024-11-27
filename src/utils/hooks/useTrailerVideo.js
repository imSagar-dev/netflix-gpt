import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { DEFAULT_API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../Slices/moviesSlice';
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async (movieId) => {
    try {
      const filterResult = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, DEFAULT_API_OPTIONS);

      const movies = filterResult.data.results.filter((m) => m.type === 'trailer');
      const trailer = movies.length ? movies[0] : filterResult.data.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovieTrailer(movieId);
  }, [])
}

export default useTrailerVideo;
