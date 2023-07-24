import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../../searchBar/searchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Navigation from "../../Navigation/navigation";
import Footer from "../../Footer/Footer";
import Data from "../../searchBar/Data.json";
import "./AntipsychoticSafety.css";

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

export default function AntipsychoticSafety() {
  const [data, setData] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [newSafetyConcern, setNewSafetyConcern] = useState("");
  const [admin] = useState(localStorage.getItem("admin") === "true");

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/AntipsychoticSafety")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addSafetyConcern = (description) => {
    if (admin) {
      axios
        .post("http://localhost:8887/api/AntipsychoticSafety/add", { Description: description })
        .then((response) => {
          alert("Data successfully added! \nSafety Concern:" + description);
          fetchData();
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to add safety concern!");
        });
    } else {
      alert("You must be an administrator to add a safety concern");
    }
  };

  const handleDelete = async (Description) => {
    if (admin){
      if (window.confirm("Are you sure you want to delete this record?")) {
        try {
          console.log(Description);
          await axios.delete("http://localhost:8887/api/AntipsychoticsSafety/delete/" + Description);
          alert("Data deleted succesfully! \nSymptom:" + Description);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
    }
    else{
      alert("Must be an administrator to edit" );
    }
    
  };

  const handleInputChange = (e) => {
    setNewSafetyConcern(e.target.value);
  };

  //page has not been made updatable yet
  if (data.length > 0) {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div id="antipsychoticSafety">
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography id="antipsychoticSafetyHeader">Antipsychotics Safety Concerns</Typography>
          </Box>

          {/* Add a new Safety Concern */}
          {admin && (
            <div>
              <h2>Add a new Safety Concern</h2>
              <button onClick={() => setFormVisible(!formVisible)} className="button-style">
                {formVisible ? "Cancel" : "Add Safety Concern"}
              </button>
              {formVisible && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addSafetyConcern(newSafetyConcern);
                    setFormVisible(false);
                  }}
                  className="form-style"
                >
                  <input
                    type="text"
                    name="Description"
                    placeholder="Description"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </form>
              )}
            </div>
          )}

          <TableContainer component={Paper}>
            <Table aria-label="customized table" id="antipsychoticSafetyTable">
              <TableBody>
                {data.map((dataObj, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{dataObj[`Description`]}</StyledTableCell>
                    <button
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "15px 2px" }}
                      onClick={(e) => handleDelete(dataObj.Description)}
                    >
                      <span class="material-symbols-outlined">delete</span>
                    </button>
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
