import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { TextFieldStyled } from "../../components/forms/input.style";
import useForm from "../../Hooks/useForm";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { LoginStyle } from "../../components/forms/LoginForm.style";
import { Rings } from "react-loader-spinner";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const MySwal = withReactContent(Swal);
  const loginForm = () => {};
  // const { handleChange, values, errors, handleSubmit } = useForm(loginForm);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    if (event.target.name === "password") {
      setPassword(event.target.value);
    } else setConfirmPassword(event.target.value);
  };

  const [searchParams] = useSearchParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    sendNewPassword();
  };
  const sendNewPassword = () => {
    const token = searchParams.get("token");
    axios
      .post("http://localhost:1337/user/newPassword", {
        token: token,
        password: password,
      })
      .then((res) => {
        if (res.data.status === 200) {
          MySwal.fire("Good job!", res.data.message, "success");
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Container>
      <Logo />
      <LoginStyle onSubmit={handleSubmit}>
        <TextFieldStyled
          value={password}
          onChange={handleChange}
          name="password"
          className="input-login"
          label="New Password"
          variant="outlined"
          type={"password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextFieldStyled
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          className="input-login"
          label="Comfirm Password"
          variant="outlined"
          type={"password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {loading ? (
          <Rings ariaLabel="loading-indicator" color="red" />
        ) : (
          <input
            type="submit"
            value="Confirm new password"
            className="submit"
          />
        )}
      </LoginStyle>
    </Container>
  );
};

export default NewPassword;
