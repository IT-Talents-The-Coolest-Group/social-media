import { ADD_POST } from '../ActionTypes/ActionTypes';

export const createPost = createdPosts => {
    return {
        type: ADD_POST,
        createdPosts
    }
} 