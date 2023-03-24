import './cognitiveEnhancersGuide.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color:theme.palette.common.white,
    fontWeight:'bold',
    fontStyle:'italic',
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

function createDataFirstTable(name, action, halfLife, dose, frequency, formSupplied, food) 
{
  return { name, action, halfLife, dose, frequency, formSupplied, food};
}

function createDataSecondTable(name, mci, mildModAlz, severeAlz,mixedAlz,vascular,lbd,ftd,pd,dsd) 
{
  return { name, mci, mildModAlz, severeAlz,mixedAlz,vascular,lbd,ftd,pd,dsd};
}

function createDataThirdTable(contraindications,adverseEffectsAChEI,adverseEffectsMemantine ){
   return{contraindications,adverseEffectsAChEI,adverseEffectsMemantine};
}


const rowsFirstTable = [
  
    createDataFirstTable('Donepezil (Aricept)', "AChEI", "70h", "5mg/5mg/10mg","qAM","5,10/tab, diss tab","Y"),
    createDataFirstTable('Galantamine ER', "AChEI","7-8h","8mg/8mg/24mg","qAM","8,16,24/capsule","Y"),
    createDataFirstTable('Rivastigmine (oral)', "AChEI & BuChEI","1-2h","1.5mg BID/1.5mg BID/6mg BID","BID","1.5,3,4.5,6/capsule,liq","Y"),
    createDataFirstTable('Rivastigmine (oral)', "AChEI & BuChEI","1-2h",'4.8mg/to 9.5mg/9.5mg', "q24hrs","4.6,9.5,13.3/patch","N"),
    createDataFirstTable("Memantine","NMDA blocker","60-100h", "5mg qAM/ ↑ by 5mg weekly/10mg BID","qAM week 1 then BID","5,10/tab","N"),
    
];

const rowsSecondTable = [
  
    createDataSecondTable("Donepezil (Aricept)","N","Y","Y","Y","N","Y","N","Y","N"),
    createDataSecondTable('Galantamine ER', "N","Y","N","Y","N","Y","N","Y","N"),
    createDataSecondTable('Rivastigmine (oral)', "N","Y","N","Y","N","Y","N","Y","N"),
    createDataSecondTable('Rivastigmine (oral)', "N","Y","N","Y","N","Y","N","Y","N"),
    createDataSecondTable("Memantine","N","mod. only","Y","No studies","N","N","N","N","N"),
    
];

const rowsThirdTable = [
  createDataThirdTable("No absolute contraindication","Intolerance 10-20%","Intolerance ~11%"),
  createDataThirdTable("Relative (for AChEI):","Nausea, vomiting","Dizziness"),
  createDataThirdTable("LBBB, Bradycardia","Diarrhea","Constipation"),
  createDataThirdTable("Peptic ulcer disease","Muscle cramps","Headache"),
  createDataThirdTable("COPD (severe)","Insomnia/nightmares","Sedation"),
  createDataThirdTable("Anticholinergic medication","Anorexia","Anxiety"),
  createDataThirdTable("CrCl <15ml/min(memantine)","Weight loss","Hallucinations"),
  createDataThirdTable("","Dizziness",""),
  createDataThirdTable(<i><b><u>Baseline</u></b></i>,"Drooling",""),
  createDataThirdTable("Ensure resting HR > 50","Nasopharyngitis",""),
  createDataThirdTable(<i><b><u>Monitoring</u></b></i>,<i><b><u>How & When</u></b></i>,""),
  createDataThirdTable("Cognition","MMSE (or similar) q ≥ 3-6 months",""),
  createDataThirdTable("Global functioning","IADLs & ADLs",""),
  createDataThirdTable("Target symptoms and goal attainment","Individual (eg. Repetitive questions, baking, etc)",""),
  
];

