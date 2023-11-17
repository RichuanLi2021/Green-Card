import * as React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css';
import Config from "../config/config";

const theme = createTheme({
  palette: {
    primary: {
      main: '#96d2b0'
    }
  }
});

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataCredential = new FormData(event.target);
    
    axios.post(Config.API_URL + "/api/auth/login", {
      email: dataCredential.get('email'),
      password: dataCredential.get('password')
    })
      .then(response => {
        if (response.data.message) {
          alert(response.data.message);
          navigate("/home");
        } else {
          alert(response.data.errorMessage);
        }
      })
      .catch(error => console.log(error));
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Avatar sx={{ width: 70, height: 70, bgcolor: '#96d2b0', border: '3px solid #5a8e70' }}>
            <VaccinesIcon style={{width: 37, height: 37, color: '#5a8e70'}} />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{mt: 3, mb: 2, color: '#68a783'}}>
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" id="email" label="Email" name="email" autoComplete="email@gmail.com" autoFocus fullWidth required />
            <TextField margin="normal" name="password" label="Password" type="password" id="password" fullWidth required />
            <FormControlLabel control={<Checkbox value="remember" color="primary" sx={{color: '#68a783'}} />} label="Remember me" sx={{color:'#68a783'}} />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, color: 'darkgreen' }}>
              Sign In
            </Button>
            
            <Grid container className='signUpGrid'>
              <Grid item xs>
                <Link href="/register" variant="body2" sx={{color:'#68a783'}}>Don't have an account? Sign Up</Link>
              </Grid>

              <Grid item>
                <Link href="#" variant="body2" sx={{color:'#68a783'}}>Forgot password?</Link>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Container>
    </ThemeProvider>
  );
}
