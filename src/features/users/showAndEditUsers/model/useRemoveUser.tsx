import { useMutation, useQueryClient } from "@tanstack/react-query"
import { removeUser } from "../api/removeUser"

export const useRemoveUser = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: number) => removeUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    })
}