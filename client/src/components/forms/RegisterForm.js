import { RegisterFormStyle, SwitchToLogin } from './RegisterForm.style';
import { FormStyle, TextFieldStyled } from './input.style';
import useForm from '../../Hooks/useForm';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Register = (props) => {
    const formLogin = () => {
        console.log('Callback function when form is submitted!');
        console.log('Form Values ', values);
        console.log(errors);
    };
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
    //Custom hook call
    return (
        <RegisterFormStyle animate="show" initial="hidden" variants={Variant}>
            <div className="header-register">
                <h1>Welcome !</h1>
            </div>
            <FormStyle className="form-register" onSubmit={handleSubmit}>
                <TextFieldStyled
                    className="input-register"
                    label="username"
                    variant="outlined"
                    name="username"
                    onChange={handleChange}
                />
                <TextFieldStyled
                    className="input-register"
                    label="Email Address"
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                />
                <TextFieldStyled
                    className="input-register"
                    name="password"
                    label="Password"
                    variant="outlined"
                    onChange={handleChange}
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
                <TextFieldStyled
                    name="confirmPassword"
                    className="input-register"
                    label="Confirm Password"
                    variant="outlined"
                    onChange={handleChange}
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
                <input type="submit" value="Register" className="submit" />
            </FormStyle>
            <SwitchToLogin
                onClick={() => {
                    props.setLog(true);
                }}
            >
                Already have an account ?
            </SwitchToLogin>
        </RegisterFormStyle>
    );
};

export default Register;
