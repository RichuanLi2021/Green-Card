import './Neuropsychiatric.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import NeuropsychiatricUpdate from './NeuropsychiatricBackend';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function Neuropsychiatric() {

  
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/neuropsychiatric')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState('');
  const admin = localStorage.getItem('admin');

   //used to store value when an input is selected by user
   const store_value = (event) => {
    setValue(event.target.value);
  }
  //calls update query when an input was selected and is not anymore (if the value actually changed)
  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        NeuropsychiatricUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
          alert('Data successfully updated! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nNew Value:"+ event.target.value);
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




  const handleDrugClick = (dataObj) => {
    setSelectedDrugs((prevSelectedDrugs) => {
      const isSelected = prevSelectedDrugs.includes(dataObj);
      if (isSelected) {
        return prevSelectedDrugs.filter((drug) => drug !== dataObj);
      } else {
        return [...prevSelectedDrugs, dataObj];
      }
    });
  };


  if (Object.keys(data).length > 0)
  {if (admin) {
    return (
      <>
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
        <Accordion id="firstAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>Nonpharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>

                <li>Individualize approach to patient </li>
                <li>Examine ABCs of behavior and identify the issue</li>
                <li>General: comforting presence/physical contact,distraction, backing away, reminiscence/sensory/relaxation therapy</li>
                <li>Optimize engagement in environment, decrease under/overstimulation, establish routine, regular exercise & recreation</li>
                <li> Resistance to care: personalize the experience (ie: offering choices), bed baths</li>


            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography ><b>Pharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>


                <li>Only use if clinically signficant distress/agitation/aggression, when benefits{'>'}harm, and non pharmacological approach failed</li>
                <li>Psychosis: atypical antipsychotic*</li>
                <li>No psychosis: SSRI, trazadone, or atypical antipsychotic*</li>
                <li>Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy</li>
                <li>Pharmacological approach generally not helpful for primary wandering or vocalizing</li>
                <li>Treatment should be evaluated for tapering or discontinuation every 3-6 months</li>
                <li>See antipsychotic table for additional information</li>


              <p><b>Key:</b> ABC: antecedent, behavior, consequence. *Recommended atypical antipsychotics include <br></br>
                risperidone, olanzapine, and aripiprazole according to the 4th Canadian Consensus Conference on <br></br>
                the Diagnosis and Treatment of Dementia</p>

            </Typography>
          </AccordionDetails>
        </Accordion>

          <Typography variant="h3" align="center" gutterBottom>
            ECT & PSYCHOACTIVE MEDICATIONS
          </Typography>

          <div className="grid-container">
            {Object.keys(data).map((id) => {
              const dataObj = data[id];
              const isDrugSelected = selectedDrugs.includes(dataObj);
              return (
                <div className="grid-item" key={id}>
                  <button
                    onClick={() => handleDrugClick(dataObj)}
                    className={`drug-button ${isDrugSelected ? 'active' : ''}`}
                  >
                    {dataObj.Medication}
                  </button>

                  {isDrugSelected && (
                    <div>

                    <div className="box">
                    <div className="box-content">
                      <strong>Recommended Action</strong>
                      <input
                                  id="`Recommended Action`"
                                  name={dataObj.Medication}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Recommended Action`]}
                                />
                    </div>
                    
                    
                    
                  </div>
                  
                  </div> 
                    )}
                     
                </div>
              );
            })}
          </div>
          <button className="drug-button" >Add new Drug</button>
          <footer id="footer">
          <p><b>Key: </b>ChEIs:cholinesterase inhibitors; MAOIs: monoamine oxidase inhibitors; *If highly tolerant (and high doses), do not taper abruptly due to risk of prolonged seizure</p>
          
          </footer>
        </div>
      </>
    );
  }
  else{

 
    return (
      <>
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
        <Accordion id="firstAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>Nonpharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>

                <li>Individualize approach to patient </li>
                <li>Examine ABCs of behavior and identify the issue</li>
                <li>General: comforting presence/physical contact,distraction, backing away, reminiscence/sensory/relaxation therapy</li>
                <li>Optimize engagement in environment, decrease under/overstimulation, establish routine, regular exercise & recreation</li>
                <li> Resistance to care: personalize the experience (ie: offering choices), bed baths</li>


            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography ><b>Pharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>


                <li>Only use if clinically signficant distress/agitation/aggression, when benefits{'>'}harm, and non pharmacological approach failed</li>
                <li>Psychosis: atypical antipsychotic*</li>
                <li>No psychosis: SSRI, trazadone, or atypical antipsychotic*</li>
                <li>Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy</li>
                <li>Pharmacological approach generally not helpful for primary wandering or vocalizing</li>
                <li>Treatment should be evaluated for tapering or discontinuation every 3-6 months</li>
                <li>See antipsychotic table for additional information</li>


              <p><b>Key:</b> ABC: antecedent, behavior, consequence. *Recommended atypical antipsychotics include <br></br>
                risperidone, olanzapine, and aripiprazole according to the 4th Canadian Consensus Conference on <br></br>
                the Diagnosis and Treatment of Dementia</p>

            </Typography>
          </AccordionDetails>
        </Accordion>

          <Typography variant="h3" align="center" gutterBottom>
          ECT & PSYCHOACTIVE MEDICATIONS
          </Typography>

          <div className="grid-container">
            {Object.keys(data).map((id) => {
              const dataObj = data[id];
              const isDrugSelected = selectedDrugs.includes(dataObj);
              return (
                <div className="grid-item" key={id}>
                  <button
                    onClick={() => handleDrugClick(dataObj)}
                    className={`drug-button ${isDrugSelected ? 'active' : ''}`}
                  >
                    {dataObj.Medication}
                  </button>

                  {isDrugSelected && (
                  <div className="box">
                    <div className="box-content">
                      <strong>Recommended Action</strong>
                      <span>{dataObj[`Recommended Action`]}</span>
                    </div>
                    
                    
                  </div>
                )}
              </div>
                
              );
            })}
          </div>
          <footer id="footer">
          <p><b>Key: </b>ChEIs:cholinesterase inhibitors; MAOIs: monoamine oxidase inhibitors; *If highly tolerant (and high doses), do not taper abruptly due to risk of prolonged seizure</p>
          
          
          </footer>
        </div>
      </>
    );
  }
} 
}
















/*import './NeuropsychiatricSymptoms.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Navigation from '../../Navigation/navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Footer from '../../Footer/Footer';
import { Box } from '@mui/system';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color:theme.palette.common.white,
    fontWeight:'bold',
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

export default function NeuropsychiatricSymptoms() {
    
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/neuropsychiatricSymptoms')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  if(data.length > 0)
  {
  
  return(
      
      
    <><div id="neuropsychiatricSymptoms">
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <Box
          sx={{
            marginTop: 3,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Typography variant="h3" id="topicHeader"> NPS Management & ECT & Psychoactive Meds</Typography>
        </Box>
        <Accordion id="firstAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>Nonpharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>

                <li>Individualize approach to patient </li>
                <li>Examine ABCs of behavior and identify the issue</li>
                <li>General: comforting presence/physical contact,distraction, backing away, reminiscence/sensory/relaxation therapy</li>
                <li>Optimize engagement in environment, decrease under/overstimulation, establish routine, regular exercise & recreation</li>
                <li> Resistance to care: personalize the experience (ie: offering choices), bed baths</li>


            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography ><b>Pharmacological Approach</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>


                <li>Only use if clinically signficant distress/agitation/aggression, when benefits{'>'}harm, and non pharmacological approach failed</li>
                <li>Psychosis: atypical antipsychotic*</li>
                <li>No psychosis: SSRI, trazadone, or atypical antipsychotic*</li>
                <li>Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy</li>
                <li>Pharmacological approach generally not helpful for primary wandering or vocalizing</li>
                <li>Treatment should be evaluated for tapering or discontinuation every 3-6 months</li>
                <li>See antipsychotic table for additional information</li>


              <p><b>Key:</b> ABC: antecedent, behavior, consequence. *Recommended atypical antipsychotics include <br></br>
                risperidone, olanzapine, and aripiprazole according to the 4th Canadian Consensus Conference on <br></br>
                the Diagnosis and Treatment of Dementia</p>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion id="thirdAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><b>ECT & PSYCHOACTIVE MEDICATIONS</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Medication</StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Recommended Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((dataObj, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {dataObj.Medication}
                        </StyledTableCell>
                        <StyledTableCell>{dataObj[`Recommended Action`]}</StyledTableCell>

                      </StyledTableRow>
                    ))}

                  </TableBody>
                </Table>
              </TableContainer><br></br><br></br>
              <p><b>Key:</b> ChEIs:cholinesterase inhibitors; MAOIs: monoamine oxidase inhibitors; *If highly tolerant (and <br></br>high doses), do not taper abruptly due to risk of prolonged seizure </p>


            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
      <Footer /></>);


}
};*/
