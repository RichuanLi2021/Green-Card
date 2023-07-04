
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

export default function AntidepressantGuide() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8887/api/antidepressantguide')
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
      <SearchBar placeholder="Search" data={Data} />
    <div id="antidepressantGuide">
    <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" id="antidepressantGuideHeader">Antidepressants Guide</Typography>
      </Box>
      
          <TableContainer component={Paper} >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantGuideTable" >
                    <TableHead >
                      <TableRow >
                        <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Name</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Half-life</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Primary NT</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Dose (mg/day) Initial | Maint. | Max</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Frequency</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>mg/Form supplied</StyledTableCell>     
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((dataObj, index) => (
                        <StyledTableRow key={index} >
                          <StyledTableCell component="th" scope="row">
                            {dataObj.Name}
                          </StyledTableCell>
                          <StyledTableCell >{dataObj[`Half-life`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Primary NT`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Frequency`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`mg/Form Supplied`]}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer><br></br>
                <p><b>Key:</b> 5HT: serotonin; DA: dopamine; NaSSA: noradrenaline serotonin specific antidepressant; NDRI:
noradrenaline dopamine reuptake inhibitor; NT: neurotransmitter; NA: noradrenaline; SARI: serotonin
antagonist & reuptake inhibitor; SSRI: selective serotonin reuptake inhibitor; TCA: tricyclic
antidepressant (2°&3°: secondary and tertiary amines); xl, sr & er: slow release; †
 therapeutic levels
available and useful; ^ accounts for half life of active metabolite; **preferred choice based on existing
evidence; ∅ less appropriate due to long half life; ♯ less appropriate due to anticholinergic activity.
<b>NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical literature
and expert opinion. Half lives are estimates based on adult data and in older adults they can often be
increased up to 170%. </p>
              
         
    </div>

    
    <Footer />
    </>
  );
}
};
