import { actionTypes } from './actionTypes';
import axios from 'axios';

export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const data = await axios.post(
            '/api/users/login',
            { email, password },
            config
        );
        localStorage.setItem('user', JSON.stringify(data.data));
        dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: actionTypes.USER_LOGIN_FAIL,
            payload: error.message,
        });
    }
};
