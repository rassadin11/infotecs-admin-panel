import React from 'react';

import { getUsers, UserProps } from '@entities/user';
import { useQuery } from '@tanstack/react-query';
import { EditUser } from './EditUser';

export const UsersList = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers().then(res => res.data)
    });

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка при загрузке пользователей</div>;

    return (
        <div>
            {data.map((user: UserProps) => (
                <EditUser {...user} key={user.id} />
            ))}
        </div>
    );
};