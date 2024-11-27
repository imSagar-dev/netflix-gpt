import React, { useEffect } from 'react'
import Login from '../auth/Login'
import Browse from '../Browse'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Watch from '../Watch';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/watch/:id',
      element: <Watch />
    }
  ])





  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default Body