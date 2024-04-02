import React from "react";
import { Box, Typography, Button } from "@mui/material";
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
      width: "984px", 
      height: "345px", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "auto", 
      overflow: "auto", 
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2, // Reduced padding here as well
          height: "258px",
        }}
      >
        <Avatar
          sx={{
            width: 110, // Slightly smaller avatar
            height: 110, // Slightly smaller avatar
            border: "2px solid #5a8e70",
            bgcolor: "#96d2b0",
            mb: 2, // Reduced margin
          }}
        >
          <img src={logo} alt="GPGC Logo" className={"height-width-5rem"} style={{ height: '5.5rem', width: '5.5rem' }} />
        </Avatar>
        <Typography variant="h4" sx={{ mb: 1, px: 5, ...commonTextStyles }}>THE GREEN CARD</Typography>
        <Typography variant="h6" sx={{ mb: 1, ...commonTextStyles }}>GERIATRIC PSYCHOTROPIC DRUG REFERENCE CARD</Typography>
        <Typography variant="subtitle1" sx={{ mb: 1, ...commonTextStyles }}>
          Kathleen Singh, MD, FRCPC; Terry Chisholm, MD, FRCPC; David Gardner,
          PharmD, MSc
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 2, ...commonTextStyles }}>
          Dept of Psychiatry, Dalhousie University, Halifax, CANADA
        </Typography>
        <div>
          <Button variant="contained" onClick={handleRegister} sx={buttonStyle}>Register</Button>
          <Button variant="contained" onClick={handleLogin} sx={buttonStyle}>Login</Button>
        </div>
      </Box>
    </Box>
  );
};

const commonTextStyles = {
  fontWeight: "bold",
  backgroundColor: "#355944",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const buttonStyle = {
  fontWeight: "bold",
  marginRight: "8px",
  backgroundColor: "#8ab89d",
  color: "#385143",
  '&:hover': {
    backgroundColor: "#96d2b0",
  },
};

export default LandingPage;
