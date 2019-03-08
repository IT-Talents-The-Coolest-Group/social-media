import { USER_LOGIN, USER_REGISTER, USER_LOGOUT, USER_SEARCH } from "./actionTypes";

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

export const userLogout = ()  => {
    return {
        type: USER_LOGOUT
    }
};

// export const changePassword = password => {
//     return {
//         type: CHANGE_PASSWORD,
//         password
//     }
// };

export const userSearch = query => {
    return {
        type: USER_SEARCH,
        query
    }
}