export default function cognitiveEnhancersGuide() {
  return (
    <>
      <Navigation />
        <div id = "cognitiveEnhancersGuide">
        
          <Accordion id="firstAccordionCognitive">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="firstTopic"><b>COGNITIVE ENHANCERS GUIDE</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

            <TableContainer component={Paper} >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="tableOne" >
                    <TableHead >
                      <TableRow >
                        <StyledTableCell  >Name</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                        <StyledTableCell >Half-life</StyledTableCell>
                        <StyledTableCell >Dose (initial/monthly increment/maint)</StyledTableCell>
                        <StyledTableCell >Frequency</StyledTableCell>
                        <StyledTableCell >mg/form supplied</StyledTableCell>
                        <StyledTableCell >With food?</StyledTableCell>
                        

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsFirstTable.map((rowFirstTable) => (
                        <StyledTableRow key={rowFirstTable.name} >
                          <StyledTableCell component="th" scope="row">
                            {rowFirstTable.name}
                          </StyledTableCell>
                          <StyledTableCell >{rowFirstTable.action}</StyledTableCell>
                          <StyledTableCell >{rowFirstTable.halfLife}</StyledTableCell>
                          <StyledTableCell >{rowFirstTable.dose}</StyledTableCell>
                          <StyledTableCell >{rowFirstTable.frequency}</StyledTableCell>
                          <StyledTableCell >{rowFirstTable.formSupplied}</StyledTableCell>
                          <StyledTableCell >{rowFirstTable.food}</StyledTableCell>
                          
                        </StyledTableRow>
                      ))}
                      
                    </TableBody>
                  </Table>
                </TableContainer><br></br><br></br>
                <p id="firstKey"><b>Key:</b> AChEI: acetylcholinesterase inhibitor; BuChEI: butyrylcholinesterase inhibitor</p>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordionCognitive">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="secondTopic"><b>COGNITIVE ENHANCERS GUIDE cont.</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              
                <TableContainer component={Paper} >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="tableTwo" >
                    <TableHead >
                      <TableRow >
                        <StyledTableCell >Name</StyledTableCell>
                        <StyledTableCell >MCI</StyledTableCell>
                        <StyledTableCell >mild-mod Alz</StyledTableCell>
                        <StyledTableCell >Severe Alz</StyledTableCell>
                        <StyledTableCell >Mixed (Alz+vas)</StyledTableCell>
                        <StyledTableCell >Vascular</StyledTableCell>
                        <StyledTableCell >LBD</StyledTableCell>
                        <StyledTableCell >FTD</StyledTableCell>
                        <StyledTableCell >PD</StyledTableCell>
                        <StyledTableCell >DSD</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsSecondTable.map((rowSecondTable) => (
                        <StyledTableRow key={rowSecondTable.name} >
                          <StyledTableCell component="th" scope="row">
                            {rowSecondTable.name}
                          </StyledTableCell>
                          <StyledTableCell >{rowSecondTable.mci}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.mildModAlz}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.severeAlz}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.mixedAlz}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.vascular}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.lbd}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.ftd}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.pd}</StyledTableCell>
                          <StyledTableCell >{rowSecondTable.dsd}</StyledTableCell>
                          
                        </StyledTableRow>
                      ))}
                      
                    </TableBody>
                  </Table>
                </TableContainer><br></br><br></br>
                <p id="secondKey"><b>Key:</b> DSD: down syndrome dementia; FTD: frontotemporal dementia; LBD: lewy body dementia; MCI: mild cognitive impairment; N: not indicated; PD: parkinson's disease; Y: indicated.</p>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion  id="thirdAccordionCognitive">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="thirdTopic"><b>COGNITIVE ENHANCERS CLINICAL GUIDE</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="tableThree" >
                  <TableHead >
                    <TableRow >
                      <StyledTableCell style={{width:15}} >Contraindications</StyledTableCell>
                      <StyledTableCell style={{width:15}}>Adverse Effects (AChEI)</StyledTableCell>
                      <StyledTableCell >Adverse Effects (Memantine)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsThirdTable.map((rowThirdTable) => (
                      <StyledTableRow key={rowThirdTable.contraindications} >
                        <StyledTableCell component="th" scope="row">
                          {rowThirdTable.contraindications}
                        </StyledTableCell>
                        < StyledTableCell >{rowThirdTable.adverseEffectsAChEI}</StyledTableCell>
                        < StyledTableCell >{rowThirdTable.adverseEffectsMemantine}</StyledTableCell>
                        
                      </StyledTableRow>
                    ))}
                    
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <footer id="footer" > </footer>        
      </div>
      <Footer />
    </>
  );
}

