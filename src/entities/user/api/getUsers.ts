import { api } from "@shared/api/axios"

export const getUsers = () => {
    return api.get('/users')
}