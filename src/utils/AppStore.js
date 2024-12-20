import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/userSlice'
import moviesReducer from './Slices/moviesSlice';
const AppStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
    }
});

export default AppStore;