import { api } from "@shared/api/axios";
import { UserManipulationType } from "@shared/types/user";

export const createUserRequest = async (values: UserManipulationType) => {
    return api.post('/users', {
        name: values.name,
        avatar: values.link
    });
};
