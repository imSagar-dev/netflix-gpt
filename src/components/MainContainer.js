import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const { original_title, overview, id } = movies[1];
  // console.log(movies[0])
  return (
    <div className='w-screen'>


      <VideoTitle title={original_title} description={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer