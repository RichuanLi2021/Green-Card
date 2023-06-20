import './MoodStabilizers.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import Data from "../../searchBar/Data.json";

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

export default function MoodStabilizers() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/moodstabilizers')
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
  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
      <br></br>
    <div id="MoodStabilizers">
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" id="topicHeader">Mood Stabilizers Guide</Typography>
      </Box>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 700 }} aria-label="customized table" id="moodStabilizersTable" >
            <TableHead >
              <TableRow >
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Name</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Half-life</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Dose (mg/day)Initial | Maint. | Max.</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Freq-uency</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>mg/Form Supplied</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Monitoring Level</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((dataObj, index) => (
                <StyledTableRow key={index} >
                  <StyledTableCell component="th" scope="row">
                    {dataObj.Name}
                  </StyledTableCell>
                  <StyledTableCell >{dataObj[`Half-life`]}</StyledTableCell>
                  <StyledTableCell >{dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}</StyledTableCell>
                  <StyledTableCell >{dataObj[`Frequency`]}</StyledTableCell>
                  <StyledTableCell >{dataObj[`mg/Form Supplied`]}</StyledTableCell>
                  <StyledTableCell >{dataObj[`Monitoring Level`]}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer><br></br>
      <p><b>Key:</b> †dosage determined by concomitant drugs used (see Lamictal monograph for details). er tab: slow release.<b>NOTES</b>: doses may not reflect manufacturers' recommendations, they are based on clinical literature and experience; most drugs in this category do not have a formal mood stabilizer indication. Levels may be useful for investigating toxicity and adherence, in addition to achieving a therapeutic dose. ^half-life of active metabolite. *due to risks for drug-drug interactions and adverse effects  </p>
    </div>
    <Footer />
    </>
  );
}
};