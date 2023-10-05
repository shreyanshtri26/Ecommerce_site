import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Link,useNavigate} from "react-router-dom";
import { signUp } from "../services/user_services";
import { toast } from "react-toastify";

const Register = () => {
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  useEffect(() => {}, [data]);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Daat, ", data);
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success");
        toast.success("User is Registered Successfully");
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });



    setData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
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
              to="/Login"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Button color="inherit" dir="ltr">
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mx: "auto", width: 500, mt: 10 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="text"
            label="Name"
            type="Name"
            onChange={(e) => handleChange(e, "name")}
            value={data.name}
            margin="normal"
            required
            fullWidth
            sx={{ m: 3 }}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            onChange={(e) => handleChange(e, "email")}
            value={data.email}
            margin="normal"
            required
            fullWidth
            sx={{ m: 3 }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            onChange={(e) => handleChange(e, "password")}
            value={data.password}
            margin="normal"
            required
            fullWidth
            sx={{ m: 3 }}
          />
          <TextField
            id="phone"
            label="phone"
            type="number"
            onChange={(e) => handleChange(e, "phone")}
            value={data.phone}
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
            Register
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Register;
