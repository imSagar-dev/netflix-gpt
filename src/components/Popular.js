import React from 'react'
import { useSelector } from 'react-redux';
import MovieCarousel from './MovieCarousal';
import usePopular from '../utils/hooks/usePopular';
const Popular = () => {
    usePopular();
    const popularMovies = useSelector((store)=>store.movies?.popularMovies);
  return (
    <div className='bg-black p-9'>
        <h1 className='text-xl font-bold text-white '>POPULAR MOVIES</h1>
    <div className='mt-3'>
        {popularMovies && <MovieCarousel movies={popularMovies}/>}
    </div>
    </div>
  )
}

export default Popular