import axios from 'axios';

export const GET_POSTS_PENDING = "GET_POSTS_PENDING"
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"
export const ADD_POST_PENDING = "ADD_POST_PENDING"
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
export const EDIT_POST_PENDING = "EDIT_POST_PENDING"
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS"
export const REMOVE_POST_PENDING = "REMOVE_POST_PENDING"
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS"

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
export const editPost = (post) => {
    return async (dispatch) => {
        dispatch({ type: EDIT_POST_PENDING })
        let posts = await axios.patch(`http://localhost:8080/admin/blog/edit/${post.id}`, post)
        dispatch({ 
            type: EDIT_POST_SUCCESS,
            payload: posts
        })
    }
}
export const deletePost = (id) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_POST_PENDING })
        let posts = await axios.delete(`http://localhost:8080/delete/blog/${id}`)
        dispatch({ 
            type: REMOVE_POST_SUCCESS,
            payload: posts.data
        })
    }
}