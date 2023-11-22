import React from 'react';
import { Box, Container, Typography, Button, SvgIcon } from "@mui/material";
import { ReactComponent as GreenShine1024pxIcon } from '../assets/images/icons/logo/green/GreenShine1024px.svg';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
        py: 4, 
      }}
    >
      {/* publicContent */}
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 'bold'}} 
        >
          THE GREEN CARD
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 'bold', mb: 2}} 
        >
          GERIATRIC PSYCHOTROPIC DRUG REFERENCE CARD
        </Typography>


        <Typography
          variant="subtitle4"
          component="h3"
          sx={{ fontWeight: 'bold', mb: 0}} 
        >
          Kathleen Singh, MD, FRCPC; Terry Chisholm, MD, FRCPC; David Gardner, PharmD, MSc
        </Typography>


        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Dept of Psychiatry, Dalhousie University, Halifax, CANADA
        </Typography>


        <Typography 
          variant="body1" 
          sx={{ mb: 4 }}
        >
          Warning: This card is meant to support rather than guide management decisions in older adults. Information is not comprehensive and errors may occur. Drug doses and other management recommendations may not reflect manufacturers’ recommendation but are based on clinical literature and expert opinion. Listed maximum doses are meant for physically healthy older adults, and in general not recommended for frail patients. The Green Card should not supersede clinical judgment and is not applicable in all circumstances.
        </Typography>

        <SvgIcon 
          component={GreenShine1024pxIcon}
          inheritViewBox
          sx={{ fontSize: 60, mb: 3}} // Adjust marginBottom (mb) as needed
        />

        <Typography 
          variant="subtitle2" 
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 1}}
        >
          Login For more Drug Information and The Usage. 
        </Typography>

        {/*Guide visitors to register or login*/}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleRegister} 
          style={{ marginRight: '1rem' }}
        >
          Register Now
        </Button>

        <Button 
          variant="outlined" 
          color="primary" 
          onClick={handleLogin}
        >
          User Login
        </Button>
      </Container>
    </Box>
  );
};

export default LandingPage;
