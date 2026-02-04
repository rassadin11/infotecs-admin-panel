import { api } from "@shared/api/axios";

export const loginRequest = async (login: string, password: string): Promise<string> => {
    // имитация запроса на mockapi
    // await api.post('/login', { login, password });

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (login === 'admin' && password === 'admin') {
                res('auth-token');
            } else {
                rej(new Error('Неверный логин или пароль'));
            }
        }, 2000);
    });
};