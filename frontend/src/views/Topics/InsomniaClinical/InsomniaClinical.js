import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
// import SearchBar from "../../searchBar/searchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Navigation from "../../Navigation/navigation";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import Footer from "../../Footer/Footer";
// import Data from "../../searchBar/Data.json";

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

  if (data.length > 0) {
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

          <TableContainer component={Paper}>
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
                      {dataObj.LIST_HEADERS_Id}
                    </StyledTableCell>
                    <StyledTableCell>{dataObj[`Description`]}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="keynote-div">
            <p className="keynote">
              <b>Key notes:</b> SHYPCLIN_BFR means before prescribing, SHYPCLIN_STR means starting, SHYPCLIN_END means
              ending{" "}
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
