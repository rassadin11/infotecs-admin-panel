import { api } from "@shared/api/axios"
import { UserManipulationType } from "@shared/types/user"

export const editUser = (values: UserManipulationType, userId: number) => {
    return api.put(`/users/${userId}`, {
        name: values.name,
        avatar: values.link
    })
}