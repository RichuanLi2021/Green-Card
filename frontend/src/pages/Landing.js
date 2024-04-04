import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/images/icons/logo/white/WhiteShine256px.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Box
      className="landing-content"
      sx={{
        maxWidth: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          width: 110,
          height: 110,
          border: "2px solid #5a8e70",
          bgcolor: "#96d2b0",
          marginBottom: "1rem",
        }}
      >
        <img
          src={logo}
          alt="GPGC Logo"
          className={"height-width-5rem"}
          style={{ height: "5.5rem", width: "5.5rem" }}
        />
      </Avatar>
      <Typography variant="h4" gutterBottom align="center" sx={{ ...commonTextStyles }}>THE GREEN CARD</Typography>
      <Typography variant="h6" gutterBottom align="center" sx={{ ...commonTextStyles }}>GERIATRIC PSYCHOTROPIC DRUG REFERENCE CARD</Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ ...commonTextStyles }}>
        Kathleen Singh, MD, FRCPC; Terry Chisholm, MD, FRCPC; David Gardner,
        PharmD, MSc
      </Typography>
      <Typography variant="subtitle2" gutterBottom align="center" sx={{ ...commonTextStyles }}>
        Dept of Psychiatry, Dalhousie University, Halifax, CANADA
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" fullWidth onClick={handleRegister} sx={buttonStyle}>Register</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" fullWidth onClick={handleLogin} sx={buttonStyle}>Login</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const commonTextStyles = {
  fontWeight: "bold",
  backgroundColor: "#355944",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "0.5rem",
};

const buttonStyle = {
  fontWeight: "bold",
  backgroundColor: "#8ab89d",
  color: "#385143",
  '&:hover': {
    backgroundColor: "#96d2b0",
  },
};

export default LandingPage;
