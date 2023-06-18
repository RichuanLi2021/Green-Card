import './antipsychoticsGuide.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Tooltip } from "@mui/material";
import antipsychoticsGuideUpdate from "./antipsychoticsGuidebackend";
import Footer from '../../Footer/Footer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AntipsychoticsGuide() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/antipsychoticsGuide')
      .then(response => {
        setData(response.data)
        //console.log(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const [value, setValue] = useState('');
  const admin = localStorage.getItem('admin');

  //used to store value when an input is selected by user
  const store_value = (event) => {
    setValue(event.target.value);
  }
  //calls update query when an input was selected and is not anymore (if the value actually changed)
  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        antipsychoticsGuideUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
          //alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:"+ event.target.value);
        }).catch((error) => {
          console.error(error);
          alert('Failed to update!');
        });
      }
      else {
        console.log("value was not changed, not updating");
      }
    }
    else {
      alert("You must be an administrator to edit");
    }
  };
  if (data.length > 0) {
    //Editable Fields
    if (admin) {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div id="antipsychoticsGuide">

            <TableContainer component={Paper}>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h3"> Antipsychotics Guide</Typography>
              </Box>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Approx equiv.dose</StyledTableCell>
                    <StyledTableCell align="left">Half-life&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">Frequency&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">Tab Strength/ Form Supplied&nbsp;</StyledTableCell>
                    <Tooltip title={"NPS: Neuropsychiatric Symptoms of Dementia"}><StyledTableCell align="left">NPS&nbsp;</StyledTableCell></Tooltip>
                    <Tooltip title={"PP: Parkinson's Psychosis"}><StyledTableCell align="left">PP&nbsp;</StyledTableCell></Tooltip>
                    <StyledTableCell align="left">MDE(AD augment)&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">MDE(w.psychosis)&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">Delirium&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">EO-SCZ&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">LO-SCZ&nbsp;</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row" style={{ position: "sticky" }}>
                        {dataObj.Name}
                      </StyledTableCell>
                      <StyledTableCell align="left"><input id='`Approx. equiv. dose`' name={dataObj.Name} type='number' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Approx. equiv. dose`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`Half-life`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Half-life`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`Frequency`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Frequency`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input style={{ width: 275 }} id='`Tab Strength/Form Supplied`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Tab Strength/Form Supplied`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`NPS`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`NPS`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`PP`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`PP`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`MDE (ADaugment)`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`MDE (ADaugment)`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`MDE (w.psychosis)`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`MDE (w.psychosis)`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`Delirium`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Delirium`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`EO-SCZ`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`EO-SCZ`]} /></StyledTableCell>
                      <StyledTableCell align="left"><input id='`LO-SCZ`' name={dataObj.Name} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`LO-SCZ`]} /></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <footer id="footer"><b>Key:</b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ:
              early-onset schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS:
              neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult
              equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active
              metabolites; **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient
              data. <b>NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical
              literature and opinion. Half lives are estimates based on adult data and in older adults they can often be
              increased up to 170%.
            </footer>
          </div>
          <Footer />
        </>
      );
    }
    //Non Editable Fields
    else {
      return (
        <>
          <Navigation />
          <div id="antipsychoticsGuide">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h3"> Antipsychotics Guide</Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ width: 15 }}>Name</StyledTableCell>
                    <StyledTableCell align="left" style={{ width: 15 }}>Approx equiv.dose</StyledTableCell>
                    <StyledTableCell align="left">Half-life&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">Frequency&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">Tab Strength/ Form Supplied&nbsp;</StyledTableCell>
                    <Tooltip title={"NPS: Neuropsychiatric Symptoms of Dementia"}><StyledTableCell align="left">NPS&nbsp;</StyledTableCell></Tooltip>
                    <Tooltip title={"PP: Parkinson's Psychosis"}><StyledTableCell align="left">PP&nbsp;</StyledTableCell></Tooltip>
                    <StyledTableCell align="left">MDE(AD augment)&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">MDE(w.psychosis)&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">Delirium&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">EO-SCZ&nbsp;</StyledTableCell>
                    <StyledTableCell align="left">LO-SCZ&nbsp;</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {dataObj.Name}
                      </StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`Approx. equiv. dose`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`Half-life`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`Frequency`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`Tab Strength/Form Supplied`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`NPS`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`PP`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`MDE (ADaugment)`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`MDE (w.psychosis)`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`Delirium`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`EO-SCZ`]}</StyledTableCell>
                      <StyledTableCell align="left">{dataObj[`LO-SCZ`]}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <footer id="footer"><b>Key:</b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ:
              early-onset schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS:
              neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult
              equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active
              metabolites; **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient
              data. <b>NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical
              literature and opinion. Half lives are estimates based on adult data and in older adults they can often be
              increased up to 170%.
            </footer>
          </div>
          <Footer />
        </>
      );
    }
  }
}
