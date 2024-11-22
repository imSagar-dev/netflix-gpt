import React, { useEffect } from 'react'
import Login from '../auth/Login'
import Browse from '../Browse'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUserData, clearUserData } from '../../utils/Slices/userSlice';

const Body = () => {
  const dispatch = useDispatch();


  
    const appRouter = createBrowserRouter([
        {
          path:'/',
          element:<Login/>
        },
        {
          path:'/browse',
          element:<Browse/>
        }
      ])

      const getAuthStatus=()=>{

        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(addUserData({accessToken: user.accessToken , email: user.email, uId: user.uid }));
          } else {
            dispatch(clearUserData());
          }
        });

     
      
      }
    
      useEffect(()=>{
        getAuthStatus();
      },[])

      

      return (
        <>
       <RouterProvider router={appRouter}></RouterProvider>
        </>
      )
}

export default Body