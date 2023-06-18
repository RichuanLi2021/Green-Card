import './InsomniaManagement.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';

import Data from "../searchBar/Data.json";

export default function InsomniaManagement() {
  

  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
      <br></br>
        <div id = "insomniaManagement">
        
          <Accordion id="firstAccordionManagement">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="mainTopic"><b>INSOMNIA MANAGEMENT</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="mainText">

            <li>First line treatment: CBT-i (www.mysleepwell.ca) </li>
            <li>2nd line treatment: sedatives (if CBTi failure)</li>
            <li><b>NNT with a sedative-hypnotic for improved sleep = 13, NNH = 6</b></li>
            
            
            </Typography>
          </AccordionDetails>
        </Accordion>
                
      </div>
      <Footer />
    </>
  );
}










/*import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();


// This code is a function called SignIn() that renders a form with an username and password field, and a submit button. When the submit button is clicked, the handleSubmit() function is called which prevents the default action from occuring, creates a FormData object from the currentTarget of the event, and logs an object containing the username and password values to the console.
export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3"> Insomnia Management</Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>

  );

}*/
