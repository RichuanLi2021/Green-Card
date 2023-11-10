import * as React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// Required MUI Components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
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

  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataCredential = new FormData(event.target);
    
    axios.post(process.env.REACT_APP_BACKEND_URL + "/api/login/login", {
      username: dataCredential.get('username'),
      password: dataCredential.get('password')
    })
    .then(response => {
      if (response.data.success) {
        alert(response.data.message);
        localStorage.setItem('admin', 'true');
        navigate("/panel");
      } else {
        alert(response.data.message);
      }
    })
    .catch(error => console.log(error));
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

          <Avatar sx={{ width: 70, height: 70, bgcolor: '#96d2b0', border: '3px solid #5a8e70' }}>
            <VaccinesIcon style={{width: 37, height: 37, color: '#5a8e70'}} />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{mt: 3, mb: 2, color: '#68a783'}}>
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
              control={<Checkbox value="remember" color="primary" sx={{color: '#68a783'}} />}
              label="Remember me" sx={{color:'#68a783'}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: 'darkgreen' }}
            >
              Sign In
            </Button>
            
            <Grid container className='signUpGrid'>
            <Grid item xs>
                <Link to="register" variant="body2" sx={{color:'#68a783'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{color:'#68a783'}}>
                  Forgot password?
                </Link>
              </Grid>
           
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* Adding Footer component */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
