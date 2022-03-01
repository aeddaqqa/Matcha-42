import { combineReducers } from "redux";
import { userLoginReducer, registerRducer } from "./userReducer";
import completeProfileReducer from "./completeProfileReducer";

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: registerRducer,
    completeProfile: completeProfileReducer,
});

export default rootReducer;
