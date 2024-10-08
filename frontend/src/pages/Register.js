import * as React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logo from '../assets/images/icons/logo/white/WhiteShine256px.svg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Config from '../config/config';

const theme = createTheme({
  palette: {
    primary: {
      main: '#96d2b0'
    }
  }
});

export default function SignIn() {
  const navigate = useNavigate();

  const [occupation, setOccupation] = React.useState('');
  const [showSpecialtyInput, setShowSpecialtyInput] = React.useState(false);
  const [showOccupationInput, setShowOccupationInput] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordStrength, setPasswordStrength] = React.useState({ message: '', class: '' });
  const [passwordMatchError, setPasswordMatchError] = React.useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  const handleOccupationChange = (event) => {
    const discipline = event.target.value;
    setOccupation(discipline);

    if (discipline === 'Other') {
      setShowOccupationInput(true);
      setShowSpecialtyInput(false);
    } else if (discipline === 'Other Specialist Physician') {
      setShowOccupationInput(false);
      setShowSpecialtyInput(true);
    } else {
      setShowOccupationInput(false);
      setShowSpecialtyInput(false);
    }
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    const strength = checkPasswordStrength(passwordValue);
    setPasswordStrength(strength);

    if (confirmPassword && passwordValue !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError('');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (confirmPasswordValue !== password) {
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError('');
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = { message: '', class: '' };

    if (password.length < 6) {
      strength.message = 'Password is too short';
      strength.class = 'weak';
      setIsButtonDisabled(true);
    } else if (password.length < 8) {
      strength.message = 'Password is weak';
      strength.class = 'weak';
      setIsButtonDisabled(true);
    } else if (!/[A-Z]/.test(password)) {
      strength.message = 'Password should include at least one uppercase letter';
      strength.class = 'medium';
      setIsButtonDisabled(true);
    } else if (!/[a-z]/.test(password)) {
      strength.message = 'Password should include at least one lowercase letter';
      strength.class = 'medium';
      setIsButtonDisabled(true);
    } else if (!/[0-9]/.test(password)) {
      strength.message = 'Password should include at least one number';
      strength.class = 'medium';
      setIsButtonDisabled(true);
    } else if (!/[!@#$%^&*]/.test(password)) {
      strength.message = 'Password should include at least one special character';
      strength.class = 'medium';
      setIsButtonDisabled(true);
    } else {
      strength.message = 'Password is strong';
      strength.class = 'strong';
      setIsButtonDisabled(false);
    }

    return strength;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isButtonDisabled) return;
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    const dataCredential = new FormData(event.target);
    let discipline = dataCredential.get('discipline') || dataCredential.get('specialty') || dataCredential.get('other-discipline');
    if (discipline === null && occupation) {
      discipline = occupation;
    }
    axios.post(Config.API_URL + "/api/auth/register", {
      firstName: dataCredential.get('firstName'),
      lastName: dataCredential.get('lastName'),
      email: dataCredential.get('email'),
      password: dataCredential.get('password'),
      discipline: discipline,
      title: dataCredential.get('title')
    })
      .then(response => {
        if (response.data.message) {
          alert(response.data.message);
          navigate("/login");
        } else {
          alert(response.data.error);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ width: 90, height: 90, bgcolor: '#96d2b0', border: '3px solid #5a8e70' }}>
            <img src={logo} className={'height-width-5rem'} alt='GPGC Logo'></img>
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 2, color: '#68a783' }}>
            Register
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="given-name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="last-name" />
              </Grid>

              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="discipline-label">Discipline</InputLabel>
                  <Select labelId="discipline-label" id="discipline" value={occupation} label="Discipline" onChange={handleOccupationChange} >
                    <MenuItem value="Medical Student">Medical Student</MenuItem>
                    <MenuItem value="Resident">Resident</MenuItem>
                    <MenuItem value="Family Physician">Family Physician</MenuItem>
                    <MenuItem value="Other Specialist Physician">Other Specialist Physician</MenuItem>
                    <MenuItem value="RN/LPN">RN/LPN</MenuItem>
                    <MenuItem value="Pharmacy Resident">Pharmacy Resident</MenuItem>
                    <MenuItem value="Pharmacist">Pharmacist</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {showSpecialtyInput && (
                <Grid item xs={12}>
                  <TextField fullWidth id="specialty" label="Specialty" name="specialty" />
                </Grid>
              )}

              {showOccupationInput && (
                <Grid item xs={12}>
                  <TextField fullWidth id='other-discipline' label="Other Discipline" name="other-discipline" onChange={(e) => setOccupation(e.target.value)} />
                </Grid>
              )}

              <Grid item xs={12}>
                <TextField required fullWidth name="title" label="Title" id="title" autoComplete="new-title" />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  required 
                  fullWidth 
                  name="password" 
                  label="Password" 
                  type="password" 
                  id="password" 
                  autoComplete="new-password" 
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Typography className={passwordStrength.class} sx={{ mt: 1 }}>
                  {passwordStrength.message}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  required 
                  fullWidth 
                  name="confirm-password" 
                  label="Confirm Password" 
                  type="password" 
                  id="confirm-password" 
                  autoComplete="new-password" 
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {passwordMatchError && (
                  <Typography color="error" sx={{ mt: 1 }}>
                    {passwordMatchError}
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              sx={{ mt: 3, mb: 2 }} 
              disabled={isButtonDisabled}
            >
              Sign Up
            </Button>

            <Grid container className='signUpGrid'>
              <Grid item xs>
                <Link href="/Login" variant="body2" sx={{ color: '#68a783' }}>
                  Already have an Account? | Sign In.
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
