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
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
import './antidepressantsGuide.css';

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#96d2b0',
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

    function createData(name, halfLife, primary, dose, frequency, supplied) {
    return { name, halfLife, primary, dose, frequency, supplied};
    }

    const rows = [
      createData(<strong><u>SSRI</u></strong>),
      createData('citalopram (Celexa)**', "23-45h", "5HT", "5-10 | 20 | 20", "od", "10,20,30,40/tab"),
      createData('escitalopram (Cipralex)**', "27-32h", "5HT", " ", "od", "10,20/tab"),
      createData('fluoxetine (Prozac) ∅', "10-14d^", "5HT", "10 | 20-40 | 40", "od", "10,20/cap,liq"),
      createData('paroxetine (Paxil) ♯', "3-65h", "5HT", "10 | 20-40 | 40", "od", "10,20,30,40/tab"),
      createData('sertraline (Zoloft)**', "<104h^", "5HT", "25 | 50-150 | 200", "od", "25,50,100/cap"),
      createData('paroxetine (Paxil) ♯', "3-65h", "5HT", "10 | 20-40 | 40", "od", "10,20,30,40/tab"),
      createData(<strong><u>Serotonin Modulator</u></strong>),
      createData('Vortioxetine (Trintellix)', "66h", "5HT", "5-10 | 10-20 | 20", "od", "5,10,15,20/tab"),
      createData(<strong><u>SNRI</u></strong>),
      createData('duloxetine (Cymbalta)**', "8-17h", "5HT, NA", "30-60 | 60 | 120", "od", "30,60/cap"),
      createData('venlafaxine XR (Effexor XR)**', "9-13h^ ", "5HT, NA", "37.5 | 75-150 | 300", "od", "37.5,75,150/cap"),
      createData('desvenlafaxine (Pristiq)', " ", "5HT, NA", "50 | 50 | 50", "od", "50,100/er tab"),
      createData(<strong><u>NaSSA</u></strong>),
      createData('mirtazapine (Remeron)**', "20-40h", "5HT, NA", "3.75-15 | 15-45 | 45", "hs", "15,30,45/tab,diss tab"),
      createData(<strong><u>NDRI</u></strong>),
      createData('bupropion (Wellbutrin SR)**', "<27h^", "NA, DA", "100 | 150-300 | 300", "bid", "100,150/sr tab"),
      createData('bupropion (Wellbutrin XL)**', "<27h^", "NA, DA", "100 | 150-300 | 300", "od", "150,300/xl tab"),
      createData(<strong><u>TCA - 2°amine</u></strong>),
      createData('desipramine (Norpramin)†', "12-72h", "  ", "25am | 75-150 | 200", "bid", "10,25,50,75,100/tab"),
      createData('nortriptyline(Aventyl)†', "13-88h", "  ", "10-25hs | 50-100 | 100", "hs/bid", "10,25/cap"),
      createData(<strong><u>TCA - 3°amine</u></strong>),
      createData('amitriptyline (Elavil)', "Not recommended"),
      createData(<strong><u>MAOI</u></strong>),
      createData('phenelzine (Nardil)', "1.5-4h", "NA, 5HT", "15 | 45-90 | 90", "b-tid", "15/tab"),
      createData('tranylcypromine (Parnate)', "2-4h", "NA, 5HT", "10bid | 20-40 | 40", "am/bid", "10/tab")
    ];

    export default function AntidepressantsGuide() {
    return (
      <>
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '3rem', padding: '0 1rem' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Antidepressants Guide
          </Typography>
          <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
            <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Half-life</StyledTableCell>
                      <StyledTableCell align="right">Primary NT</StyledTableCell>
                      <StyledTableCell align="right">Dose(mg/day) Initial | Main. | Max.</StyledTableCell>
                      <StyledTableCell align="right">Frequency&nbsp;</StyledTableCell>
                      <StyledTableCell align="right">mg/Form Supplied&nbsp;</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.halfLife}</StyledTableCell>
                      <StyledTableCell align="right">{row.primary}</StyledTableCell>
                      <StyledTableCell align="right">{row.dose}</StyledTableCell>
                      <StyledTableCell align="right">{row.frequency}</StyledTableCell>
                      <StyledTableCell align="right">{row.supplied}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                 </TableBody>
             </Table>
          </TableContainer>
          <footer class="footer">
            <p>Key: AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites; **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data.</p>
            <p>NOTES: doses may not reflect manufacturers' recommendations but are based on clinical literature and opinion. Half lives are estimates based on adult data and in older adults they can often be increased up to 170%.</p>
          </footer>
        </div></>
      );
     }