//реализация функций регистрации/авторизации и проверки токена на валидность

import { $authHost, $host } from "./index"; 
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    //если запрос прошел, и данные получены - помещаем токен из тела запроса в хранилище
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}