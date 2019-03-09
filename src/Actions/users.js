import { USER_LOGIN, USER_REGISTER, USER_LOGOUT, USER_SEARCH, UPLOAD_PHOTO ,ADD_POST } from "./actionTypes";

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

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
};

export const userSearch = query => {
    return {
        type: USER_SEARCH,
        query
    }
}

export const uploadPhoto = (selectefFileCover) => {
    return {
        type: UPLOAD_PHOTO,
        selectefFileCover,
       
    }
};

export const addPost= post => {
    return {
        type: ADD_POST,
        post
    }
} 

