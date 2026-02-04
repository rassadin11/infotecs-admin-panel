import React from 'react'
import { NotFound } from '@pages/NotFound'
import { Layout } from '@app/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthPage } from '@pages/AuthPage/AuthPage'
import { UsersPage } from '@pages/UsersPage/UsersPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UsersPage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
