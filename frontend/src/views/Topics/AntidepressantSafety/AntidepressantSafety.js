import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import Data from "../../searchBar/Data.json";

import "./AntidepressantSafety.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color:theme.palette.common.white,
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'underline',
    
  
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

export default function AntidepressantSafety() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8887/api/antidepressantsafety')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
        
  }, []);

  const [value, setValue] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [newSafety, setNewSafety] = useState("");
  const admin = localStorage.getItem('admin');

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/AntidepressantSafety")
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

  const addSafety= (description) => {
    if (admin) {
      axios
        .post("http://localhost:8887/api/AntidepressantSafety/add", { Description: description })
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
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        console.log(Description);
        await axios.delete("http://localhost:8887/api/AntidepressantSafety/delete/" + Description);
        alert("Data deleted succesfully! \nConcern: " + Description);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleInputChange = (e) => {
    setNewSafety(e.target.value);
  };
  
  if(data.length > 0 ) {
  if (admin) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
    <div id="antidepressantSafety">
    <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" id="antidepressantSafetyHeader">Antidepressants Safety Concerns</Typography>
      </Box>

      <h2>Add a new Antidepressants Clinical</h2>
              <button onClick={() => setFormVisible(!formVisible)} className="button-style">
                {formVisible ? "Cancel" : "Add Antidepressant Safety Concern"}
              </button>
              {formVisible && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addSafety(newSafety);
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
                  <Table aria-label="customized table" id="antidepressantSafetyTable" >
                    
                    <TableBody>
                      {data.map((dataObj, index) => (
                        <StyledTableRow key={index} >
                          <StyledTableCell component="th" scope="row">
                            {dataObj.LIST_HEADERS_Id}
                          </StyledTableCell>
                          <StyledTableCell >{dataObj[`Description`]}</StyledTableCell>
                          <button
                            style={{ background: "none", border: "none", cursor: "pointer", padding: "15px 2px" }}
                            onClick={(e) => handleDelete(dataObj.Description)}
                          >
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer><br></br>
                <div className='antidepressantSafety-notes'>
                  <p className='antidepressantSafety-notes-key'>
                    <b>Key notes: </b> ANTID_SC means Antidepressants safety concerns
                  </p>
                </div>
            </div>
    <Footer />
    </>
  );
  }
  else {
    <>
    <Navigation />
    <SearchBar placeholder="Search" data={Data} />
  <div id="antidepressantSafety">
  <Box
      sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" id="antidepressantSafetyHeader">Antidepressants Safety Concerns</Typography>
    </Box>
        <TableContainer component={Paper} >
                <Table aria-label="customized table" id="antidepressantSafetyTable" >
                  
                  <TableBody>
                    {data.map((dataObj, index) => (
                      <StyledTableRow key={index} >
                        <StyledTableCell component="th" scope="row">
                          {dataObj.LIST_HEADERS_Id}
                        </StyledTableCell>
                        <StyledTableCell >{dataObj[`Description`]}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer><br></br>
              <div className='antidepressantSafety-notes'>
                <p className='antidepressantSafety-notes-key'>
                  <b>Key notes: </b> ANTID_SC means Antidepressants safety concerns
                </p>
              </div>
          </div>
  <Footer />
  </>
  }
}
};