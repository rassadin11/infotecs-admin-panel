import { getUsers } from '@entities/user/api/getUsers';
import { UserProps } from '@entities/user/model/types';
import { EditUser } from '@features/users/showAndEditUsers/ui/EditUser';
import { useQuery } from '@tanstack/react-query';

import React from 'react';

export const UsersList = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers().then(res => res.data)
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users</div>;

    return (
        <div>
            {data.map((user: UserProps) => (
                <EditUser {...user} key={user.id} />
            ))}
        </div>
    );
};