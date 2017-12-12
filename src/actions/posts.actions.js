import axios from 'axios';

export const GET_POSTS_PENDING = "GET_POSTS_PENDING"
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"
export const ADD_POST_PENDING = "ADD_POST_PENDING"
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
export const EDIT_POSTS_PENDING = "EDIT_POSTS_PENDING"
export const EDIT_POSTS_SUCCESS = "EDIT_POSTS_SUCCESS"
export const REMOVE_POSTS_PENDING = "GREMOVEPOSTS_PENDING"
export const REMOVE_POSTS_SUCCESS = "GREMOVEPOSTS_SUCCESS"

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({ type: GET_POSTS_PENDING })
        let posts = await axios.get('http://localhost:8080/blog')
        dispatch({ 
            type: GET_POSTS_SUCCESS,
            payload: posts
        })
    }
}
export const addPost = (newPost) => {
    return async (dispatch) => {
        dispatch({ type: ADD_POST_PENDING })
        let posts = await axios.post('http://localhost:8080/admin/blog/new', newPost)
        dispatch({ 
            type: ADD_POST_SUCCESS,
            payload: posts
        })
    }
}
export const editPost = (editedPost) => {
    return async (dispatch) => {
        dispatch({ type: EDIT_POSTS_PENDING })
        let posts = await axios.patch('http://localhost:8080/admin/blog/edit/:id', editedPost)
        dispatch({ 
            type: EDIT_POSTS_SUCCESS,
            payload: posts.config
        })
    }
}