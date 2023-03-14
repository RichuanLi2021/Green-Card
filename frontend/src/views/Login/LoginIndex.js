// Citations:
// Title: Sign-in template
// Author: Michal Dudak and Samuel Sycamore
// Date: Oct 27, 2022
// Date accessed: Feb 01, 2023
// Code version: 3f88e94
// Availability: https://github.com/mui/material-ui/tree/v5.11.7/docs/data/material/getting-started/templates/sign-in
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Link} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const theme = createTheme();

// This code is a function called SignIn() that renders a form with an username and password field, and a submit button. When the submit button is clicked, the handleSubmit() function is called which prevents the default action from occuring, creates a FormData object from the currentTarget of the event, and logs an object containing the username and password values to the console.
export default function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/login')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
    });
  }, []);  

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataCredential = new FormData(event.currentTarget);
    console.log({
      username: dataCredential.get('username'),
      password: dataCredential.get('password'),
    });

    // go through the data array and check if the username and password match
    data.forEach((item) => {
      if (item.username === dataCredential.get('username') && item.password === dataCredential.get('password')) {
        alert("Login Success");
        localStorage.setItem("admin", "true");
        navigate("/");
      }
      else
      {
        alert("Incorrect Username or Password");
      }
    });

    return (dataCredential)
  };

// This code is a React component that renders a sign in form. It uses the ThemeProvider component to set the theme, and the Container component to set the maxWidth of the page. The CssBaseline component is used to reset any global styles. 
// The Box component is used to display flex elements, and an Avatar component with a LockOutlinedIcon is used for the avatar. A Typography component is used for the title "Sign In". 
// A TextField component is used for both username and password inputs, as well as a FormControlLabel with a Checkbox for "Remember me". A Button component is used for submitting the form, and two Grid components are used with Link components for "Forgot Password" and "Don't have an account? Sign Up". Finally, a Copyright component is rendered at the bottom of the page.
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative" style={{background: '#96D2B0'}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" color="black" noWrap>
            Geriatric Psychiatry Green Card
          </Typography>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
