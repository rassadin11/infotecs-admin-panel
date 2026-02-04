import React, { useCallback, useEffect } from 'react';

import { useLogin } from './model/finishLogin';
import { LoginParams } from './types';
import { LoginForm } from './ui/LoginForm';
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

export const AuthForm = ({ onSuccess }: { onSuccess: () => void }) => {
    const { mutateAsync, isPending, error } = useLogin()
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        if (error) {
            openNotification('bottomRight');
        }
    }, [error])

    const openNotification = (placement: NotificationPlacement) => {
        api.error({
            message: `Введены неправильные данные`,
            description: (error as Error)?.message,
            placement,
        });
    };

    const onFinish = async (values: LoginParams) => {
        try {
            const token = await mutateAsync(values);
            localStorage.setItem('token', token);
            Promise.resolve().then(() => onSuccess());
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {contextHolder}
            <LoginForm onFinish={onFinish} isLoading={isPending} error={error as Error} />
        </>
    );
};
