import React from 'react'
import { Layout } from '@app/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthPage } from '@pages/AuthPage/AuthPage'
import { UsersPage } from '@pages/UsersPage/UsersPage'
import { ConfigProvider } from 'antd'
import { RedirectIfAuth, RedirectIfNotAuth, RedirectFromHome } from '@features/auth/redirect'
import { NotFound } from '@pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RedirectFromHome />,
      },
      {
        element: <RedirectIfNotAuth />,
        children: [
          {
            path: '/users',
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
    element: (<RedirectIfNotAuth><NotFound /></RedirectIfNotAuth>),
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
