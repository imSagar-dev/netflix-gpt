import axios from 'axios';
import { useEffect } from 'react';
import { NOW_PLAYING_URL, DEFAULT_API_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Slices/moviesSlice';

const useNowPlaying = () => {
  //get now playing movies and added into the store.
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    try {
      const response = await axios.get(NOW_PLAYING_URL, DEFAULT_API_OPTIONS);
      if (response.status === 200) {
        dispatch(addNowPlayingMovies(response.data.results));
      }
      // const result = response.data
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlaying;