import React, { useState, useEffect } from "react"
import { UserProps } from "@entities/user/model/types"
import { UserCardInfo } from "@entities/user/ui/UserCardInfo"
import { Flex, Form, Modal } from "antd"
import { UserManipulationType } from "@shared/types/user"
import { Input } from "@shared/ui/Input/styles"
import { Button } from "@shared/ui/Button/styles"
import { FormItem } from "./styles"
import { useEditUser } from "../model/useEditUser"
import { useRemoveUser } from "../model/useRemoveUser"

export const EditUser = ({ id, name, avatar, createdAt }: UserProps) => {
    const [open, isOpen] = useState(false)
    const { mutateAsync: editMutateAsync, isPending } = useEditUser()
    const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = useRemoveUser()
    const [form] = Form.useForm()

    useEffect(() => {
        if (open) {
            form.setFieldsValue({
                id,
                name,
                link: avatar
            })
        }
    }, [open, name, avatar, form])

    const onFinish = async (values: UserManipulationType) => {
        try {
            await editMutateAsync({ ...values, id })
            isOpen(false)
        } catch (error) {
            console.error('Ошибка при редактировании пользователя:', error)
        }
    };

    const handleCancel = () => {
        if (isPending || isRemovePending) return;
        form.resetFields()
        isOpen(false)
    }

    const handleRemoveUser = async () => {
        try {
            await removeMutateAsync(id)
            isOpen(false)
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error)
        }
    }

    return (
        <>
            <UserCardInfo id={id} name={name} avatar={avatar} createdAt={createdAt} onClick={() => isOpen(true)} />

            <Modal title="Редактирование пользователя" footer={null} open={open} onCancel={handleCancel} destroyOnClose>
                <Form form={form} name="edit-user" layout="vertical" onFinish={onFinish}>
                    <FormItem name="id" label="id">
                        <Input disabled value={id} />
                    </FormItem>
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

                    <Flex justify="space-between">
                        <Button htmlType="button" type="primary" $fontSize={14} loading={isPending || isRemovePending} disabled={isPending || isRemovePending} onClick={handleRemoveUser}>
                            Удалить
                        </Button>

                        <Flex gap={8} justify="end">
                            <Button htmlType="submit" type="primary" $fontSize={14} loading={isPending || isRemovePending} disabled={isPending || isRemovePending}>
                                Сохранить
                            </Button>
                            <Button htmlType="button" type="primary" onClick={() => isOpen(false)} $fontSize={14} disabled={isPending || isRemovePending}>
                                Отменить
                            </Button>
                        </Flex>
                    </Flex>
                </Form>
            </Modal>
        </>
    )
}