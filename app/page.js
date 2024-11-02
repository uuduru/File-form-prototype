"use client";
import {Route, createBrowserRouter, RouterProvider, Navigate, createRoutesFromElements, Routes} from 'react-router-dom';


import Personal_Details from './product_choice';



export default function App() {
  if (typeof document !== 'undefined') {
  const Router = createBrowserRouter([
  
    {path : '/', element: <Navigate to = "/Home"/>},
    {path : '/Home', element: <Personal_Details/>},
    // {path : '/Personal_details', element: <Personal_Details/>},
    
  ]
  );
  
  return  (
  <>
  <RouterProvider router = {Router}/>
  </>
  );
}

}

