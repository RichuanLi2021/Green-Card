import * as React from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../assets/images/icons/logo/white/WhiteShine256px.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from '@mui/material/Link';

const theme = createTheme({
  palette: {
    primary: {
      main: "#96d2b0",
    },
  },
});

const ForgotPassword = () => {
  const [resetLink, setResetLink] = React.useState("");
  const [setError] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
  
    try {
      const response = await axios.put(`http://localhost:8887/api/auth/forgot-password`, { email }, { withCredentials: true });
      
      const { token } = response.data; // Assuming your backend sends back 'token'
  
      if (token) {
        //const link = `${window.location.origin}/reset-password?token=${token}`;
        //setResetLink(link);//Chris - This generates reset link
      } else {
        setError("Failed to receive reset token from server.");
      }
    } catch (error) {
      setError("Failed to send reset link. Please try again.");
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 90, height: 90, bgcolor: '#96d2b0', border: '3px solid #5a8e70' }}>
            <img src={logo} className={'height-width-5rem'} alt='GPGC Logo'></img>
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ mt: 3, mb: 2, color: "#68a783" }}
          >
            Change Password
          </Typography>
          {resetLink ? (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                Here is your password reset link:
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={resetLink}
                onClick={(e) => e.target.select()}
                readOnly
                sx={{ mt: 1 }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => setResetLink("")}
              >
                Send another link
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Your Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                }}
              >
                Send me a link
              </Button>
              <Grid container className='signUpGrid'>
                <Grid item xs>
                  <Link href="/register" variant="body2" sx={{color:'#68a783'}}>Don't have an account? | Sign Up</Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2" sx={{color:'#68a783'}}>Already Have An Account? | Sign In</Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
