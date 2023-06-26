import './PsychotropicMonitoringSection.css';
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import Data from "../../searchBar/Data.json";
import PsychotropicMonitoringUpdate from "./PsychotropicMonitoringbackend";

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

export default function PsychotropicMonitoringSection() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/psychotropicmonitoringsection')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  const [value, setValue] = useState("");
  const admin = localStorage.getItem("admin");

  //used to store value when an input is selected by user
  const store_value = (event) => {
    setValue(event.target.value);
  };

  //calls update query when an input was selected and is not anymore (if the value actually changed)
  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        PsychotropicMonitoringUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            //alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:"+ event.target.value);
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to update!");
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
          <br></br>
          <div id="Psychotropic">
            <Accordion id="firstAccordionPsychotropic">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography id="PsychotropicSubject">
                  <b>Psychotropic Monitoring</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" id="psychotropicMonitoringTable">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell>Antipsychotics</StyledTableCell>
                          <StyledTableCell>Lithium</StyledTableCell>
                          <StyledTableCell>Valproate</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((dataObj, index) => (
                          <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row" style={{ position: "sticky" }}>
                              {dataObj.Name}
                            </StyledTableCell>
                            <StyledTableCell>
                              <input
                                id="`Antipsychotics`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Antipsychotics`]}
                              />
                            </StyledTableCell>
                            <StyledTableCell>
                              <input
                                id="`Lithium`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Lithium`]}
                              />
                            </StyledTableCell>
                            <StyledTableCell>
                              <input
                                id="`Valproate`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Valproate`]}
                              />
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <br></br>
        <div id="Psychotropic">
        <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3" id="topicHeader">Psychotropic Monitoring</Typography>
          </Box>
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="psychotropicMonitoringTable" >
                <TableHead >
                  <TableRow >
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Name</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Antipsychotics</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Lithium</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Valproate</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index} >
                      <StyledTableCell component="th" scope="row">
                        {dataObj.Name}
                      </StyledTableCell>
                      <StyledTableCell >{dataObj[`Antipsychotics`]}</StyledTableCell>
                      <StyledTableCell >{dataObj[`Lithium`]}</StyledTableCell>
                      <StyledTableCell >{dataObj[`Valproate`]}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer><br></br>
          <p><b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment  </p>
        </div>
        <Footer />
        </>
      );
    }
    };
  }