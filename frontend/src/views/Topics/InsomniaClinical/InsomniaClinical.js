import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../../searchBar/searchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InsomniaClinicalUpdate from "./InsomniaClinicalBackend";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navigation from "../../Navigation/navigation";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import Footer from "../../Footer/Footer";
import Data from "../../searchBar/Data.json";

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

export default function InsomniaClinical() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8887/api/insomniaclinical")
      .then((response) => {
        setData(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [admin] = useState(localStorage.getItem("admin") === "true");
  const [value, setValue] = useState("");

  const store_value = (event) => {
    setValue(event.target.value);
  };

  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        InsomniaClinicalUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert(`Data successfully updated!\nNew Value: ${event.target.value}`);
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
          <Search onSearch={handleSearch}></Search>
          <div id="insomniaClinical">
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography id="topicHeader">Sedatives/Hypnotics Clinical Guide</Typography>
            </Box>

            <TableContainer component={Paper} sx={{ marginBottom: 20 }}>
              <Table aria-label="customized table" id="clinicalTable">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>When to do?</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>What to do?</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        <input
                          id="`LIST_HEADERS`"
                          name={dataObj[`Id`]}
                          type="text"
                          onFocus={store_value}
                          onBlur={update_value}
                          defaultValue={dataObj[`LIST_HEADERS`]}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <input
                          id="`Description`"
                          name={dataObj[`Id`]}
                          type="text"
                          onFocus={store_value}
                          onBlur={update_value}
                          defaultValue={dataObj[`Description`]}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div id="insomniaClinical">
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography id="topicHeader">Sedatives/Hypnotics Clinical Guide</Typography>
            </Box>
            <Accordion id="firstAccordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>
                  <b>SHYPCLIN_BFR</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  <li>Avoid Starting If Possible </li>
                  <li>Set End Date</li>
                  <li>
                    Assess For Drug-Drug Interactions
                  </li>
                  <li>
                    Inform Paitent of Risks
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion id="secondAccordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>
                  <b>SHYPCLIN_STR</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  <li>Low Dose, Intermittent Use </li>
                  <li>	Time-Limited</li>
                  <li>
                    Co-Start Safer Interventions (CBTi)
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion id="thirdAccordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>
                  <b>SHYPCLIN_END</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  <li>	Gradual Taper</li>
                  <li>	TAdd CBTi To Support</li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className='keynote-div'>
              <p className='keynote'><b>Key notes:</b> SHYPCLIN_BFR means before prescribing, SHYPCLIN_STR means starting, SHYPCLIN_END means ending </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
