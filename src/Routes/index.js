import { Navigate } from 'react-router-dom';

import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/SignIn'
import Home from '../Pages/Home'
import memoryUtils from '../Utils/memoryUtils';


const routesList = [
    {
        path: '/login',
        element: <Login />,

    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'home',
                element: <Home />
            }
        ]
    },
    {
        path: '/',
        element:
            Object.keys(memoryUtils.user).length === 0 ?
                <Navigate replace to='/login' /> :
                <Navigate replace to='/dashboard' />
    },
    {
        path: 'signin',
        element: <SignIn />
    }
];

export default routesList;