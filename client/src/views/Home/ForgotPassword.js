import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import axios from "axios";
import { Rings } from "react-loader-spinner";
const style = {
  border: "2px solid red",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const StyledModal = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .modal-title {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.text};
  }
  .modale-input {
    width: 100%;
  }
  .modale-message {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

const StyledForgot = styled.p`
  cursor: pointer;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

// forgetpassword

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError(null);
    setResult({});
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendEmail = () => {
    setLoading(true);
    const res = axios
      .post("http://localhost:1337/user/forgetpassword", { email: value })
      .then((res) => {
        setResult(res.data);
        setError(null);
        setValue("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setValue("");
        setResult(null);
        console.log(error);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };
  return (
    <>
      <StyledForgot onClick={handleOpen}>Forgot Password ?</StyledForgot>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledModal onSubmit={handleSubmit}>
            <h1 className="modal-title">Reset Password</h1>
            <TextField
              className="modale-input"
              label="Email"
              variant="outlined"
              name="email"
              value={value}
              onChange={handleChange}
            />
            {!loading ? (
              error ? (
                <p>{error}</p>
              ) : result.message === "Email was send." ? (
                <h1 className="modale-message">{result.message}</h1>
              ) : null
            ) : null}
            {loading ? (
              <Rings ariaLabel="loading-indicator" color="red" />
            ) : (
              <input
                type="text"
                name="submit"
                type="submit"
                value="send email"
              />
            )}
          </StyledModal>
        </Box>
      </Modal>
    </>
  );
};

export default ForgotPassword;
