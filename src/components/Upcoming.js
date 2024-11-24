import React from 'react'
import { useSelector } from 'react-redux';
import MovieCarousel from './MovieCarousal';
import useUpcoming from '../utils/hooks/useUpcoming';
const Upcoming = () => {
    useUpcoming();
    const upcomingMovies = useSelector((store)=>store.movies?.upcomingMovies);
  return (
    <div className='bg-black p-9 '>
        <h1 className='text-xl font-bold text-white '>UPCOMING MOVIES</h1>
    <div className='mt-3'>
        {upcomingMovies && <MovieCarousel movies={upcomingMovies}/>}
    </div>
    </div>
  )
}

export default Upcoming