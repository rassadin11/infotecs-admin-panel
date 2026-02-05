import React, { useState } from "react"
import { Flex, Form, Modal } from "antd"
import { Button } from "@shared/ui/Button/styles"
import { Input } from "@shared/ui/Input/styles"
import { useCreateUser } from "../model/useCreateUser"
import { UserManipulationType } from "@shared/types/user"
import { FormItem } from "@shared/ui/FormItem/styles"

export const CreateUser = () => {
    const [open, isOpen] = useState(false)
    const { mutateAsync, isPending } = useCreateUser()

    const onFinish = async (values: UserManipulationType) => {
        try {
            await mutateAsync(values)
            isOpen(false)
        } catch (error) {
            console.error('Ошибка при создании пользователя:', error)
        }
    };

    const handleCancel = () => {
        if (isPending) return;
        isOpen(false)
    }

    return (
        <>
            <Button $fontSize={14} style={{ marginTop: "0.5rem" }} type="primary" onClick={() => isOpen(true)}>Создать пользователя</Button>

            <Modal
                title="Создание пользователя"
                open={open}
                footer={null}
                onCancel={handleCancel}
                destroyOnClose
            >
                <Form name="create-user" layout="vertical" onFinish={onFinish}>
                    <FormItem name="name" label="Имя"
                        rules={[
                            { required: true, message: 'Пожалуйста, введите имя пользователя' },
                        ]}>
                        <Input placeholder="Введите имя" />
                    </FormItem>
                    <FormItem name="link" label="Ссылка на аватарку"
                        rules={[
                            { required: true, message: 'Пожалуйста, введите ссылку на аватарку' },
                            { type: 'url', message: 'Введите корректную ссылку' },
                        ]}>
                        <Input placeholder="Введите ссылку на аватарку" />
                    </FormItem>

                    <Flex gap={8} justify="end">
                        <Button htmlType="submit" type="primary" $fontSize={14} loading={isPending} disabled={isPending}>
                            Создать
                        </Button>
                        <Button htmlType="button" type="primary" onClick={() => isOpen(false)} $fontSize={14} disabled={isPending}>
                            Отменить
                        </Button>
                    </Flex>
                </Form>
            </Modal>
        </>
    )
}