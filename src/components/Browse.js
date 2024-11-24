import React from 'react'
import Header from './core/Header';
import useNowPlaying from '../utils/hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlaying();

  

  return (
    <>
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
     {/* 
     main container 
        -- video title
            -- video name , description
        -- video background 
      
      secondary container
        -- movies list
     */}
    </>
     
   
    
  )
}

export default Browse