import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();


// This code is a function called SignIn() that renders a form with an username and password field, and a submit button. When the submit button is clicked, the handleSubmit() function is called which prevents the default action from occuring, creates a FormData object from the currentTarget of the event, and logs an object containing the username and password values to the console.
export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
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
          <Typography variant="h3"> Insomnia Management</Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>

  );

}
