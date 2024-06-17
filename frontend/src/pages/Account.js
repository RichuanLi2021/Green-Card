import React, { useEffect, useState} from "react";
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
import "./Account.css";



const theme = createTheme({
  palette: {
    primary: {
      main: "#96d2b0",
    },
  },
});



export default function SignIn() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userUUID = localStorage.getItem('user-uuid');
    const userAccess = localStorage.getItem('user-role');
    console.log('User UUID:', userUUID); // Log and test user UUID
    console.log('Access: ', userAccess); // log and test user access
    if (userUUID) {
      axios.get(`${Config.API_URL}/api/users/${userUUID}`, { withCredentials: true })
        .then(response => {
          if (response.status === 200) {
            setUserData(response.data);
          }
        })
        .catch(error => {
          console.error("Failed to fetch user details:", error);
        });
    }
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataCredential = new FormData(event.target);

    axios.post(Config.API_URL + "/api/auth/register", {
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
            Edit Account
          </Typography>
                    
          <Typography
          component="div"
          sx={{
            color: "black",
            textAlign: "center",
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
          }}
          >
          {userData && userData.User_Roles ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {[
              { label: "Email:", data: userData.email },
              { label: "Discipline:", data: userData.discipline },
              { label: "First Name:", data: userData.firstName },
              { label: "Last Name:", data: userData.lastName },
              {label: "Title:", data: userData.title}
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px' }}>
                <Typography variant="body2" component="span" sx={{ textAlign: 'left', width: '45%' }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" component="span" sx={{ textAlign: 'right', width: '55%', fontWeight: 'bold', fontSize: '1.0rem' }}>
                  {item.data}
                </Typography>
              </div>
            ))}
          </div>

          ) : (
          <Typography>
            Loading...
          </Typography>
          )}          
          
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField fullWidth id="email" label="New Email Address" name="email" autoComplete="email" />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Change Password"
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
              Submit Changes
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
