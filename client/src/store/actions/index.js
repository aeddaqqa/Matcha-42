import { actionTypes } from '../actions/actionTypes';

export const setUser = (user) => ({
    type: actionTypes.SET_USER,
    payload: { userName: user.name, password: user.password },
});

export const setUserName = (name) => ({
    type: actionTypes.SET_USER_NAME,
    payload: { userName: name },
});

export const setUserPassword = (Password) => ({
    type: actionTypes.SET_USER_Password,
    payload: { password: Password },
});
