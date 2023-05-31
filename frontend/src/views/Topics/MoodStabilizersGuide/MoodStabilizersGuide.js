import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Navigation from '../../Navigation/navigation';

import './MoodStabilizersGuide.css';

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

    function createData(name, halfLife, dose, frequency, supplied, monitoring) {
    return { name, halfLife, dose, frequency, supplied, monitoring};
    }

    const rows = [
      createData('lamotrigine (Lamictal)', "25h", "12.5-25 hs | 50-250+ | 200-300", "bid", "25,100,150/tab 2,5/chewtab", "nil"),
      createData('lithium carbonate (Carbolith, Lithane)', "20-26h", "150 od-bid | use drug levels", "hs-tid", "150,300,600/cap", "0.4-0.8 μmol/Llithium"),
      createData('llithium citrate (oral liquid)', "20-26h", "5 ml bid | use drug levels", "od-tid", "8mmol/5ml (=300mg Li carb)", "''"),
      createData('valproic acid (Depakene)', "6-16h", "125 od-bid | 1000-2000 | 60mg/kg", "b-tid", "250,500/cap; 250/5ml liq", "350-700 μmol"),
      createData('divalproex (Epival)', "6-16h", "125 od-bid | 1000-2000 | 60mg/kg", "''", "125,250,500/tab", "''"),
      createData('antipsychotics', " ", "Please see antipsychotic table"),
      createData('carbamazepine (Tegretol)',  " ",  "To be used with caution under expert supervision*"),
      createData('oxcarbazepine (Trileptal)',  " ",  "To be used with caution under expert supervision*")
    ];

    export default function MoodStabilizersGuide() {
    return (
      <>
        <Navigation></Navigation>
        <div style={{ marginTop: '5rem', padding: '0 1rem' }}>
          <Typography variant="h4" align="center" color="#6CA786" gutterBottom>
          Mood Stabilizers Guide
          </Typography>
          <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
            <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Half-life</StyledTableCell>
                      <StyledTableCell align="right">Dose(mg/day) Initial | Maint. | Max.</StyledTableCell>
                      <StyledTableCell align="right">Frequency&nbsp;</StyledTableCell>
                      <StyledTableCell align="right">mg/Form Supplied&nbsp;</StyledTableCell>
                      <StyledTableCell align="right">Monitoring Level&nbsp;</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.halfLife}</StyledTableCell>
                      <StyledTableCell align="right">{row.dose}</StyledTableCell>
                      <StyledTableCell align="right">{row.frequency}</StyledTableCell>
                      <StyledTableCell align="right">{row.supplied}</StyledTableCell>
                      <StyledTableCell align="right">{row.monitoring}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                 </TableBody>
             </Table>
          </TableContainer>
          <footer class="footer">
            <p>Key: dosage determined by concomitant drugs used (see Lamictal monograph for details). er tab: slow release.</p>
            <p>NOTES: doses may not reflect manufacturers' recommendations, they are based on clinical literature and experience; most drugs in this category do not have a formal mood stabilizer indication. Levels may be useful for investigating toxicity and adherence, in addition to achieving a therapeutic dose. ^half-life of active metabolite. *due to risks for drug-drug interactions and adverse effects.</p>
          </footer>
        </div>
      </>
      );
     }