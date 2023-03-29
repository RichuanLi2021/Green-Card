
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import './DeliriumManagement.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#96D2B0',
    color: 'whitesmoke',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontSize: '1.1rem',
    padding: '1rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
    padding: '1rem',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f3f3f3',
  },
}));

function createData(high, medium, low) 
{
  return { high, medium, low};
}


const rows = [
  
  createData('Amitriptyline (Elavil)', "Amantadine (Symmetrel)", "Alprazolam (Xanax)"),
  createData('Atropine (Sal-Tropine)', "Carbamazepine (Tegretol)", "Aripiprazole (Abilify)"),
  createData('Benztropine (Cogentin)', "Cyclobenzaprine (Flexeril)", "Asenapine (Saphris)"),
  createData('Chlorpromazine (Thorazine)', "Cyproheptadine (Periactin)", "Bupropion (Wellbutrin)"),
  createData('Clomipramine (Anafranil)', "Loxapine (Loxitane)", "Cetirizine (Reactine)"),
  createData('Clozapine (Clozaril)', "Meperidone (Demerol)", "Codeine"),
  createData('Desipramine (Norpramin)', "Methotrimeprazine (Levoprome)", "Colchicine (Odan)"),  
  createData('Dimenhydrinate (Gravol', "Oxcarbazepine (Trileptal)", "Diazepam (Valium)"),
  createData('Doxepin (Sinequan)', "Pimozide (Orap)", "Digoxin"), 
  createData('Fesoterodine (Toviaz)', "", "Fentanyl"),
  createData('Hydroxyzine (Atarax)', "", "Furosemide (Lasix)"),   
  createData('Imipramine (Tofranil)', "", "Fluvoxamine (Luvox)"),   
  createData('Methocarbamol (Robaxin)', "", "Hydralazine"),   
  createData('Nortriptyline (Pamelor)', "", "Haloperidol (Haldol)"),   
  createData('Olanzapine (Zyprexa)', "", "Hydrocortisone"),  
  createData('Oxybutynin (Ditropan)', "", "Loperamide (Imodium)"),   
  createData('Paroxetine (Paxil)', "", "Loratadine (Claritin)"),   
  createData('Perphenazine (Trilafon)', "", "Metoprolol"),   
  createData('Quetiapine (Seroquel)', "", "Morphine"),   
  createData('Solifenacin (Vesicare)', "", "Nifedipine (Adalat)"),   
  createData('Thioridazine (Mellaril)', "", "Paliperidone (Invega)"),   
  createData('Tolterodine (Detrol)', "", "Prednisone"),   
  createData('Trifluoperazine (Stelazine)', "", "Ranitidine (Zantac)"),   
  createData('Trihyxyphenidyl (Artane)', "", "Trazodone (Desyrel)"), 
  createData('Trospium (Sanctura)', "", "Venlafaxine (Effexor)"),  
  createData('', "", "Warfarin")
];




export default function DeliriumManagement() {
    return(  
    <div id = "DeliriumManagement">
              <AppBar position="relative" style={{background: '#96D2B0'}}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h5" color="black" noWrap>
                    Geriatric Psychiatry Green Card
                </Typography>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
      
        <h1 id ="head">Delirium Management</h1>
        <h2 id = "head" >Treating underlying cause is mainstay of treatment</h2>
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
                <li>Reduce noise</li>
                <li>Orient the patient using clocks, calendars, light/dark environment, verbal cues (esp. by family)</li>
                <li>Correct sensory deficits (clean eyeglasses, working hearing aids)</li>
                <li>Increase patient's sense of control</li>
                <li>Minimize room/environment changes</li>
                <li>Avoid restraints if possible</li>
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
                <li>Only use if clinically signficant distress/agitation/aggression, when benefits>harm, and non pharmacological approach failed</li>
                <li>Antipsychotics are treatment of choice (other than etoh withdrawal delirium)</li>
                <li>Aim for monotherapy, lowest effective dose, and tapering ASAP</li>
                <li>Haloperidol not recommended if pre-existing Parkinson's or LBD</li>
                <li>Consider 4pm & 8pm dosing rather than morning dose to optimize sleep wake cycle</li>
                <li>See antipsychotic table for dosing recommendations</li>
              </ul>
              
          <p><b> Key:</b> LBD: Lewy body dementiaHighHigh</p>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion id="thirdAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>Anticholinergic Activity</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper} >
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="table" >
                  <TableHead>
                    <TableRow >
                      <StyledTableCell >High</StyledTableCell>
                      <StyledTableCell >Medium</StyledTableCell>
                      <StyledTableCell >Low</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.high} >
                        <StyledTableCell component="th" scope="row">
                          {row.high}
                        </StyledTableCell>
                        <StyledTableCell >{row.medium}</StyledTableCell>
                        <StyledTableCell >{row.low}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                    
                  </TableBody>
                </Table>
              </TableContainer><br></br><br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);


}