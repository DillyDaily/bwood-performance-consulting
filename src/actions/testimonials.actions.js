import axios from 'axios';

export const GET_TESTIMONIALS_PENDING = "GET_TESTIMONIALS_PENDING"
export const GET_TESTIMONIALS_SUCCESS = "GET_TESTIMONIALS_SUCCESS"

export const getTestimonials = () => {
    return async (dispatch) => {
        dispatch({ type: GET_TESTIMONIALS_PENDING })
        let testimonials = await axios.get('http://localhost:8080/testimonials')
        dispatch({ 
            type: GET_TESTIMONIALS_SUCCESS,
            payload: testimonials
        })
    }
}
