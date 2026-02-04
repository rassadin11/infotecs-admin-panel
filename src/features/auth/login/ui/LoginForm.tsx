import React from 'react';
import { Flex, Form } from 'antd';
import { Button } from '@shared/ui/Button/styles';
import { Input, PasswordInput } from '@shared/ui/Input/styles';
import { LoginParams } from '../types';

type LoginFormProsp = {
    onFinish: (values: LoginParams) => Promise<void>,
    isLoading: boolean,
    error: Error | null
}

export const LoginForm: React.FC<LoginFormProsp> = ({ onFinish, isLoading }) => {
    return (
        <Form
            name="authorization"
            autoComplete="off"
            onFinish={onFinish}
        >
            <Flex vertical gap={16}>
                <Form.Item
                    name="login"
                    rules={[{ required: true, message: 'Введите логин' }]}
                    noStyle
                >
                    <Input placeholder="Логин" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]} noStyle
                >
                    <PasswordInput placeholder="Пароль" />
                </Form.Item>

                <Flex justify="end">
                    <Form.Item noStyle>
                        <Button type="primary" htmlType="submit" $fontSize={14} disabled={isLoading} loading={isLoading}>
                            Войти
                        </Button>
                    </Form.Item>
                </Flex>
            </Flex>
        </Form>
    );
};