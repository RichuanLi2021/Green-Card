import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState, useEffect } from 'react';
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

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import Data from "../../searchBar/Data.json";

import "./AntidepressantsClinical.css";
import antidepressantClinicalUpdate from './antidepressantsClinicalBackend';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AntidepressantsClinical() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8887/api/antidepressantsclinical')
      .then(response => {
        setData(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [value, setValue] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [newClinical, setNewClinical] = useState("");
  const admin = localStorage.getItem('admin');

  const store_value = (event) => {
    setValue(event.target.value);
  }

  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        antidepressantClinicalUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
          alert(`Data successfully updated!\nNew Value: ${event.target.value}`);
        }).catch((error) => {
          console.error(error);
          alert('Failed to update!');
        });
      } else {
        console.log("value was not changed, not updating");
      }
    } else {
      alert("You must be an administrator to edit");
    }
  };

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/antidepressantsclinical")
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


  const addClinical= (description) => {
    if (admin) {
      axios
        .post("http://localhost:8887/api/antidepressantsclinical/add", { Description: description })
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

  // const handleDelete = async (Description) => {
  //   if (window.confirm("Are you sure you want to delete this record?")) {
  //     try {
  //       console.log(Description);
  //       await axios.delete("http://localhost:8887/api/antidepressantsclinical/delete/" + Description);
  //       alert("Data deleted succesfully! \nClinical: " + Description);
  //       window.location.reload();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  const handleInputChange = (e) => {
    setNewClinical(e.target.value);
  };

  if (data.length > 0) {
    if (admin) {
      return (
        <>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div id="antidepressantClinical">
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h3" id="antidepressantClinicalHeader">Antidepressants Clinical Guide</Typography>
            </Box>

            <h2>Add a new Antidepressants Clinical</h2>
              <button onClick={() => setFormVisible(!formVisible)} className="button-style">
                {formVisible ? "Cancel" : "Add Antidepressants Clinical"}
              </button>
              {formVisible && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addClinical(newClinical);
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

            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable" >
                <TableHead >
                  <TableRow >
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Header</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index} >
                      <StyledTableCell component="th" scope="row">
                        {dataObj[`LIST_HEADERS`]}
                      </StyledTableCell>
                      <StyledTableCell align="left" id="descriptionCell"><input id='`Description`' name={dataObj.Description} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Description`]} /></StyledTableCell>
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
    else {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div id="antidepressantClinical">
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h3" id="antidepressantClinicalHeader">Antidepressants Clinical Guide</Typography>
            </Box>

            <TableContainer component={Paper} className="responsive-table" >
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable" className="responsive-table" >
                <TableHead >
                  <TableRow  className="tableRow">
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} className="headerCell">Header</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} className="descriptionCell" >Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}  className="tableRow" >
                      <StyledTableCell component="th" scope="row" className="headerCell">
                        {dataObj.LIST_HEADERS}
                      </StyledTableCell>
                      <StyledTableCell align="left" className="descriptionCell"  >
                        {dataObj[`Description`]} </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            

          </div>
          <Footer />
        </>
      )
    }
  } 
}