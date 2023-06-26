import './AntidepressantsClinical.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {useState, useEffect} from 'react';

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

export default function AntidepressantsClinical() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8887/api/antidepressantsclinical')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
        
  }, []);

  
  
  if(data.length > 0 )
  {
  return (
    <>
      <Navigation />
      <br></br>
    <div id="antidepressantClinical">
      <Accordion id="firstAccordionAntidepressantClinical">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id ="antidepressantClinicalSubject"><b>Antidepressant Clinical Guide</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p><b>Trial length: up to 10-12 weeks at therapeutic dose</b></p>
          <TableContainer component={Paper} >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable" >
                    <TableHead >
                      <TableRow >
                        <StyledTableCell>ID</StyledTableCell>  
                        <StyledTableCell>Description</StyledTableCell>   
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((dataObj, index) => (
                        <StyledTableRow key={index} >
                          <StyledTableCell component="th" scope="row">
                            {dataObj.LIST_HEADERS_Id}
                          </StyledTableCell>
                          <StyledTableCell >{dataObj[`Description`]}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer><br></br>
                <p><b>Key notes: ANTID_INAD means "For inadequate response", ANTID_MAIN means "Maintenance", ANTID_TAPE means "Tapering" </b> </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
                      </div>
    <Footer />
    </>
  );
}
};