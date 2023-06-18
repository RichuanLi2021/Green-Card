import './InsomniaSedatives.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';

import Data from "../searchBar/Data.json";
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

export default function InsomniaSedatives() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/insomniasedatives')
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
    <div id="sedativesGuide">
      <Accordion id="firstAccordionSedatives">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id ="sedativesSubject"><b>SEDATIVES/HYPNOTICS GUIDE</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper} >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="sedativesTable" >
                    <TableHead >
                      <TableRow >
                        <StyledTableCell  >Name</StyledTableCell>
                        <StyledTableCell >Dose equiv.</StyledTableCell>
                        <StyledTableCell >Time to peak in plasma</StyledTableCell>
                        <StyledTableCell >Half-life</StyledTableCell>
                        <StyledTableCell >Avg dose range (mg/day)†</StyledTableCell>
                        <StyledTableCell >mg/form supplied</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((dataObj, index) => (
                        <StyledTableRow key={index} >
                          <StyledTableCell component="th" scope="row">
                            {dataObj.Name}
                          </StyledTableCell>
                          <StyledTableCell >{dataObj[`Dose equiv.`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Time to peak in plasma`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Half-life`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Avg dose range (mg/day)`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`mg/Form supplied`]}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer><br></br>
              <p><b>Key:</b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime. <b>NOTES</b>: doses may not reflect manufacturer's recommendations but are based on research and/or expert opinion.  All sedatives should be used sparingly in the older adults and in people with liver disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio. </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    <Footer />
    </>
  );
}
};