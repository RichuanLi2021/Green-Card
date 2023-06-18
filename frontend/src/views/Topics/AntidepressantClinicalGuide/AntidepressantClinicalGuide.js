import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AntidepressantClinicalGuide.css'
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../../Footer/Footer';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 50,
      padding: 20,
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
    },
    body1: {
      fontSize: 18,
    },
    li: {
      fontSize: 15,
    }
  },
});


export default function AntidepressantClinical() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3"> Antidepressant Clinical Guide</Typography>
          
        </Box>
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ background: '#96D2B0' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }} variant="body1">
                  Common DDIs with Psychotropics
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <li> Antipsychotic + L-dopa = worsening of Parkinsons, worsening of psychosis  </li>
                  <li> ChEI + anticholinergics = less therapeutic benefit </li>
                  <li> ChEI + beta blocker = bradycardia </li>
                  <li> Lithium + NSAIDs = ↑risk of toxicity </li>
                  <li> Lithium + certain diuretics = ↑risk of toxicity </li>
                  <li> SSRI + diuretics = hyponatremia </li>
                  <li> SSRI + antiplatelet = bleeding </li>
                  <li> SSRI + NSAIDs = bleeding </li>
                  <li> SSRI + warfarin = bleeding </li>
                  <li> SSRI + MAOI = serotonin syndrome </li>

              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ background: '#96D2B0' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold'  }}>Antidepressant Safety Concerns</Typography>
              </AccordionSummary>
              <AccordionDetails>
            
                  <li> Cognitive impairment Drug-drug interactions  </li>
                  <li> Falls </li>
                  <li> Fractures </li>
                  <li> GI bleed </li>
                  <li> Hyponatremia/SIADH </li>
                  <li> QTc prolongation (escitalopram, citalopram, TCAs) </li>
                  <li> Seizures (bupropion, TCAs) </li>

              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ background: '#96D2B0' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold'  }}>
                  Antipsychotic Safety Concerns
                </Typography>
              </AccordionSummary>
              <AccordionDetails>

                  <li> ↑ risk of EPS & TD Akathisia  </li>
                  <li> Cognitive impairment Dyslipidemia </li>
                  <li> Falls & fractures Hyperglycemia Mortality (NNH=87) QTc prolongation Stroke (NNH=53) Weight gain </li>

              </AccordionDetails>
            </Accordion>
          </div>
      <Footer />
    </ThemeProvider>


  );
}
