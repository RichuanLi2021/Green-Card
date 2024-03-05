import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import Config from "../config/config";
import Link from '@mui/material/Link';


const theme = createTheme({
  palette: {
    primary: {
      main: "#96d2b0",
    },
  },
});

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataCredential = new FormData(event.target);

    axios
      .post(Config.API_URL + "/api/auth/register", {
        email: dataCredential.get("email"),
        password: dataCredential.get("password"),
        discipline:
          dataCredential.get("discipline") ||
          dataCredential.get("specialty") ||
          dataCredential.get("other-discipline"),
      })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
          navigate("/login");
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => console.log(error));
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField fullWidth id="email" label="Your Email Address" name="email" autoComplete="email" />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
              Reset Password.
            </Button>
            <Grid container className='signUpGrid'>
              <Grid item xs>
                <Link href="/register" variant="body2" sx={{color:'#68a783'}}>Don't have an account? | Sign Up</Link>
              </Grid>
              
              <Grid item>
                <Link href="/Login" variant="body2" sx={{color:'#68a783'}}>Already Have An Account? | Sign In</Link>
              </Grid>
              
        </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
/* */
export default ForgotPassword;
