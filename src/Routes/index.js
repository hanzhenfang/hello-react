import { Navigate } from 'react-router-dom';

import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/SignIn'
import Home from '../Pages/Home'
import Product from '../Pages/Product';
import Category from '../Pages/Category';
import User from '../Pages/User';
import Role from '../Pages/Role';
import Charts from '../Pages/Charts'
import memoryUtils from '../Utils/memoryUtils';
import NotFound from '../Pages/404';
import ProductAddUpate from '../Pages/Product/add-update';
import ProductDetial from '../Pages/Product/detial';
import ProductHome from '../Pages/Product/home';

const routesList = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate replace to='home' />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'category',
        element: <Category />
      },
      {
        path: 'product',
        element: <Product />,
        children: [
          {
            path: '/dashboard/product',
            element: <Navigate to='home' replace />
          },
          {
            path: 'addupdate',
            element: <ProductAddUpate />
          },
          {
            path: 'detial',
            element: <ProductDetial />
          },
          {
            path: 'home',
            element: <ProductHome />
          }
        ]
      },
      {
        path: 'user',
        element: <User />
      },
      {
        path: 'role',
        element: <Role />
      },
      {
        path: 'charts',
        element: <Charts />
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
    path: '*',
    element: <NotFound />
  },
];

export default routesList;