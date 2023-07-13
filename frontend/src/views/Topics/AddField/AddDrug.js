import * as React from 'react';

import Navigation from '../../Navigation/navigation';

import Typography from '@mui/material/Typography';
import { useState } from 'react';

import submitDrug from './AddDrugBackend';
import '../../FeedbackForm/FeedbackForm.css';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#96d2b0',
      },
    },
  });

export default function AddDrug() {

  const [drugName, setdrugName] = useState('');
  const [doseEquiv, setdoseEuiv] = useState('');
  const [timeToPeakInPlasma, settimeToPeakInPlasma] = useState('');
  const [halfLife, sethalfLife] = useState('');
  const [avgDoseRange, setavgDoseRange] = useState('');
  const [mgFormsupplied, setmgFormsupplied] = useState('');

  const handleDrugName = (event) => {
    setdrugName(event.target.value);
  };

  const handleDoseEquiv = (event) => {
    setdoseEuiv(event.target.value);
  };

  const handleTime = (event) => {
    settimeToPeakInPlasma(event.target.value);
  };

  const handleHalfLife = (event) => {
    sethalfLife(event.target.value);
  };

  const handleAvgDoseRange = (event) => {
    setavgDoseRange(event.target.value);
  };

  const handleMgFormSupplied = (event) => {
    setmgFormsupplied(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ drugName, doseEquiv, timeToPeakInPlasma, avgDoseRange, mgFormsupplied });
    submitDrug(drugName, doseEquiv, timeToPeakInPlasma, avgDoseRange, mgFormsupplied)
      .then((data) => {
        window.alert('Drug was added Successfully!');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert('Failed to submit the Drug!');
      });
  };

return (
    <>
    
    <Navigation />
        
       
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
        <ThemeProvider theme={theme}>
      <div className="form-container-pg">
        <div className="form-header">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" className="title">
              Add New Drug
            </Typography>
            
          </Box>
        </div>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ m: 1.5 }}>
            <TextField
              label="Drug Name"
              variant="filled"
              value={drugName}
              onChange={handleDrugName}
              fullWidth
              
              
              required
            />
            
          </Box>
          <Box sx={{ m: 1.5 }}>
            <TextField
              label="Dose Equiv."
              variant="filled"
              value={doseEquiv}
              onChange={handleDoseEquiv}
              
              fullWidth
              type="text"
              
              
              required
            />
          </Box>
          <Box sx={{ m: 1.5 }}>
            <TextField
              label="Time to peak in plasma"
              variant="filled"
              value={timeToPeakInPlasma}
              onChange={handleTime}
              
              fullWidth
              multiline
              
              
              required
            />
          </Box>

          <Box sx={{ m: 1.5 }}>
            <TextField
              label="Half-life"
              variant="filled"
              value={halfLife}
              onChange={handleHalfLife}
              name="halfLife"
              fullWidth
              multiline
              
              
              required
            />
          </Box>

          <Box sx={{ m: 1.5 }}>
            <TextField
              label="Avg Dose range (mg/day)"
              variant="filled"
              value={avgDoseRange}
              onChange={handleAvgDoseRange}
              name="avgDoseRange"
              fullWidth
              multiline
              
              
              required
            />
          </Box>

          <Box sx={{ m: 1.5 }}>
            <TextField
              label="mg Form supplied"
              variant="filled"
              value={mgFormsupplied}
              onChange={handleMgFormSupplied}
              name="mgFormsupplied"
              fullWidth
              multiline
              
              
              required
            />
          </Box>
          
          
          
          
          <Box sx={{ m: 1.5, display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              className="submit-button"
              color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </ThemeProvider>
    </div>
    </>
)
};