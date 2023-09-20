
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
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

export default function PolypharmacyPrinciples() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/api/polypharmacyprinciples")
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
    <div id="polypharmacyPrinciples">
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" id="polypharmacy">
          <div className='subtitle'>
            Prescribing and Deprescribing Principles
          </div>
        </Typography>
      </Box>

        <TableContainer component={Paper} >
          <Table aria-label="customized table" id="polypharmacyPrincipleTable" >
            <TableBody>
              {data.map((dataObj, index) => (
                <StyledTableRow key={index} >
                  <StyledTableCell >{dataObj[`Description`]}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer><br></br>
        <div className="keynote-div">
          <p className='keynote'> 
            <b>For additional information:</b> deprescribing.org, Beers criteria, STOPP/START criteria. 
          </p>
        </div>
    </div>
    <Footer />
    </>
  );
}
};