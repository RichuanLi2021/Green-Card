import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Config from "../config/config";
import logo from "../assets/images/icons/logo/white/WhiteShine256px.svg";
import "./Account.css";
import ROLE_IDS from "../config/constants";



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
  const [open, setOpen] = useState(false);
  const [emailConfirm, setEmailConfirm] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState("");


  useEffect(() => {
    const userUUID = localStorage.getItem('user-uuid');
    if (userUUID) {
      axios.get(`${Config.API_URL}/api/users/${userUUID}`, { withCredentials: true })
        .then(response => {
          if (response.status === 200) {
            setUserData(response.data);
            setIsAdmin(response.data?.User_Roles[0]?.roleID === ROLE_IDS.ADMIN);
          }
        })
        .catch(error => {
          console.error("Failed to fetch user details:", error);
        });
    }
  }, []);

  useEffect(() => {
    setLoading(!userData || !userData.User_Roles);
  }, [userData]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (errorMessage || passwordStrengthMessage || !password) return;

    try {
      const response = await axios.put(`${Config.API_URL}/api/auth/change-password/${userData.uuid}`,
        { newPassword: password },
        { withCredentials: true }
      );

      if (response.data.message) {
        alert('Successfully changed password. Please login again.');
        await axios.post(`${Config.API_URL}/api/auth/logout`, {}, { withCredentials: true });
        localStorage.removeItem('access-token');
        localStorage.removeItem('user-role');
        setTimeout(() => {
          navigate('/login');
        }, 500);
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setErrorMessage('An error occurred while changing the password. Please try again.');
    }

    setErrorMessage('');
  };


  const handleDelete = () => {
    if (emailConfirm === userData.email) {
      const userUUID = localStorage.getItem("user-uuid");
      axios
        .delete(`${Config.API_URL}/api/users/user/${userUUID}`, { withCredentials: true })
        .then((response) => {
          if (response.status === 200) {
            alert("Account successfully deleted");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Failed to delete account:", error);
        });
      setOpen(false);
    } else {
      alert("Email does not match");
    }
  };

  const handleUpdateSubscription = async () => {
    setSubscriptionDialogOpen(false);

    const newSubscriptionStatus = !userData.subscribed;
    const message = newSubscriptionStatus ? "subscribed" : "unsubscribed";

    try {
      const response = await axios.patch(`${Config.API_URL}/api/users/${userData.uuid}/subscription`, {
        newSubscriptionStatus: newSubscriptionStatus,
      }, { withCredentials: true });
      if (response.status === 200) {
        setUserData(prevData => ({
          ...prevData,
          subscribed: newSubscriptionStatus
        }));
        alert(`Successfully ${message}!`);
      }
    } catch (error) {
      console.error("Failed to update subscription:", error);
      alert("Encountered unexpected error");
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);

    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    if (password && newConfirmPassword && password !== newConfirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
    }
  };

  const checkPasswordStrength = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (password && !passwordRegex.test(password)) {
      setPasswordStrengthMessage('Password must be at least 8 characters long and ' +
        'include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).');
    } else {
      setPasswordStrengthMessage('');
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
            Edit Account
          </Typography>

          <div style={{
            color: "black",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
            {!loading ? (
              <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                {[
                  { label: "Email:", data: userData.email },
                  { label: "Discipline:", data: userData.discipline },
                  { label: "First Name:", data: userData.firstName },
                  { label: "Last Name:", data: userData.lastName },
                  { label: "Title:", data: userData.title },
                  !isAdmin && { label: "Subscription Status:", data: userData.subscribed ? "Active" : "Inactive" }
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
                    <Typography variant="body2" component="span" sx={{ textAlign: 'left', marginRight: '2rem' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.0rem' }}>
                      {item.data}
                    </Typography>
                    {!isAdmin && item.label === "Subscription Status:" && (
                      <Button variant="contained" sx={{ width: '32%', marginLeft: '1rem' }} onClick={() => setSubscriptionDialogOpen(true)}>
                        {userData.subscribed ? "Unsubscribe" : "Subscribe"}
                      </Button>
                    )}
                  </Box>
                ))}
              </ul>
            ) : (
              <Typography>
                Loading...
              </Typography>
            )}
          </div>

          {!loading && <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>


              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>
              {passwordStrengthMessage && (
                <Grid item xs={12}>
                  <Typography color="error">{passwordStrengthMessage}</Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </Grid>
              {errorMessage && (
                <Grid item xs={12}>
                  <Typography color="error">{errorMessage}</Typography>
                </Grid>
              )}
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

            {
              !isAdmin && (
                <Button
                  fullWidth
                  variant="text"
                  sx={{
                    mt: 1,
                    mb: 1,
                    color: "#96d2b0", // Change this to match your theme's green color
                    textDecoration: 'underline',
                  }}
                  onClick={() => setOpen(true)}
                >
                  Delete Account
                </Button>
              )}

          </Box>}
        </Box>
      </Container>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To delete your account, please enter your registered email address to confirm.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="emailConfirm"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Discard</Button>
          <Button onClick={handleDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={subscriptionDialogOpen} onClose={() => setSubscriptionDialogOpen(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {"Are you sure you want to " + (userData.subscribed ? "unsubscribe" : "subscribe") + "?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSubscriptionDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpdateSubscription} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>


    </ThemeProvider>
  );
}
