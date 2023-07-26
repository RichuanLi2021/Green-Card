
import './Neuropsychiatric.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {useState, useEffect} from 'react';
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
import { Box } from '@mui/system';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";

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

export default function NeuropsychiatricSymptoms() {
    
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/neuropsychiatric')
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
  
  return(
      
      
    <><div id="neuropsychiatricSymptoms">
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <Box
          sx={{
            marginTop: 3,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Typography variant="h3" id="topicHeader" > ECT & Psychoactive Meds</Typography>
        </Box>
        
        <Accordion id="FirstAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography ><b>ECT & PSYCHOACTIVE MEDICATIONS</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Medication</StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Recommended Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((dataObj, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {dataObj.Medication}
                        </StyledTableCell>
                        <StyledTableCell>{dataObj[`Recommended Action`]}</StyledTableCell>

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
};
