import { loginActionTypes, registerActionTypes } from "./actionTypes";
import axios from "axios";

export const userLoginAction = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: loginActionTypes.USER_LOGIN_REQUEST });
        const data = await axios.post("http://localhost:3000/api/login", {
            username,
            password,
        });
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch({
            type: loginActionTypes.USER_LOGIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: loginActionTypes.USER_LOGIN_FAIL,
            payload: error.response.data,
        });
    }
};

export const userRegisterAction =
    (firstName, lastName, username, email, password) => async (dispatch) => {
        try {
            dispatch({ type: registerActionTypes.USER_REGISTER_REQUEST });
            const data = await axios.post("http://localhost:3000/api/signup", {
                firstName,
                lastName,
                username,
                email,
                password,
            });
            console.log(data);
            dispatch({
                type: registerActionTypes.USER_REGISTER_SUCCESS,
                payload: data?.data,
            });
            // check fot data error
        } catch (error) {
            dispatch({
                type: registerActionTypes.USER_REGISTER_FAIL,
                payload: error.response.data,
            });
        }
    };
