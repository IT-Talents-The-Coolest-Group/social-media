import { USER_LOGIN, USER_REGISTER, USER_LOGOUT, USER_SEARCH, UPLOAD_PHOTO ,ADD_POST, ADD_FRIEND, MANAGE_FRIEND_REQUEST, DELETE_FRIEND, UDPATE_USER_IFNO, USER_CHANGE_PASSWORD } from "./actionTypes";

export const userLogin = (email, password) => {
    return {
        type: USER_LOGIN,
        email,
        password
    }
};

export const userChangePassword = (newPassword, newPasswordConfirm, oldPassword) => {
    return {
        type: USER_CHANGE_PASSWORD,
        newPassword,
        newPasswordConfirm,
        oldPassword
    };
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

export const addFriend = friendId => {
    return {
        type: ADD_FRIEND,
        friendId
    };
};

export const deleteFriend = userId => {
    return {
        type: DELETE_FRIEND,
        userId
    };
};

export const updateUserInfo = info => {
    return {
        type: UDPATE_USER_IFNO,
        info
    };
};

export const manageFriendRequest = (userId, status) => {
    return {
        type: MANAGE_FRIEND_REQUEST,
        userId,
        status
    };
};

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

