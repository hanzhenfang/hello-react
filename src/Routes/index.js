import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/SignIn'

import { Navigate } from 'react-router-dom';

export default [
    {
        path: '/login',
        element: <Login />,

    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/',
        element: <Navigate replace to='/login' />
    },
    {

        path: 'signin',
        element: <SignIn />

    }
]