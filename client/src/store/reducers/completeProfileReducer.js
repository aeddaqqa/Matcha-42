import { CompleteProfileActionTypes } from "../actions/actionTypes";

const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    biography: "",
    birthdate: "2000/01/01",
    listOfInterests: [],
    profilePicture: null,
    gallery: [],
    sexualPreferences: null,
    location: { lat: 0, lng: 0 },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CompleteProfileActionTypes.gender:
            return {
                ...state,
                gender: action.gender,
            };
        case CompleteProfileActionTypes.firstName:
            return {
                ...state,
                firstName: action.firstName,
            };
        case CompleteProfileActionTypes.lastName:
            return {
                ...state,
                lastName: action.lastName,
            };
        case CompleteProfileActionTypes.biography:
            return {
                ...state,
                biography: action.biography,
            };
        case CompleteProfileActionTypes.birthdate:
            return {
                ...state,
                birthdate: action.birthdate,
            };
        case CompleteProfileActionTypes.listOfInterests:
            return {
                ...state,
                listOfInterests: action.listOfInterests,
            };
        case CompleteProfileActionTypes.profilePicture:
            return {
                ...state,
                profilePicture: action.profilePicture,
            };
        case CompleteProfileActionTypes.gallery:
            return {
                ...state,
                gallery: action.gallery,
            };

        case CompleteProfileActionTypes.location:
            return {
                ...state,
                location: action.location,
            };
        case CompleteProfileActionTypes.sexualPreferences:
            return {
                ...state,
                sexualPreferences: action.sexualPreferences,
            };
        default:
            return state;
    }
};

export default reducer;
