
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import { Box } from '@mui/system';
import "./NPSManagement.css";
import Search from '../../Search/Search';
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  if(data.length > 0)
  {
  
  return(
      
      
    <><div id="npsmanagement">
        <Navigation />
        <Search onSearch={handleSearch}></Search>
        <Box
          sx={{
            marginTop: 3,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Typography id="topicHeader">NPS Management</Typography>
        </Box>
        <Accordion id="firstAccordion" className='nps-accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>Nonpharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left', padding: '12px' }}>

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
            <Typography sx={{ textAlign: 'left', padding: '12px' }}>


                <li>Only use if clinically signficant distress/agitation/aggression, when benefits{'>'}harm, and non pharmacological approach failed</li>
                <li>Psychosis: atypical antipsychotic*</li>
                <li>No psychosis: SSRI, trazadone, or atypical antipsychotic*</li>
                <li>Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy</li>
                <li>Pharmacological approach generally not helpful for primary wandering or vocalizing</li>
                <li>Treatment should be evaluated for tapering or discontinuation every 3-6 months</li>
                <li>See antipsychotic table for additional information</li>

                <div className="keynote-div">
                  <p className='keynote'><b>Key:</b> ABC: antecedent, behavior, consequence. *Recommended atypical antipsychotics include <br></br>
                  risperidone, olanzapine, and aripiprazole according to the 4th Canadian Consensus Conference on <br></br>
                  the Diagnosis and Treatment of Dementia</p>
                </div>

            </Typography>
          </AccordionDetails>
        </Accordion>

        
      </div>
      <Footer /></>);


}
};
