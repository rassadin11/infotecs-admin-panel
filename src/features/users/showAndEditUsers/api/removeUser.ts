import { api } from "@shared/api/axios"

export const removeUser = (userId: number) => {
    return api.delete(`/users/${userId}`)
}