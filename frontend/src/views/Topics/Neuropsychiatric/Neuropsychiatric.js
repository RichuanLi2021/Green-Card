import "./Neuropsychiatric.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import Navigation from "../../Navigation/navigation";
import { NeuropsychiatricUpdate, submitDrug } from "./NeuropsychiatricBackend";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../Footer/Footer";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";

import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

export default function Neuropsychiatric() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/neuropsychiatric")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState("");
  const admin = localStorage.getItem("admin");

  //add drug components shifted to this page itself
  const [medication, setMedication] = useState("");
  const [recommendedAction, setRecommendedAction] = useState("");

  const handleMedication = (event) => {
    setMedication(event.target.value);
  };

  const handleRecommendedAction = (event) => {
    setRecommendedAction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ medication, recommendedAction });
    submitDrug(medication, recommendedAction)
      .then((data) => {
        window.alert("Drug was added Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to submit the Drug!");
      });
  };

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
        NeuropsychiatricUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert(
              "Data successfully updated! \nDrug:" +
                event.target.name +
                "\nColumn:" +
                event.target.id +
                "\nNew Value:" +
                event.target.value
            );
            window.location.reload();
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

  const handleDrugClick = (dataObj) => {
    setSelectedDrugs((prevSelectedDrugs) => {
      const isSelected = prevSelectedDrugs.includes(dataObj);
      if (isSelected) {
        return prevSelectedDrugs.filter((drug) => drug !== dataObj);
      } else {
        return [...prevSelectedDrugs, dataObj];
      }
    });
  };

  const handleDelete = async (Medication) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        console.log(Medication);
        await axios.delete("http://localhost:8887/api/Neuropsychiatric/delete/" + Medication);
        window.alert("Drug Deleted Successfully!");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (Object.keys(data).length > 0) {
    if (admin) {
      return (
        <>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
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
              <Typography id="topicHeader">ECT AND PSYCHOACTIVE MEDICATIONS</Typography>
            </Box>

            <TableContainer component={Paper} sx={{ marginBottom: 20 }}>
              <Table aria-label="customized table" id="clinicalTable">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Medication</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                               <input
                               
                                  id="`Medication`"
                                  name={dataObj.Medication}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Medication`]}
                                />
                      </StyledTableCell>
                      <StyledTableCell>
                                <input
                                style={{ minWidth: "700px" }}
                                  id="`Recommended Action`"
                                  name={dataObj.Medication}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Recommended Action`]}
                                />

<button
                            style={{ background: "none", border: "none", cursor: "pointer" }}
                            onClick={(e) => handleDelete(dataObj.Medication)}
                          >
                            <span class="material-symbols-outlined">delete</span>
                          </button>
                      </StyledTableCell>
                      
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="box-content">
                    <div className="form-header">
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" className="title">
                          Add New Medication to the page
                        </Typography>
                      </Box>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <Box>
                        <TextField
                          label="Medication Name: "
                          variant="filled"
                          value={medication}
                          onChange={handleMedication}
                          multiline
                          required
                        />
                      </Box>

                      <Box>
                        <TextField
                          label="Recommended Action: "
                          variant="filled"
                          value={recommendedAction}
                          onChange={handleRecommendedAction}
                          multiline
                          required
                        />
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Button type="submit" variant="contained" className="submit-button" color="primary">
                          Submit
                        </Button>
                      </Box>
                    </form>
                  </div>
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography id="topicHeader">ECT AND PSYCHOACTIVE MEDICATIONS</Typography>
            </Box>

            <TableContainer component={Paper} sx={{ marginBottom: 20 }}>
              <Table aria-label="customized table" id="clinicalTable">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Medication</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                              
                                  {dataObj[`Medication`]}
                                
                      </StyledTableCell>
                      <StyledTableCell>
                               
                                 {dataObj[`Recommended Action`]}
                              
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
    }
  }
}
