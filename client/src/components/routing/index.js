import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../views/Home/LoginRegister";
import Profile from "../../views/Profile/Profile";
import { NotFound } from "./NotFound";
import ComfirmAccount from "../../views/CompleteProfile/VerifyEmail";
import NewPassword from "../../views/Home/NewPassword";
import CompleteProfile from "../../views/CompleteProfile";
import NavBar from "../NavBar/NavBar";

const Router = () => {
    return (
        <BrowserRouter>
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/validateAccount" element={<ComfirmAccount />} />
                <Route path="/ForgetPassword" element={<NewPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/completeProfile" element={<CompleteProfile />} />
                <Route path="/newpassword" element={<NewPassword />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
