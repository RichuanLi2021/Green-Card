import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
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
        flexDirection: "row", // Updated to row
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
      </Box>

      {/* Right Content */}
      <Container maxWidth="lg" sx={{ textAlign: "center", flex: "1", ml: 0 }}>
        {" "}
        {/* Add outer margin */}
        <Box
          sx={{
            borderRadius: "8px",
            borderColor: "#96d2b0",
            backgroundColor: "#96d2b0",
            p: 8,
          }}
        >
          {" "}
          {/* Add padding and border */}
          <Typography variant="body1" sx={{ mb: 4, color: "#355944" }}>
            Warning: This card is meant to support rather than guide management
            decisions in older adults. Information is not comprehensive and
            errors may occur. Drug doses and other management recommendations
            may not reflect manufacturers’ recommendation but are based on
            clinical literature and expert opinion. Listed maximum doses are
            meant for physically healthy older adults, and in general not
            recommended for frail patients. The Green Card should not supersede
            clinical judgment and is not applicable in all circumstances.
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
          {/* Guide visitors to register or login */}
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
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
