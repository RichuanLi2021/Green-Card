import './InsomniaSedatives.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
import InsomniaSedativesUpdate from './InsomniaSedativesBackend';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
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

  const [value, setValue] = useState('');
  const admin = localStorage.getItem('admin');

  const store_value = (event) => {
    setValue(event.target.value);
  }

  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        InsomniaSedativesUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
          //alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:"+ event.target.value);
        }).catch((error) => {
          console.error(error);
          alert('Failed to update!');
        });
      } else {
        console.log("value was not changed, not updating");
      }
    } else {
      alert("You must be an administrator to edit");
    }
  };

  if (data.length > 0) {
    if (admin) {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div id="sedativesGuide">
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h3" id="topicHeader">Sedatives/ Hypnotics Guide</Typography>
            </Box>
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="sedativesTable" >
                <TableHead >
                  <TableRow >
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Name</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Dose equiv.</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Time to peak in plasma</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Half-life</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Avg dose range (mg/day)†</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >mg/form supplied</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index} >
                      <StyledTableCell component="th" scope="row">
                        {dataObj.Name}
                      </StyledTableCell>
                      <StyledTableCell align="left"><input id='`Dose equiv.`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Dose equiv.`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`Time to peak in plasma`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Time to peak in plasma`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`Half-life`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Half-life`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`Avg dose range (mg/day)`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Avg dose range (mg/day)`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`mg/Form supplied`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`mg/Form supplied`]} /></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>
            <p><b>Key:</b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime. <b>NOTES</b>: doses may not reflect manufacturer's recommendations but are based on research and/or expert opinion.  All sedatives should be used sparingly in the older adults and in people with liver disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio. </p>
          </div>
          <Footer />
        </>
      );
    }
  } else {
    return (
      <>
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div id="sedativesGuide">
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3" id="topicHeader">Sedatives/ Hypnotics Guide</Typography>
          </Box>
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="sedativesTable" >
              <TableHead >
                <TableRow >
                  <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Name</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Dose equiv.</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Half-life</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Avg dose range (mg/day)†</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >mg/form supplied</StyledTableCell>
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
          </TableContainer>
          <br></br>
          <p><b>Key:</b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime. <b>NOTES</b>: doses may not reflect manufacturer's recommendations but are based on research and/or expert opinion.  All sedatives should be used sparingly in the older adults and in people with liver disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio. </p>
        </div>
        <Footer />
      </>
    );
  }
}

