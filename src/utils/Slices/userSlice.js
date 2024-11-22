import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUserData:(state, action)=>{
            return  action.payload;
        },

        getUserData:(state, action)=>{
            return state.data;
        },

        clearUserData:(state)=>{
           return null;
        }
    }
});

export const {addUserData,getUserData,clearUserData} = userSlice.actions;

export default userSlice.reducer;