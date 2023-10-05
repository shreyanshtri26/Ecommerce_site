import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/user_services";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    SigninUserHandler({
      userEmail: email,
      userPassword: password,
    });
  };
  const SigninUserHandler = (data) => {
    try {
      const response = loginUser(data);
      response.then((res) => {
        console.log(res);
        toast.success(" Logged In");
        navigate("/Home");
      });
    } catch (err) {
      console.log(err);
      toast.error("error");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "green" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Link
              to="/Register"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Button color="inherit" dir="ltr">
                Register
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mx: "auto", width: 500, mt: 10 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
            required
            fullWidth
            sx={{ m: 3 }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
            required
            fullWidth
            sx={{ m: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ m: 3 }}
            style={{ backgroundColor: "green" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
