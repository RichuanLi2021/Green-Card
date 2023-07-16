import './CognitiveEnhancersClinical.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import {CognitiveEnhancersClinicalUpdate, submitDrug} from './CognitiveEnhancersClinicalBackend';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../../Footer/Footer';




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
    axios.get('http://localhost:8887/api/cognitiveenhancersclinical')
      .then(response => {
        setData(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [value, setValue] = useState('');
  const admin = localStorage.getItem('admin');
  
  //add drug components shifted to this page itself
  const [listHeader, setlistHeader] = useState('');
  const [description, setDescription] = useState('');
   
  const handleHeader = (event) => {
    setlistHeader(event.target.value);
  };

  const handleDescription= (event) => {
    setDescription(event.target.value);
  };

  const store_value = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ listHeader, description });
    submitDrug(listHeader, description)
      .then((data) => {
        window.alert('Drug was added Successfully!');
      
      })
      .catch((error) => {
        console.error(error);
        window.alert('Failed to submit the Drug!');
      });
  };

  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        CognitiveEnhancersClinicalUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
          alert('Data successfully updated! ' + '\nNew Value:'+ event.target.value);
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

  if (data.length > 0) {
    if (admin) {
      return (
        <>
         <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
          <Typography variant="h3" align="center" gutterBottom>
          <div className="subtitle">
            Cognitive Enhancers Clinical Guide
          </div>
          </Typography>


            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable" >
                <TableHead >
                  <TableRow >
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>ID</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index} >
                      <StyledTableCell component="th" scope="row">
                        {dataObj.LIST_HEADERS_Id}
                      </StyledTableCell>
                      <StyledTableCell align="left"><input id='`Description`' name={dataObj.Description} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Description`]} /></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer><br></br>
            <div className="box-content"  >
           <div className="form-header" >
           <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" className="title">
              Add New Information to the page
            </Typography>
            
           </Box>
           </div>
        
          <form onSubmit={handleSubmit} >
            <Box >
            <TextField
              label="List Header (must be from one of above headers): "
              variant="filled"
              value={listHeader}
              onChange={handleHeader}
              
             
              multiline
              
              
              required
            />
            </Box>

            <Box >
            <TextField
              label="Description:"
              variant="filled"
              value={description}
              onChange={handleDescription}
              
             
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

          </div>
          <div className="cognitive-footer">
            <p className='cognitive-notes'>
              <b>Key: </b>COG_CONTRA means "Contraindications", COG_ACHEI means "Adverse Effects (AChEI)", COG_ACHEI_ME means "Adverse Effects (Memantine)", COG_BASELINE means "Baseline",
              COG_MONITOR means "monitoring" 
          </p>
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
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
          <Typography variant="h3" align="center" gutterBottom>
          <div className="subtitle">
            Cognitive Enhancers Clinical Guide
          </div>
          </Typography>


            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable" >
                <TableHead >
                  <TableRow >
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>ID</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index} >
                      <StyledTableCell component="th" scope="row">
                        {dataObj.LIST_HEADERS_Id}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {dataObj[`Description`]} </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer><br></br>
            
            <div className="cognitive-footer">
            <p className='cognitive-notes'>
              <b>Key: </b>COG_CONTRA means "Contraindications", COG_ACHEI means "Adverse Effects (AChEI)", COG_ACHEI_ME means "Adverse Effects (Memantine)", COG_BASELINE means "Baseline",
              COG_MONITOR means "monitoring" 
          </p>
          </div>
        </div>
        <Footer />

        </>
      )
    }
  } 
}