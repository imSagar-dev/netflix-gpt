import { useEffect } from "react";
import axios from "axios";
import { POPULAR_URL } from "../constants";
import { DEFAULT_API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Slices/moviesSlice";
const usePopular = ()=>{
    const dispatch = useDispatch();
    const getPopular = async()=>{
        try {
            const response = await axios.get(POPULAR_URL, DEFAULT_API_OPTIONS);
           
            const popular = response.data.results;
            dispatch(addPopularMovies(popular));
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getPopular();
    },[])
}


export default usePopular;