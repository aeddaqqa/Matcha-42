import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../../views/Home/LoginRegister";
import Profile from "../../views/Profile/Profile";
import { NotFound } from "./NotFound";
import ComfirmAccount from "../../views/CompleteProfile/VerifyEmail";
import NewPassword from "../../views/Home/NewPassword";
import CompleteProfile from "../../views/CompleteProfile";
import NavBar from "../NavBar/NavBar";
import Browsing from "../../views/Browsing/Browsing";
import Chat from "../../views/Chat/Chat";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProtectedRoutes = () => {
    let location = useLocation();
    const { user } = useSelector((state) => state.userLogin);
    if (!user || !user?.verified)
        return (
            <>
                <NavBar complete={true} />
                <Browsing />
            </>
        );
    else if (!user.complete)
        return (
            <>
                <NavBar complete={false} />
                <CompleteProfile />
            </>
        );
    return (
        <>
            <NavBar complete={true} />
            <Outlet />
        </>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<ProtectedRoutes />}>
                    {/* <Route path="/verifyProfil" element={<ComfirmAccount />} /> */}
                    {/* <Route path="/ForgetPassword" element={<NewPassword />} /> */}
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    <Route index path="/browsing" element={<Browsing />} />
                    {/* <Route path="/completeProfile" element={<CompleteProfile />} /> */}
                    {/* <Route path="/newpassword" element={<NewPassword />} /> */}
                    {/* <Route path="/messages" element={<Chat />} /> */}
                    {/* <Route path="*" element={<Profile />} /> */}
                </Route>
                {/* <Route path="*" element={<Profile />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
