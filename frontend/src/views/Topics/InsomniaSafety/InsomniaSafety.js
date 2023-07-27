import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
// import SearchBar from "../../searchBar/searchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
// import Data from "../../searchBar/Data.json";
import Navigation from "../../Navigation/navigation";
import Footer from "../../Footer/Footer";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InsomniaSafetyUpdate, submitDrug } from "./InsomniaSafetyBackend";
import "./InsomniaSafety.css";

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

export default function InsomniaSafety() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  const [value, setValue] = useState("");
  const admin = localStorage.getItem("admin");
  const [concern, setConcern] = useState("");

  const handleConcern = (event) => {
    setConcern(event.target.value);
  };

  const update_value = (event) => {
    if (admin) {
      console.log(event.target.name, event.target.value, event.target.column);
      if (event.target.value !== value) {
        event.preventDefault();
        InsomniaSafetyUpdate(event.target.name, event.target.id, event.target.value)
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

  const handleDelete = async (Description) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete("http://localhost:8887/api/insomniasafety/delete/" + Description);
        window.alert("Drug Deleted Successfully !");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitDrug(concern)
      .then((data) => {
        window.alert("Drug was added Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to submit the Drug!");
      });
  };

  const store_value = (event) => {
    setValue(event.target.value);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8887/api/insomniasafety")
      .then((response) => {
        setData(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data.length > 0) {
    if (admin) {
      return (
        <>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />

          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div id="insomniaSafety">
            <div style={{ marginTop: "1rem", padding: "0 1rem" }}>
              <Typography id="topicHeader">Sedatives/Hypnotics Safety Concerns</Typography>

              <TableContainer component={Paper}>
                <Table aria-label="customized table" id="safetyTable">
                  {Object.keys(data).map((id) => {
                    const dataObj = data[id];

                    return (
                      <div>
                        {
                          <div>
                            <TableBody>
                              <StyledTableRow>
                                <StyledTableCell>
                                  <input
                                    id="`Description`"
                                    name={dataObj.Description}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Description`]}
                                  />
                                </StyledTableCell>
                                <button
                                  style={{ background: "none", border: "none", cursor: "pointer", marginTop: "10px" }}
                                  onClick={(e) => handleDelete(dataObj.Description)}
                                >
                                  {" "}
                                  <span class="material-symbols-outlined">delete</span>
                                </button>
                              </StyledTableRow>
                            </TableBody>
                          </div>
                        }
                      </div>
                    );
                  })}
                </Table>
                <div className="box-content">
                <div className="form-header">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography id="topicHeader">Add a new Safety Concern</Typography>
                  </Box>
                </div>

                <form onSubmit={handleSubmit}>
                  <Box>
                    <TextField
                      label="Safety Concern"
                      variant="filled"
                      value={concern}
                      onChange={handleConcern}
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
              
              <div className="keynote-div">
                <p className="keynote">
                  <b>Key notes:</b> SHYPCLIN_SAF means safety concerns{" "}
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div id="insomniaSafety">
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography id="topicHeader">Sedatives/Hypnotics Safety Concerns</Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table aria-label="customized table" id="safetyTable">
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{dataObj[`Description`]}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="keynote-div">
              <p className="keynote">
                <b>Key notes:</b> SHYPCLIN_SAF means safety concerns{" "}
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
