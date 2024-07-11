import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/images/icons/logo/white/WhiteShine256px.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#96d2b0",
    },
  },
});

const ResetPassword = () => {
  const [token] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      console.log(token.get("token"));
      await axios.put(`http://localhost:8887/api/auth/reset-password/${token.get("token")}`, {newPassword: password, token: token.get("token") });
      setSuccess("Password has been reset successfully.");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError("Failed to reset password. Please try again.");
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
            Reset Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              fullWidth
              id="password"
              label="New Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              id="confirmPassword"
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            {error && (
              <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            {success && (
              <Typography variant="body2" color="primary" align="center" sx={{ mt: 2 }}>
                {success}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ResetPassword;

