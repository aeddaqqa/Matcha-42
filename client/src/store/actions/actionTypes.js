export const loginActionTypes = {
    USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
    USER_LOGOUT: "USER_LOGOUT",
};

export const registerActionTypes = {
    USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
    USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
    USER_REGISTER_CLEAR: "USER_REGISTER_CLEAR",
    USER_REGISTER_FAIL: "USER_REGISTER_FAIL",
    //   USER_LOGOUT: "USER_LOGOUT",
};

export const CompleteProfileActionTypes = {
    firstName: "UPDATE_FIRST_NAME",
    lastName: "UPDATE_LAST_NAME",
    gender: "UPDATE_GENDER",
    biography: "UPDATE_BIOGRAPHY",
    birthdate: "UPDATE_BIRTH_DATE",
    listOfInterests: "UPDATE_LIST_OF_INTERESTS",
    profilePicture: "UPDATE_PROFILE_PICTURE",
    gallery: "UPDATE_GALLERY",
    sexualPreferences: "UPDATE_SEXUAL_PREFERENCES",
    location: "UPDATE_LOCATION",
};