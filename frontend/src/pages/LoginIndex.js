import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// Required MUI Components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Footer from '../Footer/Footer';
// import Navigation from '../Navigation/navigation';
import './Login.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#96d2b0'
    }
  }
});

export default function SignIn() {
  // Setting up state, fetching data using axios and navigating pages using useNavigate
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/api/login")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    // Preventing page from refreshing on submission and checking for validity of login credentials and navigating
    event.preventDefault();
    const dataCredential = new FormData(event.currentTarget);

    const user = data.find(item => item.username === dataCredential.get('username'));
    if (user && user.password === dataCredential.get('password')) {
      alert("Login Success");
      localStorage.setItem('admin', 'true');
      navigate("/panel");
    } else {
      alert("Incorrect Username or Password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Navigation /> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* Setting up sign in form */}

        
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
    
          }}
        >
          {/* <Typography component="h1" variant="h5" sx={{mb:3}}>
          Geriatric Psychotropic Green Card
          </Typography> */}

          <Avatar sx={{ width: 70, height: 70, bgcolor: '#96d2b0', border: '3px solid darkgreen' }}>
            <VaccinesIcon style={{width: 37, height: 37, color: 'darkgreen'}} />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{mt: 3, mb: 2, color: 'darkgreen'}}>
            Log in
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
              sx={{ mt: 3, mb: 2, color: 'darkgreen' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      {/* Adding Footer component */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
