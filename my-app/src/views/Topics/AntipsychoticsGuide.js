// Citations:
// Title: Sign-in template
// Author: Michal Dudak and Samuel Sycamore
// Date: Oct 27, 2022
// Date accessed: Feb 01, 2023
// Code version: 3f88e94
// Availability: https://github.com/mui/material-ui/tree/v5.11.7/docs/data/material/getting-started/templates/sign-in
import * as React from 'react';
import ReactDOM from 'react-dom/client';

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

import App from '../../App';
import LoginIndex from '../Login/LoginIndex';
// Topic pages added based on Issues found on Jira board on Feb 14th 2023
import AntipsychoticsGuide from './AntipsychoticsGuide';
import CognitiveEnhancersGuide from './CognitiveEnhancersGuide';
import InsomniaManagement from './InsomniaManagement';
// Looks like GPGC-84 and GPGC-81 are duplicates for Antidepressants.
import AntidepressantClinicalGuide from './AntidepressantClinicalGuide';
import MoodStabilizersGuide from './MoodStabilizersGuide';
import DeliriumManagement from './DeliriumManagement';
import NeuropsychiatricSymptomsECT from './NeuropsychiatricSymptomsECT';
import Navigation from '../Navigation';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes ,Route }from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/login" element={<LoginIndex/>}/>
      <Route path="/navigation" element={<Navigation/>}/>
      <Route path="/AntipsychoticsGuide" element={<AntipsychoticsGuide/>}/>
      <Route path="/CognitiveEnhancersGuide" element={<CognitiveEnhancersGuide/>}/>
      <Route path="/InsomniaManagement" element={<InsomniaManagement/>}/>
      <Route path="/AntidepressantClinicalGuide" element={<AntidepressantClinicalGuide/>}/>
      <Route path="/MoodStabilizersGuide" element={<MoodStabilizersGuide/>}/>
      <Route path="/DeliriumManagement" element={<DeliriumManagement/>}/>
      <Route path="/NeuropsychiatricSymptomsECT" element={<NeuropsychiatricSymptomsECT/>}/>
    </Routes>
  </BrowserRouter>


);


const theme = createTheme();


// This code is a function called SignIn() that renders a form with an username and password field, and a submit button. When the submit button is clicked, the handleSubmit() function is called which prevents the default action from occuring, creates a FormData object from the currentTarget of the event, and logs an object containing the username and password values to the console.
export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
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
          
          <Typography component="h1" variant="h2">
            Any
          </Typography>
          <Typography component="h1" variant="h5">
            <a href='login'>Antipsychotics Guide</a>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}