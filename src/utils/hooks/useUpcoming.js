import { useEffect } from "react";
import axios from "axios";
import {  UPLCOMING_URL } from "../constants";
import { DEFAULT_API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Slices/moviesSlice";
const useUpcoming = ()=>{
    const dispatch = useDispatch();
    const getUpcoming = async()=>{
        try {
            const response = await axios.get(UPLCOMING_URL, DEFAULT_API_OPTIONS);
           
            const popular = response.data.results;
            dispatch(addUpcomingMovies(popular));
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getUpcoming();
    },[])
}


export default useUpcoming;