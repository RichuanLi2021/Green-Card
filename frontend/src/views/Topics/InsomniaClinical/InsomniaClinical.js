import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {InsomniaClinicalUpdate,submitDrug} from "./InsomniaClinicalBackend";
import Navigation from "../../Navigation/navigation";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import Footer from "../../Footer/Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  const [when,setWhen] = useState('');
  const [what,setWhat] = useState('');

  const handleWhen = (event)=>{
    setWhen(event.target.value);
  }

  const handleWhat = (event)=>{
    setWhat(event.target.value);
  }
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ when, what });
    submitDrug(when, what)
      .then((data) => {
        window.alert("Drug was added Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to submit the Drug!");
      });
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
          <div className="box-content">
                <div className="form-header">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" className="title">
                      Add New Drug
                    </Typography>
                  </Box>
                </div>

                <form onSubmit={handleSubmit}>
                 
                  <Box>
                    <TextField
                      label="When to do ?"
                      variant="filled"
                      value={when}
                      onChange={handleWhen}
                      type="text"
                      required
                    />
                  </Box>
                  <Box>
                    <TextField
                      label="What to do ?"
                      variant="filled"
                      value={what}
                      onChange={handleWhat}
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
                        {dataObj[`LIST_HEADERS`]}
                      </StyledTableCell>
                      <StyledTableCell>{dataObj[`Description`]}</StyledTableCell>
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
