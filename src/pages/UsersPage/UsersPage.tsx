import React from 'react'
import { Typography } from 'antd'
import { UsersList } from '@features/users/list/ui/UsersList'
import { LogoutButton } from '@features/auth/logout/ui/logoutButton'
import { CreateUser } from '@features/users/createUser'

export const UsersPage = () => {
  return <div>
    <Typography.Title>Все существующие пользователи</Typography.Title>
    <LogoutButton />
    <UsersList />
    <CreateUser />
  </div>
}
