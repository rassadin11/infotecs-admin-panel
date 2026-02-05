import { UserEditModalProps } from "@entities/user/model/types"
import { Modal } from "antd"
import React from "react"

export const UserEditModal = ({ open, isOpen }: UserEditModalProps) => {
    return (
        <Modal title="Редактирование пользователя" open={open} onCancel={() => isOpen(false)} destroyOnClose>
            <p>Some contents...</p>
        </Modal>
    )
}