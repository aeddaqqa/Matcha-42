import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../views/LoginRegister';
import Profile from '../../views/Profile/Profile';
import { NotFound } from './NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
