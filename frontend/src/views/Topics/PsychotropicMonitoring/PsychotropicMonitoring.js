import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';


import './PsychotropicMonitoring.css';

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

    function createData(name, halfLife, primary, dose, frequency, supplied) {
    return { name, halfLife, primary, dose, frequency, supplied};
    }

    const rows = [
      createData('Blood pressure', 'BL, ACI', 'BL, ACI', 'ACI'),
      createData('BMI/weight/waist circ. ','BL, 1m, 3m, annually ','BL, ACI ', 'ACI'),
      createData('CBC','ACI','ACI','BL, 6m, ACI'),
      createData('ECG','ACI','ACI','-'),
      createData('Electrolytes','ACI','BL, q 6 m','ACI'),
      createData('EPS','BL, 1m, 3m, annually ','-','-'),
      createData('HbA1C/FPG','BL, 3m, annually ','BL, ACI','ACI'),
      createData('Lipid Profile ','BL, 3m, annually ','BL, ACI','ACI'),
      createData('Liver Enzymes ','ACI','ACI','BL, 6m'),
      createData('Prolactin ','ACI','-','-'),
      createData('Serum Cr ','ACI','BL, q 6 mths ','ACI '),
      createData('Serum drug level ','-','q3-6m & 5d post dose ↑ ','3-6m & 3-5d post dose ↑ '),
      createData('TSH ','ACI','BL, q 6 m ','-')

    ];

    export default function PsychotropicMonitoring() {
    return (
      <>
        <Navigation></Navigation>
          <div style={{ marginTop: '3rem', padding: '0 1rem' }}>
            <Typography variant="h4" align="center" color="#6CA786" gutterBottom>
              Psychotropic Monitoring
            </Typography>
            <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
              <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                        <StyledTableCell> </StyledTableCell>
                        <StyledTableCell align="right">Antipsychotics</StyledTableCell>
                        <StyledTableCell align="right">Lithium</StyledTableCell>
                        <StyledTableCell align="right">Valproate</StyledTableCell>
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
                      </StyledTableRow>
                    ))}
                  </TableBody>
              </Table>
            </TableContainer>
          </div>
        <Footer></Footer>
        </>
      );
     }