import { UserManipulationType } from "@shared/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser } from "../api/editUser";

export const useEditUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (values: UserManipulationType & { id: number }) => editUser(values, values.id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
}