//реализация функций регистрации/авторизации и проверки токена на валидность

import { $authHost, $host } from "./index"; 
import jwt_decode from "jwt-decode";

export const createBox = async (box) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $authHost.post('api/box', box)
    return data
}

export const fetchBoxes = async () => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/box')
    return data
}
