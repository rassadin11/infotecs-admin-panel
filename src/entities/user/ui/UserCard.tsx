import React, { useState } from "react"
import { UserCardInfo } from "./UserCardInfo/UserCardInfo"
import { UserEditModal } from "./UserEditModal/UserEditModal"
import { UserProps } from "../model/types"

export const UserCard = (props: UserProps) => {
    const [open, isOpen] = useState<boolean>(false)

    return (
        <>
            <UserCardInfo {...props} isOpen={isOpen} />
            <UserEditModal open={open} isOpen={isOpen} />
        </>
    )
}