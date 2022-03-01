import React, { useEffect, useState, forwardRef } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";

const ComfirmAccount = () => {
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState({ error: null, success: null });

  const postValidatEmail = async (token) => {
    
    axios
      .post("http://localhost:1337/user/validate_email", { token })
      .then((res) => {
        setMessage({ ...message, success: res.data.message });
        console.log(message);
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage({ ...message, error: err.response.data.message });
        console.log(message);
      });
  };
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) postValidatEmail(token);
  }, []);
  return (
    <div>
      {message.error ? (
        <Alert severity="error">{message.error}</Alert>
      ) : (
        <Alert severity="success">{message.success}</Alert>
      )}
    </div>
  );
};

export default ComfirmAccount;
