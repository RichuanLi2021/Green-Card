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
