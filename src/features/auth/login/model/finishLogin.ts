import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/login";
import { LoginParams } from "../types";

type UseLoginOptions = {
    onSuccess?: (token: string) => void;
    onError?: (error: Error) => void;
};

export const useLogin = (options?: UseLoginOptions) => {
    return useMutation({
        mutationFn: ({
            login,
            password,
        }: LoginParams) => loginRequest(login, password),
        onSuccess: options?.onSuccess,
        onError: options?.onError,
    });
};
