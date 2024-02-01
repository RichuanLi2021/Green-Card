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
        display: "flex",
        flexDirection: "column", // Updated to column
        justifyContent: "space-between", // Adjusted to space between
        alignItems: "center",
        minHeight: "100vh",
        py: 4,
        px: 4, // Add padding
      }}
    >
      {/* Left Content */}

      <Box
        sx={{
          textAlign: "center",
          flex: ".8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        {/* Adjusted flex value and added display and alignItems */}
        <Avatar
          sx={{
            width: 90,
            height: 90,
            border: "3px solid #5a8e70",
            bgcolor: "#96d2b0",
            mb: 3,
          }}
        >
          <img src={logo} className={"height-width-5rem"} alt="GPGC Logo"></img>
        </Avatar>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#355944",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          THE GREEN CARD
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#355944",
            mb: 2,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GERIATRIC PSYCHOTROPIC DRUG REFERENCE CARD
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mt: 1,
            backgroundColor: "#355944",
            mb: 2,
            fontSize: 18,
            px: 7,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Kathleen Singh, MD, FRCPC; Terry Chisholm, MD, FRCPC; David Gardner,
          PharmD, MSc
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            backgroundColor: "#355944",
            fontSize: 16,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dept of Psychiatry, Dalhousie University, Halifax, CANADA
        </Typography>
        <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mt: 4,
              fontSize: "14px",
              mb: 2,
              color: "#355944",
            }}
          >
            Login For more Drug Information and The Usage.
          </Typography>
          <div>
            <Button
              variant="contained"
              onClick={handleRegister}
              style={{
                fontWeight: "bold",
                marginRight: "1rem",
                backgroundColor: "#8ab89d",
                color: "#385143",
                marginTop: "10px",
              }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              style={{
                fontWeight: "bold",
                marginRight: "1rem",
                color: "#385143",
                borderColor: "lightBlue",
                marginTop: "10px",
                backgroundColor: "#8ab89d",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          

      </Box>

    
    </Box>
  );
};

export default LandingPage;
