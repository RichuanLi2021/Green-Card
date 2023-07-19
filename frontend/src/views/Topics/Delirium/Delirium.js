import './delirium.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
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
import {DeliriumBackendUpdate, submitDrug} from "./DeliriumBackend";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {

    backgroundColor: theme.palette.success.main,

    color: theme.palette.common.white,

    fontWeight: 'bold',

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




export default function Delirium() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8887/api/delirium')

      .then(response => {

        setData(response.data)

        //console.log(response.data[0]);

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


  //used to store value when an input is selected by user

  const store_value = (event) => {

    setValue(event.target.value);

  }
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ listHeader, description });
    submitDrug(listHeader, description)
      .then((data) => {
        window.alert('Drug was added Successfully!');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert('Failed to submit the Drug!');
      });
  };

  //calls update query when an input was selected and is not anymore (if the value actually changed)

  const update_value = (event) => {

    if (admin) {

      console.log(value);

      if (event.target.value !== value) {

        event.preventDefault();

        DeliriumBackendUpdate(event.target.name, event.target.id, event.target.value).then((data) => {

          alert(`Data successfully updated!\nNew Value: ${event.target.value}`);

        }).catch((error) => {

          console.error(error);

          alert('Failed to update!');

        });

      }
      else {

        console.log("value was not changed, not updating");

      }

    }

    else {

      alert("You must be an administrator to edit");

    }

  };

  if (data.length > 0) {

    //Editable Fields

    if (admin) {
        return (
          <>
            <Navigation />

            <SearchBar placeholder="Search" data={Data} /><br></br>

     
          <div id="delirium"> 
            <Accordion id="firstAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <b>Nonpharmacological Approach</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Reduce noise</li>
                <li>
                  Orient the patient using clocks, calendars, light/dark environment, verbal cues (esp. by family)
                </li>
                <li>Correct sensory deficits (clean eyeglasses, working hearing aids)</li>
                <li>Increase patient's sense of control</li>
                <li>Minimize room/environment changes</li>
                <li>Avoid restraints if possible</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <b>Pharmacological Approach</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Only use if clinically signficant distress/agitation/aggression, when benefits{">"}harm, and non
                  pharmacological approach failed
                </li>
                <li>Antipsychotics are treatment of choice (other than etoh withdrawal delirium)</li>
                <li>Aim for monotherapy, lowest effective dose, and tapering ASAP</li>
                <li>Haloperidol not recommended if pre-existing Parkinson's or LBD</li>
                <li>Consider 4pm & 8pm dosing rather than morning dose to optimize sleep wake cycle</li>
                <li>See antipsychotic table for dosing recommendations</li>
              </ul>

              <p>
                <b> Key:</b> LBD: Lewy body dementiaHighHigh
              </p>
            </Typography>
          </AccordionDetails>
         </Accordion>
         <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            
            <Typography variant="h3" id="topicHeader">ANTICHOLINERGIC ACTIVITY</Typography>
            </Box>
            
            
              <TableContainer component={Paper} >
              
                <Table  aria-label="customized table" id="deliriumTable" >
                  <TableHead >
                    <TableRow >
                      <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Description-Drug</StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Header</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((dataObj, index) => (
                      <StyledTableRow key={index} >
                        <StyledTableCell component="th" scope="row">
                          
                          <input
                            input id='`Description`'
                            name={dataObj[`Description`]}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Description`]}
                    />
                        </StyledTableCell>
                        <StyledTableCell>
                          <input
                            input id='`LIST_HEADERS_Id`'
                            name={dataObj[`LIST_HEADERS_Id`]}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`LIST_HEADERS_Id`]}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}

                  </TableBody>
                </Table>
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
            <Box sx={{ display: 'flex', marginBottom: 10}}>
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
              </TableContainer>
              
         </div>   
      
          
        <Footer />
                    </>
                  
        );
      }
    //Non Editable Fields

    else {

      return (

        <>

          <Navigation />
          <SearchBar placeholder="Search" data={Data} /><br></br>

          <div id="delirium">

            <Accordion id="firstAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <b>Nonpharmacological Approach</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Reduce noise</li>
                <li>
                  Orient the patient using clocks, calendars, light/dark environment, verbal cues (esp. by family)
                </li>
                <li>Correct sensory deficits (clean eyeglasses, working hearing aids)</li>
                <li>Increase patient's sense of control</li>
                <li>Minimize room/environment changes</li>
                <li>Avoid restraints if possible</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <b>Pharmacological Approach</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Only use if clinically signficant distress/agitation/aggression, when benefits{">"}harm, and non
                  pharmacological approach failed
                </li>
                <li>Antipsychotics are treatment of choice (other than etoh withdrawal delirium)</li>
                <li>Aim for monotherapy, lowest effective dose, and tapering ASAP</li>
                <li>Haloperidol not recommended if pre-existing Parkinson's or LBD</li>
                <li>Consider 4pm & 8pm dosing rather than morning dose to optimize sleep wake cycle</li>
                <li>See antipsychotic table for dosing recommendations</li>
              </ul>

              <p>
                <b> Key:</b> LBD: Lewy body dementiaHighHigh
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            
            <Typography variant="h3" id="topicHeader">ANTICHOLINERGIC ACTIVITY</Typography>
            </Box>
            
            <TableContainer component={Paper} >
              <Table aria-label="customized table" id="deliriumTable" >
                <TableHead >
                  <TableRow >
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Description-Drug</StyledTableCell>
                    <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Header</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index} >
                      <StyledTableCell component="th" scope="row">
                        {dataObj[`Description`]}
                      </StyledTableCell>
                      <StyledTableCell >{dataObj[`LIST_HEADERS_Id`]}</StyledTableCell>
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
};