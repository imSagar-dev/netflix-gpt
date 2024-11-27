import { useEffect } from "react";
import axios from "axios";
import { TOP_RATED_URL } from "../constants";
import { DEFAULT_API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Slices/moviesSlice";
const useTopRated = () => {
    const dispatch = useDispatch();
    const getTopRated = async () => {
        try {
            const response = await axios.get(TOP_RATED_URL, DEFAULT_API_OPTIONS);

            const topRated = response.data.results;
            dispatch(addTopRatedMovies(topRated));
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTopRated();
    }, [])
}


export default useTopRated;