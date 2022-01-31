import {
    LoginFormStyle,
    HelpersStyle,
    FooterStyle,
    LoginStyle,
} from './LoginForm.style';
import { TextFieldStyled } from './input.style';
import useForm from '../../Hooks/useForm';
import { ReactComponent as Google } from '../../assets/icons/Google.svg';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { signInWithGoogle, auth } from '../../firebase';
import { motion, AnimatePresence } from 'framer-motion';

const Login = (props) => {
    const formRegister = () => {
        console.log('Form Values ', values);
    };
    const [user, setUser] = useState(null);
    const { handleChange, values, errors, handleSubmit } =
        useForm(formRegister);
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // auth.onAuthStateChanged((user) => {
    //     setUser(user);
    //     console.log(user);
    // });
    const Variant = {
        hidden: {
            x: 500,
            opaciy: 0,
        },
        show: {
            opacity: 1,
            x: [500, 0],
            transition: { duration: 1, easing: 'easeInOut' },
        },
    };
    return (
        <LoginFormStyle animate="show" initial="hidden" variants={Variant}>
            <h1>
                <span> Welcome back! </span>Please login to your account.
            </h1>
            <LoginStyle onSubmit={handleSubmit}>
                <TextFieldStyled
                    className="input-login"
                    label="User Name"
                    variant="outlined"
                    name="username"
                    onChange={handleChange}
                />
                <TextFieldStyled
                    onChange={handleChange}
                    name="password"
                    className="input-login"
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <input type="submit" value="Login" className="submit" />
            </LoginStyle>
            <HelpersStyle>
                <p>
                    Don't have account ?{' '}
                    <span
                        onClick={() => {
                            props.setLog(false);
                        }}
                        className="signup"
                    >
                        Sign Up
                    </span>
                </p>
                <p className="forgot">Forgot Password?</p>
            </HelpersStyle>
            <FooterStyle>
                <div className="social">
                    <div className="line"></div>
                    <p>Or Sign in with</p>
                </div>
                <div onClick={signInWithGoogle} className="google">
                    <Google />
                    <p>Google</p>
                </div>
                <div className="google">
                    <Google />
                    <p>Google</p>
                </div>
            </FooterStyle>
        </LoginFormStyle>
    );
};

export default Login;
