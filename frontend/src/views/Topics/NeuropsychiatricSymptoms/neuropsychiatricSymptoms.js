import './neuropsychiatricSymptoms.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Navigation from '../../Navigation/navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Footer from '../../Footer/Footer';
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

function createData(medication, recommendedAction) 
{
  return { medication, recommendedAction};
}


const rows = [
  
  createData('Anticonvulsants', "Discontinue if possible or at least hold prior to ECT"),
  createData('Benzodiazepines*', "If unable to stop, hold dose x 24 hrs before ECT (↑seizure threshold).Can use flumazenil if not possible to hold or stop"),
  createData('Bupropion', "Use with caution (↓ seizure threshold)"),
  createData('ChEIs', "OK to continue"),
  createData('Clozapine', "Use with caution (↓ seizure threshold, ↑ risk of prolonged seizure)"),
  createData('Levodopa', "Reduce dose and monitor closely (↑ risk of side effects)"),
  createData('Lithium', "Hold x 24 hrs prior to ECT (↑ risk of cognitive deficits, delirium, spontaneous seizure). Reassess if emergent delirium post ECT."),  
  createData('MAOIs', "OK to continue"),
  createData('Other Antidepressents', "OK to continue"), 
  createData('Other Antipsychotics', "OK to continue"),
  createData('Zopiclone', "OK if needed"),   
  
];

export default function neuropsychiatricSymptoms() {
    return(
      
      
    <><div id="neuropsychiatricSymptoms">
        <Navigation />

        <h1 id="head">NEUROPSYCHIATRIC SYMPTOMS OF DEMENTIA (NPS) MANAGEMENT</h1>
        <Accordion id="firstAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>Nonpharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Individualize approach to patient </li>
                <li>Examine ABCs of behavior and identify the issue</li>
                <li>General: comforting presence/physical contact,distraction, backing away, reminiscence/sensory/relaxation therapy</li>
                <li>Optimize engagement in environment, decrease under/overstimulation, establish routine, regular exercise & recreation</li>
                <li> Resistance to care: personalize the experience (ie: offering choices), bed baths</li>
              </ul>

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>Pharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              <ul>
                <li>Only use if clinically signficant distress/agitation/aggression, when benefits{'>'}harm, and non pharmacological approach failed</li>
                <li>Psychosis: atypical antipsychotic*</li>
                <li>No psychosis: SSRI, trazadone, or atypical antipsychotic*</li>
                <li>Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy</li>
                <li>Pharmacological approach generally not helpful for primary wandering or vocalizing</li>
                <li>Treatment should be evaluated for tapering or discontinuation every 3-6 months</li>
                <li>See antipsychotic table for additional information</li>
              </ul>

              <p><b>Key:</b> ABC: antecedent, behavior, consequence. *Recommended atypical antipsychotics include <br></br>
                risperidone, olanzapine, and aripiprazole according to the 4th Canadian Consensus Conference on <br></br>
                the Diagnosis and Treatment of Dementia</p>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion id="thirdAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>ECT & PSYCHOACTIVE MEDICATIONS</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Medication</StyledTableCell>
                      <StyledTableCell>Recommended Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.medication}>
                        <StyledTableCell component="th" scope="row">
                          {row.medication}
                        </StyledTableCell>
                        <StyledTableCell>{row.recommendedAction}</StyledTableCell>

                      </StyledTableRow>
                    ))}

                  </TableBody>
                </Table>
              </TableContainer><br></br><br></br>
              <p><b>Key:</b> ChEIs:cholinesterase inhibitors; MAOIs: monoamine oxidase inhibitors; *If highly tolerant (and <br></br>high doses), do not taper abruptly due to risk of prolonged seizure </p>


            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
      <Footer /></>);


}