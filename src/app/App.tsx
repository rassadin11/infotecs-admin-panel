import React from 'react'
import { NotFound } from '@pages/NotFound'
import { Layout } from '@app/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthPage } from '@pages/AuthPage/AuthPage'
import { UsersPage } from '@pages/UsersPage/UsersPage'
import { ConfigProvider } from 'antd'
import { RedirectIfNotAuth } from '@features/auth/redirect/RedirectIfNotAuth/RedirectIfNotAuth'
import { RedirectIfAuth } from '@features/auth/redirect/RedirectIfAuth/RedirectIfAuth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <RedirectIfNotAuth />,
        children: [
          {
            index: true,
            element: <UsersPage />,
          }
        ]
      },
      {
        path: '/login',
        element: (
          <RedirectIfAuth>
            <AuthPage />
          </RedirectIfAuth>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export const App = () => {
  return <ConfigProvider theme={{
    token: {
      colorPrimary: '#256090',
    },
  }}>
    <RouterProvider router={router} />
  </ConfigProvider>
}
