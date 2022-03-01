import { useEffect, useReducer } from "react";
import Steper from "./Steper";
import { CompleteProfileContainer } from "./CompleteProfile.Style";

const CompleteProfile = () => {
    return (
        <CompleteProfileContainer>
            <h1 className="title">Complete Profile</h1>
            <Steper />
        </CompleteProfileContainer>
    );
};

export default CompleteProfile;
