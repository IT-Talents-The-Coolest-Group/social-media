import {
    CHANGE_POST,
    NEW_POST,
    DELETE_POST
} from './actionTypes';

export const changePost = index => {
    return {
        type: CHANGE_POST,
        index,
        change: 'Burbun'
    }
} 

export const addNewPost = post => {
    return {
        type: NEW_POST,
        post
    }
} 

export const deletePost = id => {
    return {
        type: DELETE_POST,
        id
    }
}