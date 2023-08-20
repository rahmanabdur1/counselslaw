import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";

import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";

export const router =createBrowserRouter([
{
    path:'/',
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/about',
            element:<About/>
        }
    ]
}
])