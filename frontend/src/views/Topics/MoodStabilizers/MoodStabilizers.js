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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Navigation from "../../Navigation/navigation";
import Footer from "../../Footer/Footer";
import Data from "../../searchBar/Data.json";
import MoodStabilizersUpdate from "./moodStabilizersbackend";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MoodStabilizers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8887/api/moodstabilizers")
      .then((response) => {
        setData(response.data);
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
        MoodStabilizersUpdate(event.target.name, event.target.id, event.target.value)
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
          <div id="MoodStabilizers">
            <Accordion id="firstAccordionMoodStabilizers">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography id="moodStabilizersSubject">
                  <b>MOOD STABILIZERS GUIDE</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" id="moodStabilizersTable">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell>Half-life</StyledTableCell>
                          <StyledTableCell>Dose (mg/day)Initial | Maint. | Max.</StyledTableCell>
                          <StyledTableCell>Freq-uency</StyledTableCell>
                          <StyledTableCell>mg/Form Supplied</StyledTableCell>
                          <StyledTableCell>Monitoring Level</StyledTableCell>
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
                                id="`Half-life`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Half-life`]}
                              />
                            </StyledTableCell>
                            <StyledTableCell>
                              <input
                                id="`Dose (mg/day) Initial | Maint. | Max.`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}
                              />
                            </StyledTableCell>
                            <StyledTableCell>
                              <input
                                id="`Frequency`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Frequency`]}
                              />
                            </StyledTableCell>
                            <StyledTableCell>
                              <input
                                id="`mg/Form Supplied`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`mg/Form Supplied`]}
                              />
                            </StyledTableCell>
                            <StyledTableCell>
                              <input
                                id="`Monitoring Level`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Monitoring Level`]}
                              />
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br></br>
                  <p>
                    <b>Key:</b> †dosage determined by concomitant drugs used (see Lamictal monograph for details). er
                    tab: slow release.
                    <b>NOTES</b>: doses may not reflect manufacturers' recommendations, they are based on clinical
                    literature and experience; most drugs in this category do not have a formal mood stabilizer
                    indication. Levels may be useful for investigating toxicity and adherence, in addition to achieving
                    a therapeutic dose. ^half-life of active metabolite. *due to risks for drug-drug interactions and
                    adverse effects{" "}
                  </p>
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
  }
}
