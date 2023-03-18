import './antipsychoticsGuide.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
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
          
          function createData(name,dose,halfLife,frequency,tabStrength,nps,pp,augmentMDE,psychosisMDE,delirium,eoSCZ,loSCZ) 
          {
            return { name, dose, halfLife, frequency,tabStrength, nps, pp, augmentMDE, psychosisMDE, delirium,eoSCZ,loSCZ };
          }
          
          
          const rows = [
            createData(<i><b><u>Novel</u></b></i>),
            createData('aripiprazole(Abilify)', "7.5", "75-94h^", "od", "2,5,10,15,20,30/tab", "5-10mg", "?", "2-15mg","2-15mg","NR", "2-20mg","2-10mg"),
            createData('clozapine(Clozanil)', "100", "14h", "hs-tid", "20,50,100,200/tab", "NR", "6.25-50mg", "NR","NR","NR", "25-400mg","25-200mg"),
            createData('lurasidone(Latuda)', "n/a", "18h", "od", "40,80,120/tab", "NR", "NR", "NR","?(20-80mg)","NR", "?(20-80mg)","?(20-40mg)"),
            createData('olanzapine(zyprexa)', "5", "21-54h", "hs", "2.5,5,7.5,10,15,20/inj,tab,diss tab", "2.5-15mg", "NR", "?(2.5-10mg)","2.5-20mg","1.25-15mg", "2.5-20mg","2.5-15mg"),
            createData('paliperidone(invega)', "2", "23h", "hs", "3,6,9/er tabs", "NR", "NR", "NR","?","NR", "3-8mg","3-4mg"),
            createData('quetiapine(Seroquel)', "150", "6-12h^", "hs-bid", "20,50,100,150,200,300,400/ir&er tabs", "?(12.5-200mg)", "?(12.5-400mg)**", "25-300mg","25-400mg","12.5-200mg", "25-500mg","25-300mg"),
            createData('risperidone(Risperdal)', '1.5', '20-24h^', 'hs-bid', '0.25,0.5,1,2,3,4/tab,diss tab,liq', "0.25-2mg**", "NR", "?(0.5-2mg)","?(0.5-2mg)","0.25-3mg","0.5-4mg","0.5-2mg"),  
            createData(<i><b><u>Conventional</u></b></i>),
            createData('haloperidol(Haldol)', "2.5", "20h", "hs-bid", "0.5,1,2,5,10,20/inj,tab,liq", "NR", "NR", "NR","NR","0.25-2mg**", "0.5-5mg","?(0.5-2mg)"),
            createData('loxapine(Loxapac)', '15', '5-19h^', 'hs-tid', '2.5,5,10,25,50/inj,tab,liq', "?(2.5-20mg)", "NR", "NR","NR","5-100mg","2-100mg","?(2-50mg)"),  
            createData(<i><b><u>Long acting injectables (depots)</u></b></i>),
            createData('Often used for chronic schizophrenia and other psychotic disorders'),
            
          ];
          
          export default function AntipsychoticsGuide() {
            return (
              <><AppBar position="relative" style={{ background: '#96D2B0' }}>
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
              <div id="antipsychoticsGuide">
                  <h1 id="heading">Antipsychotics Guide</h1>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell align="right">Approx equiv.dose</StyledTableCell>
                          <StyledTableCell align="right">Half-life&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">Frequency&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">Tab Strength/ Form Supplied&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">NPS&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">PP&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">MDE(AD augment)&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">MDE(w.psychosis)&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">Delirium&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">EO-SCZ&nbsp;</StyledTableCell>
                          <StyledTableCell align="right">LO-SCZ&nbsp;</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.dose}</StyledTableCell>
                            <StyledTableCell align="right">{row.halfLife}</StyledTableCell>
                            <StyledTableCell align="right">{row.frequency}</StyledTableCell>
                            <StyledTableCell align="right">{row.tabStrength}</StyledTableCell>
                            <StyledTableCell align="right">{row.nps}</StyledTableCell>
                            <StyledTableCell align="right">{row.pp}</StyledTableCell>
                            <StyledTableCell align="right">{row.augmentMDE}</StyledTableCell>
                            <StyledTableCell align="right">{row.psychosisMDE}</StyledTableCell>
                            <StyledTableCell align="right">{row.delirium}</StyledTableCell>
                            <StyledTableCell align="right">{row.eoSCZ}</StyledTableCell>
                            <StyledTableCell align="right">{row.loSCZ}</StyledTableCell>
                          </StyledTableRow>
                        ))}

                      </TableBody>
                    </Table>
                  </TableContainer>
                  <footer id="footer"> <b>Key:</b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites; **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data. <b>NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical literature and opinion. Half lives are estimates based on adult data and in older adults they can often be increased up to 170%.</footer>
                </div></>
            );
          }
        

