import React from "react"
import { Button } from "@shared/ui/Button/styles"
import { Flex } from "antd"
import { logoutClick } from "../model/logoutClick"
import { useNavigate } from "react-router-dom"

export const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutClick();
        navigate('/login')
    }

    return (
        <Flex justify='end'>
            <Button $fontSize={14} type="primary" onClick={handleLogout}>Выход</Button>
        </Flex>
    )
}