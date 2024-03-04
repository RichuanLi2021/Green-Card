import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logo from '../assets/images/icons/logo/white/WhiteShine256px.svg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css';
import Config from "../config/config";  
import {useState} from 'react';
import ToastComponent from '../components/ToastComponent';


const theme = createTheme({
  palette: {
    primary: {
      main: '#96d2b0'
    }
  }
});

export default function SignIn() { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');  
  const [toastType, setToastType] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }; 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  if (localStorage.getItem('access-token')) window.location.href = '/home';

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage('');
      setToastType('');
    }, 9000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataCredential = new FormData(event.target);
  
    if (!email || !password) {
      showToast('Please enter both email and password');
      return;
    }
  
    try {
      const response = await axios.post(`${Config.API_URL}/api/auth/login`, {
        email: dataCredential.get('email'),
        password: dataCredential.get('password'),
      }, { withCredentials: true });
  
      if (response.status === 200) {
        console.log('Login Successful: ', response.data);
        showToast('Login Successful', 'success');
        localStorage.setItem("access-token", response.data.token);
        localStorage.setItem("user-role", response.data.role);
        window.location.href = '/home';
      } else {
        console.log('Log Failed:', response.data.errorMessage);
        showToast(response.data.errorMessage || 'Login failed', 'error');
      }
    } catch (error) {
      console.error('Error: ', error);
  
      if (error.response) {
        console.log('Server Error: ', error.response.data);
        showToast('Server Error. Please try again later.', 'error');
      } else if (error.request) {
        console.log('Network Error: ', error.request);
        showToast('Network Error. Please check your internet connection.', 'error');
      } else {
        console.log('Error:', error.message);
        showToast('An unexpected error occurred. Please try again.', 'error');
      }
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Avatar sx={{ width: 90, height: 90, bgcolor: '#96d2b0', border: '3px solid #5a8e70' }}>
            <img src={logo} className={'height-width-5rem'} alt='GPGC Logo'></img>
          </Avatar>

          <Typography component="h1" variant="h5" sx={{mt: 3, mb: 2, color: '#68a783'}}>
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" id="email" label="Email" name="email" autoComplete="email@gmail.com" autoFocus fullWidth required 
            onChange={handleEmailChange} />
            <TextField margin="normal" name="password" label="Password" type="password" id="password" fullWidth required onChange={handlePasswordChange}/>
            <FormControlLabel control={<Checkbox value="remember" color="primary" sx={{color: '#68a783'}} />} label="Remember me" sx={{color:'#68a783'}} />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, color: 'darkgreen' }}>
              Sign In
            </Button> 
            
            <Grid container className='signUpGrid'>
              <Grid item xs>
                <Link href="/register" variant="body2" sx={{color:'#68a783'}}>Don't have an account? Sign Up</Link>
              </Grid>
              
              <Grid item>
                <Link href="/ForgotPassword" variant="body2" sx={{color:'#68a783'}}>Forgot password?</Link>
              </Grid>
              
            </Grid>
          </Box>

        </Box> 
        <ToastComponent message={toastMessage} type={toastType} />
      </Container>
    </ThemeProvider>
  );
}
