import "./CognitiveEnhancersClinical.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
// import SearchBar from "../../searchBar/searchBar";
import Navigation from "../../Navigation/navigation";
// import Data from "../../searchBar/Data.json";
import { CognitiveEnhancersClinicalUpdate, submitDrug } from "./CognitiveEnhancersClinicalBackend";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../Footer/Footer";
import Search from "../../Search/Search";
import { useNavigate } from "react-router-dom";

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

export default function AntidepressantsClinical() {
  const [data, setData] = useState({
    COG_ACHEI: [],
    COG_ACHEI_ME: [],
    COG_BASELINE: [],
    COG_CONTRA: [],
    COG_MONITOR: [],
    COG_HOW_WHEN: [],
  });
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8887/api/cognitiveenhancersclinical")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [value, setValue] = useState("");
  const admin = localStorage.getItem("admin");

  // add drug components shifted to this page itself
  const [listHeader, setlistHeader] = useState("");
  const [description, setDescription] = useState("");

  const handleHeader = (event) => {
    setlistHeader(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const store_value = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ listHeader, description });
    submitDrug(listHeader, description)
      .then((data) => {
        window.alert("Drug was added Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to submit the Drug!");
      });
  };

  const update_value = async (event) => {
    const column = event.target.getAttribute("name"); // The column identifier (e.g., COG_ACHEI_ME)
    const oldValue = event.target.defaultValue; // Original value before editing
    const newValue = event.target.value; // The new value entered by the user

    try {
      await CognitiveEnhancersClinicalUpdate(column, oldValue, newValue);
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

  const handleDelete = async (Description) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        console.log("Deleting description:", Description);
        await axios.delete("http://localhost:8887/api/CognitiveEnhancersClinical/delete/" + Description);
        window.alert("Drug Deleted Successfully !");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const hasData = Object.values(data).some((arr) => arr.length > 0);

  if (hasData) {
    if (admin) {
      return (
        <>
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
            <Typography variant="h3" align="center" gutterBottom>
              <div className="subtitle">Cognitive Enhancers Clinical Guide</div>
            </Typography>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Contraindications</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Adverse Effects (AChEI)</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>
                      Adverse Effects (Memantine)
                    </StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Baseline</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Monitoring</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>How & When</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Actions</StyledTableCell>{" "}
                    {/* New column for admin actions */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array(
                    Math.max(
                      data.COG_ACHEI.length,
                      data.COG_ACHEI_ME.length,
                      data.COG_BASELINE.length,
                      data.COG_CONTRA.length,
                      data.COG_MONITOR.length
                    )
                  )
                    .fill(null)
                    .map((_, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell>
                          <input
                            type="text"
                            defaultValue={data.COG_CONTRA[index] || ""}
                            onBlur={update_value}
                            name="COG_CONTRA"
                            data-id={index}
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <input
                            type="text"
                            defaultValue={data.COG_ACHEI[index] || ""}
                            onBlur={update_value}
                            name="COG_ACHEI"
                            data-id={index}
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <input
                            type="text"
                            defaultValue={data.COG_ACHEI_ME[index] || ""}
                            onBlur={update_value}
                            name="COG_ACHEI_ME"
                            data-id={index}
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <input
                            type="text"
                            defaultValue={data.COG_BASELINE[index] || ""}
                            onBlur={update_value}
                            name="COG_BASELINE"
                            data-id={index}
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <input
                            type="text"
                            defaultValue={data.COG_MONITOR[index] || ""}
                            onBlur={update_value}
                            name="COG_MONITOR"
                            data-id={index}
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <input
                            type="text"
                            defaultValue={(data.COG_HOW_WHEN && data.COG_HOW_WHEN[index]) || ""}
                            onBlur={update_value}
                            name="COG_HOW_WHEN"
                            data-id={index}
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <button onClick={() => handleDelete(data.COG_CONTRA[index] || "")}>Delete</button>
                          {/* Modified to delete by index */}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="box-content">
              <div className="form-header">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" className="title">
                    Add New Information to the page
                  </Typography>
                </Box>
              </div>

              <form onSubmit={handleSubmit}>
                <Box>
                  <TextField
                    style={{ width: "400px" }}
                    label="List Header (must be from one of above headers): "
                    variant="filled"
                    value={listHeader}
                    onChange={handleHeader}
                    multiline
                    required
                  />
                </Box>

                <Box>
                  <TextField
                    style={{ width: "400px" }}
                    label="Description:"
                    variant="filled"
                    value={description}
                    onChange={handleDescription}
                    multiline
                    required
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Button
                    style={{ width: "400px" }}
                    type="submit"
                    variant="contained"
                    className="submit-button"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </div>

            <br></br>
          </div>
          <div className="cognitive-footer">
            <p className="cognitive-notes">
              <b>Key: </b>COG_CONTRA means "Contraindications", COG_ACHEI means "Adverse Effects (AChEI)", COG_ACHEI_ME
              means "Adverse Effects (Memantine)", COG_BASELINE means "Baseline", COG_MONITOR means "monitoring"
            </p>
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
            <Typography variant="h3" align="center" gutterBottom>
              <div className="subtitle">Cognitive Enhancers Clinical Guide</div>
            </Typography>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Contraindications</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Adverse Effects (AChEI)</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>
                      Adverse Effects (Memantine)
                    </StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Baseline</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Monitoring</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>How & When</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array(
                    Math.max(
                      data.COG_ACHEI.length,
                      data.COG_ACHEI_ME.length,
                      data.COG_BASELINE.length,
                      data.COG_CONTRA.length,
                      data.COG_MONITOR.length
                    )
                  )
                    .fill(null)
                    .map((_, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell>{data.COG_CONTRA[index] || ""}</StyledTableCell>
                        <StyledTableCell>{data.COG_ACHEI[index] || ""}</StyledTableCell>
                        <StyledTableCell>{data.COG_ACHEI_ME[index] || ""}</StyledTableCell>
                        <StyledTableCell>{data.COG_BASELINE[index] || ""}</StyledTableCell>
                        <StyledTableCell>{data.COG_MONITOR[index] || ""}</StyledTableCell>
                        <StyledTableCell>{(data.COG_HOW_WHEN && data.COG_HOW_WHEN[index]) || ""}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>

            <div className="cognitive-footer">
              <p className="cognitive-notes">
                <b>Key: </b>COG_CONTRA means "Contraindications", COG_ACHEI means "Adverse Effects (AChEI)",
                COG_ACHEI_ME means "Adverse Effects (Memantine)", COG_BASELINE means "Baseline", COG_MONITOR means
                "monitoring"
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
