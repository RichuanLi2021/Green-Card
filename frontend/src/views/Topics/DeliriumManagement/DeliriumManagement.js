import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "../../searchBar/searchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Data from "../../searchBar/Data.json";
import "./DeliriumManagement.css";
import Navigation from "../../Navigation/navigation";
import Box from "@mui/material/Box";
import Footer from "../../Footer/Footer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#96D2B0",
    color: "whitesmoke",
    letterSpacing: "0.1rem",
    padding: "1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "1rem",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f3f3f3",
  },
}));

export default function DeliriumManagement() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8887/api/DeliriumManagement")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const [value, setValue] = useState("");

  if (data.length > 0) {
    return (
      <div id="DeliriumManagement">
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography id="topicHeader">
            Delirium Management
          </Typography>
          <Typography id="heading-note">
            Treating underlying cause is mainstay of treatment
          </Typography>
        </Box>
        <Accordion id="firstAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <b>Nonpharmacological Approach</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  sx={{ textAlign: 'left' }}>
                <li>Reduce noise</li>
                <li>
                  Orient the patient using clocks, calendars, light/dark environment, verbal cues (esp. by family)
                </li>
                <li>Correct sensory deficits (clean eyeglasses, working hearing aids)</li>
                <li>Increase patient's sense of control</li>
                <li>Minimize room/environment changes</li>
                <li>Avoid restraints if possible</li>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <b>Pharmacological Approach</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  sx={{ textAlign: 'left' }}>
                <li>
                  Only use if clinically signficant distress/agitation/aggression, when benefits{">"}harm, and non
                  pharmacological approach failed
                </li>
                <li>Antipsychotics are treatment of choice (other than etoh withdrawal delirium)</li>
                <li>Aim for monotherapy, lowest effective dose, and tapering ASAP</li>
                <li>Haloperidol not recommended if pre-existing Parkinson's or LBD</li>
                <li>Consider 4pm & 8pm dosing rather than morning dose to optimize sleep wake cycle</li>
                <li>See antipsychotic table for dosing recommendations</li>

              <p>
                <b> Key:</b> LBD: Lewy body dementia
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion id="thirdAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <b>Anticholinergic Activity</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <TableContainer component={Paper}>
                <Table aria-label="customized table" id="table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>High</StyledTableCell>
                      <StyledTableCell>Medium</StyledTableCell>
                      <StyledTableCell>Low</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {row[`High`]}
                        </StyledTableCell>
                        <StyledTableCell>{row[`Medium`]}</StyledTableCell>
                        <StyledTableCell>{row[`Low`]}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <br></br>
              <br></br>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Footer />
      </div>
    );
  }
}
