import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts/MainLayouts';
import Home from '../pages/Home/Home';
import AddProducts from '../pages/AddProducts/AddProducts';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addProducts',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
        ]
    }
])

export default Routes;