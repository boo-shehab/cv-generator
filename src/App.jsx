import { useState } from 'react'
import Register from './screens/register/Register';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import UserInfo from './screens/userInfo/UserInfo';
import DashboardScreen from './screens/dashboardScreen/DashboardScreen';
import MainLayout from './layout/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Login from './screens/login/login';
import Setting from './screens/SettingScreen/Setting';



function App() {

  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/user-info",
      element: <UserInfo />,
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      element: <MainLayout />,
      errorElement: <Link to='/'>link</Link>,
      children: [
        {
          path: "/",
          element: (
            // <ProtectedRoute isProtected={true}>
              <HomeScreen  />
            // </ProtectedRoute>
            
          ),
          errorElement: <Link to='/'>link</Link>
        },
        {
          path: "/profile",
          element: (
            // <ProtectedRoute isProtected={true}>
              <ProfileScreen />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            // <ProtectedRoute isProtected={true}>
              <DashboardScreen />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/setting",
          element: (
            // <ProtectedRoute isProtected={true}>
            <Setting/>
            // </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Link to="/register">go to home</Link>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
     </>
  )
}

export default App
