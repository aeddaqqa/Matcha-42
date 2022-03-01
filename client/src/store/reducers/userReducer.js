import { loginActionTypes, registerActionTypes } from "../actions/actionTypes";
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case loginActionTypes.USER_LOGIN_REQUEST:
            return { loading: true };
        case loginActionTypes.USER_LOGIN_SUCCESS:
            return { loading: false, user: action.payload };
        case loginActionTypes.USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case loginActionTypes.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const registerRducer = (state = {}, action) => {
    switch (action.type) {
        case registerActionTypes.USER_REGISTER_REQUEST:
            return { loading: true };
        case registerActionTypes.USER_REGISTER_SUCCESS:
            return { loading: false, user: action.payload };
        case registerActionTypes.USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        case registerActionTypes.USER_REGISTER_CLEAR:
            return { loading: false, error: null };
        default:
            return state;
    }
};
