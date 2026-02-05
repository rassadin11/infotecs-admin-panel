import { Button } from "@shared/ui/Button/styles"
import { Modal } from "antd"
import React, { useState } from "react"

export const CreateUser = () => {
    const [open, isOpen] = useState(false)

    return (
        <>
            <Button $fontSize={14} type="primary" onClick={() => isOpen(true)}> Создать пользователя</Button>

            <Modal
                title="Создание пользователя"
                open={open}
                onCancel={() => isOpen(false)}
                destroyOnClose
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}