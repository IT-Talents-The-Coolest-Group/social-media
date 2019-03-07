import { USER_LOGIN, USER_REGISTER } from "./actionTypes";

export const userLogin = (email, password) => {
    return {
        type: USER_LOGIN,
        email, 
        password
    }
};

export const userRegister = user => {
    return {
        type: USER_REGISTER,
        user
    }
};