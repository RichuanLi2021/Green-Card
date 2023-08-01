import './PsychotropicMonitoringSection.css';
import * as React from 'react';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { PsychotropicMonitoringUpdate, submitDrug } from "./PsychotropicMonitoringbackend";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../../Footer/Footer';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Search from '../../Search/Search';
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,

    color: theme.palette.common.white,

    fontWeight: "bold",
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

export default function PsychotropicMonitoringSection() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://gpgc-server.vercel.app/api/psychotropicmonitoringsection')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  
  const [value, setValue] = useState('');
  const admin = localStorage.getItem('admin');


  const [drugName, setdrugName] = useState('');
  const [Antipsychotics, setAntipsychotics] = useState('');
  const [Lithium, setLithium] = useState('');
  const [Valproate, setValproate] = useState('');

  const handleDrugName = (event) => {
    setdrugName(event.target.value);
  };

  const handleAntipyschotics = (event) => {
    setAntipsychotics(event.target.value);
  };

  const handleLitihum = (event) => {
    setLithium(event.target.value);
  };

  const handleValproate = (event) => {
    setValproate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ drugName, Antipsychotics, Lithium, Valproate });
    submitDrug(drugName, Antipsychotics, Lithium, Valproate)
      .then((data) => {
        window.alert('Drug was added Successfully!');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert('Failed to submit the Drug!');
      });
  };


  const handleDelete = async (Name) =>{
    if(window.confirm('Are you sure you want to delete this record?')){
    try{
      
      await axios.delete('https://gpgc-server.vercel.app/api/psychotropic/delete/'+Name)
      window.alert('Drug Deleted Successfully !')
      window.location.reload();
    }catch(err) {
      console.log(err);
    }
  }
  }


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
        PsychotropicMonitoringUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:" + event.target.value);
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

  if(data.length > 0)
  {
    if (admin){
      return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap/.min.css" />
        <Navigation />
        <Search onSearch={handleSearch}></Search>
        <div id="Psychotropic">

        <Box
          sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          }}>
    
          <Typography id="topicHeader">Psychotropic Monitoring</Typography>
        </Box>
        
        <div class = "container tbl-container" >
          <div class = "row tbl-fixed">
            <table class="table-striped table-condensed" aria-label="customized table" id="psychotropicMonitoringTable" >
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#96d2b0' }} >Name</th>
                  <th style={{ backgroundColor: '#96d2b0' }}>Antipsychotics</th>
                  <th style={{ backgroundColor: '#96d2b0' }}>Lithium</th>
                  <th style={{ backgroundColor: '#96d2b0' }}>Valproate</th>
                </tr>
              </thead>
              
              <tbody>
                {data.map((dataObj, index) => (
                  <tr key={index}>
                    <td>
                      {dataObj.Name}
                      <button style={{background:'none',border:'none',cursor:'pointer',marginTop:'10px'}} onClick={e => handleDelete(dataObj.Name)} > <span class="material-symbols-outlined">delete</span></button>
                    </td>
                    <td>
                      <input id="`Antipsychotics`"
                        name={dataObj.Name}
                        type='text'
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj[`Antipsychotics`]} />
                    </td>
                    <td>
                      <input id="`Lithium`"
                        name={dataObj.Name} 
                        type='text' 
                        onFocus={store_value} 
                        onBlur={update_value} 
                        defaultValue={dataObj[`Lithium`]} />
                    </td>
                    <td>
                      <input id="`Valproate`" 
                        name={dataObj.Name} 
                        type='text' 
                        onFocus={store_value} 
                        onBlur={update_value} 
                        defaultValue={dataObj[`Valproate`]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="box-content"  >
          <div className="form-header" >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" className="title">
                Add New Drug
              </Typography>

            </Box>
          </div>

          <form onSubmit={handleSubmit} >
            <Box >
              <TextField
                label="Drug Name: "
                variant="filled"
                value={drugName}
                onChange={handleDrugName}
                required
              />

            </Box>
            <Box >
              <TextField
                label="Antipyschotics:"
                variant="filled"
                value={Antipsychotics}
                onChange={handleAntipyschotics}
                type="text"
                multiline
                required
              />
            </Box>

            <Box >
              <TextField
                label="Litihium:"
                variant="filled"
                value={Lithium}
                onChange={handleLitihum}
                multiline
                required
              />
            </Box>

            <Box >
              <TextField
                label="Valproate:"
                variant="filled"
                value={Valproate}
                onChange={handleValproate}
                multiline
                required
              />
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Button
                type="submit"
                variant="contained"
                className="submit-button"
                color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </div>
        
        <div className='keynote-div'>
          <p className='keynote'><b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment  </p>
        </div>
      </div>
      <Footer />
    </>);
  }
  return(
    <>
    <Navigation />
    <Search onSearch={handleSearch}></Search>
    <div id="Psychotropic">
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h3" id="topicHeader">Psychotropic Monitoring</Typography>
      </Box>

      <TableContainer component={Paper} className='table-div'>
        <Table aria-label="customized table" id="psychotropicMonitoringTable" >
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ backgroundColor: '#96d2b0' }} className='head-col' >Name</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: '#96d2b0' }} className='second-column'>Antipsychotics</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Lithium</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Valproate</StyledTableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {data.map((dataObj, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" className='head-col'>
                {dataObj.Name}
              </StyledTableCell>
              <StyledTableCell className='second-column'>
              {dataObj[`Antipsychotics`]}
              </StyledTableCell>
              <StyledTableCell >
              {dataObj[`Lithium`]}
              </StyledTableCell>
              <StyledTableCell >
              {dataObj[`Valproate`]}
              </StyledTableCell>
            </StyledTableRow>))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='keynote-div'>
        <p className='keynote'><b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment.</p>
      </div>
    </div>
    <Footer />
  </>);
  }
}
