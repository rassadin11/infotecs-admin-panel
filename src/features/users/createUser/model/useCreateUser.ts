import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserRequest } from "../api/createUser";
import { UserManipulationType } from "@shared/types/user";

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (values: UserManipulationType) => createUserRequest(values),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};