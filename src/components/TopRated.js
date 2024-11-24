import React from 'react'
import useTopRated from '../utils/hooks/useTopRated'
import { useSelector } from 'react-redux';
import MovieCarousel from './MovieCarousal';
const TopRated = () => {
    useTopRated();
    const topRatedMovies = useSelector((store)=>store.movies?.topRatedMovies);
  return (
    <div className='bg-black p-9 '>
        <h1 className='text-xl font-bold text-white '>TOP RATED</h1>
    <div className='mt-3'>
        {topRatedMovies && <MovieCarousel movies={topRatedMovies}/>}
    </div>
    </div>
  )
}

export default TopRated