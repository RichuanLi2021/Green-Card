
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Navigation from '../../Navigation/navigation';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Footer from '../../Footer/Footer';
import { Box } from '@mui/system';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color:theme.palette.common.white,
    fontWeight:'bold',
    textDecorationLine:'underline',
    
  
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function NPSManagement() {
    
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/NPSManagement')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  if(data.length > 0)
  {
  
  return(
      
      
    <><div id="npsmanagement">
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <Box
          sx={{
            marginTop: 3,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Typography variant="h3" id="topicHeader"> NPS Management & ECT & Psychoactive Meds</Typography>
        </Box>
        <Accordion id="firstAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>Nonpharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>

                <li>Individualize approach to patient </li>
                <li>Examine ABCs of behavior and identify the issue</li>
                <li>General: comforting presence/physical contact,distraction, backing away, reminiscence/sensory/relaxation therapy</li>
                <li>Optimize engagement in environment, decrease under/overstimulation, establish routine, regular exercise & recreation</li>
                <li> Resistance to care: personalize the experience (ie: offering choices), bed baths</li>


            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography ><b>Pharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>


                <li>Only use if clinically signficant distress/agitation/aggression, when benefits{'>'}harm, and non pharmacological approach failed</li>
                <li>Psychosis: atypical antipsychotic*</li>
                <li>No psychosis: SSRI, trazadone, or atypical antipsychotic*</li>
                <li>Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy</li>
                <li>Pharmacological approach generally not helpful for primary wandering or vocalizing</li>
                <li>Treatment should be evaluated for tapering or discontinuation every 3-6 months</li>
                <li>See antipsychotic table for additional information</li>


              <p><b>Key:</b> ABC: antecedent, behavior, consequence. *Recommended atypical antipsychotics include <br></br>
                risperidone, olanzapine, and aripiprazole according to the 4th Canadian Consensus Conference on <br></br>
                the Diagnosis and Treatment of Dementia</p>

            </Typography>
          </AccordionDetails>
        </Accordion>

        
      </div>
      <Footer /></>);


}
};
