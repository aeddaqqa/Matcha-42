import { actionTypes } from '../actions/actionTypes';
const initialState = { userName: null, password: null };

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                userName: action.payload.userName,
                password: action.payload.password,
            };
        case actionTypes.SET_USER_NAME:
            return {
                ...state,
                userName: action.payload.userName,
            };
        case actionTypes.SET_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
            };
        default:
            return state;
    }
};
