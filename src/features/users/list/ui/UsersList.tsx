import { UserCard } from '@entities/user';
import { getUsers } from '@entities/user/api/getUsers';
import { UserProps } from '@entities/user/model/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const UsersList = () => {
    const { isLoading, error, data } = useQuery(['users'], () => {
        return getUsers().then(res => res.data);
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users</div>;

    return (
        <div>
            {data.map((user: UserProps) => (
                <UserCard {...user} key={user.id} />
            ))}
        </div>
    );
};