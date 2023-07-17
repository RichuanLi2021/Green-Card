import * as React from 'react';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
import MoodStabilizersUpdate from "./moodStabilizersbackend";
import './MoodStabilizers.css';
import {MoodstabilizersUpdate, submitDrug }from './moodStabilizersbackend';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Footer from '../../Footer/Footer';


export default function MoodStabilizers() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/moodstabilizers')
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

  //add drug components shifted to this page itself
  const [halfLife, sethalfLife] = useState('');
  const [doseInitial, setdoseInitial] = useState('');
  const [frequency, setFrequency] = useState('');
  const [mgFormSupplied, setmgFormSupplied] = useState('');
  const [monitoringLevel, setmonitoringLevel] = useState('');

  const handleHalfLife = (event) => {
    sethalfLife(event.target.value);
  };

  const handleDoseInitial = (event) => {
    setdoseInitial(event.target.value);
  };

  const handleFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const handlemgFormSupplied = (event) => {
    setmgFormSupplied(event.target.value);
  };

  const handlemonitoringLevel = (event) => {
    setmonitoringLevel(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ halfLife, doseInitial, frequency, mgFormSupplied, monitoringLevel });
    submitDrug(halfLife, doseInitial, frequency, mgFormSupplied, monitoringLevel)
      .then((data) => {
        window.alert('Drug was added Successfully!');
      
      })
      .catch((error) => {
        console.error(error);
        window.alert('Failed to submit the Drug!');
      });
  };


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
        MoodStabilizersUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:"+ event.target.value);
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

  const handleDelete = async (Name) =>{
    if(window.confirm('Are you sure you want to delete this record?')){
    try{
      
      await axios.delete('http://localhost:8887/api/delete/'+Name)
      window.alert('Drug Deleted Successfully !')
      window.location.reload();
    }catch(err) {
      console.log(err);
    }
  }
  }
  
  if (Object.keys(data).length > 0) {
    // Editable Fields
    if (admin) {
      return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              <div className='subtitle-mood'>
                Mood Stabilizers Guide
              </div>
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
                      {dataObj.Name}

                      <button style={{background:'none',border:'none',cursor:'pointer'}} onClick={e => handleDelete(dataObj.Name)} > <span class="material-symbols-outlined">
delete
</span></button>
                    </button>
    
                    {isDrugSelected && (
                      <div className="box">

                        <div className="box-content">
                        <strong>Half-life: </strong>
                        <input
                                id="`Half-life`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Half-life`]}
                              />
                        </div>

                        <div className="box-content">
                          <strong>Dose (mg/day) Initial | Maint. | Max: </strong>
                           <input
                                id="`Dose (mg/day) Initial | Maint. | Max.`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}
                              />
                        </div>
    
                        <div className="box-content">
                          <strong>Frequency: </strong>
                           <input
                                id="`Frequency`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Frequency`]}
                              />
                        </div>
                        
                        <div className="box-content">
                          <strong>mg/Form Supplied: </strong>
                              <input
                                id="`mg/Form Supplied`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`mg/Form Supplied`]}
                              />
                        </div>
                        <div className="box-content">
                          <strong>Monitoring Level: </strong>
                              <input
                                id="`Monitoring Level`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Monitoring Level`]}
                              />
                        </div>

                    </div>
                    )}
                  </div>
                );
              })}
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
              label="Half-life"
              variant="filled"
              value={halfLife}
              onChange={handleHalfLife}
              
              
              
              required
            />
            
            </Box>
            <Box >
            <TextField
              label="Dose (mg/day) Initial | Maint. | Max."
              variant="filled"
              value={doseInitial}
              onChange={handleDoseInitial}
              
             
              type="text"
              
              
              required
            />
            </Box>
            <Box >
            <TextField
              label="Frequency"
              variant="filled"
              value={frequency}
              onChange={handleFrequency}
              
              
              
              required
            />
            </Box>

            <Box >
            <TextField
              label="mg/Form Supplied"
              variant="filled"
              value={mgFormSupplied}
              onChange={handlemgFormSupplied}
              name="mgFormSupplied"
            
              multiline
              
              
              required
            />
             </Box>

            <Box >
            <TextField
              label="Monitoring Level"
              variant="filled"
              value={monitoringLevel}
              onChange={handlemonitoringLevel}
              name="monitoringLevel"
             
              multiline
              
              
              required
            />
            </Box>

             <Box >
            <TextField
              label="mg Form supplied"
              variant="filled"
              value={mgFormSupplied}
              onChange={handlemgFormSupplied}
              name="mgFormsupplied"
              
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

         
            
        </div>  {/*  grid container ends here*/ }
        
            <div className="mood-footer">
            <p className='mood-notes'>
            <b>Key: </b> †dosage determined by concomitant drugs used (see Lamictal monograph for details). er tab: slow release. <br /> <br />
            <b>NOTES: </b> doses may not reflect manufacturers' recommendations, they are based on clinical literature and experience; most drugs in this category do not have a formal mood stabilizer indication. Levels may be useful for investigating toxicity and adherence, in addition to achieving a therapeutic dose. ^half-life of active metabolite. *due to risks for drug-drug interactions and adverse effects 
            </p>
            </div>
          
          <Footer />
        </>
      );
    }
    
    // Non-Editable Fields
    else {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
            <div className='subtitle-mood'>
              Mood Stabilizers Guide
              </div>
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
                      {dataObj.Name}
                    </button>

                    {isDrugSelected && (
                    <div className="box">
                      <div className="box-content">
                        <strong>Half-life: </strong>
                        <span>{dataObj[`Half-life`]}</span>
                      </div>
                      <div className="box-content">
                        <strong>Dose (mg/day) Initial | Maint. | Max.: </strong>
                        <span>{dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}</span>
                      </div>
                      
                      <div className="box-content">
                        <strong>Frequency: </strong>
                        <span>{dataObj[`Frequency`]}</span>
                      </div>

                      <div className="box-content">
                        <strong>mg/Form Supplied: </strong>
                        <span>{dataObj[`mg/Form Supplied`]}</span>
                      </div>
                      <div className="box-content">
                        <strong>Monitoring Level: </strong>
                        <span>{dataObj[`Monitoring Level`]}</span>
                      </div>
                    </div>
                  )}
                </div>
                  
                );
              })}
            </div>
            <div className="mood-footer">
            <p className='mood-notes'>
            <b>Key: </b> †dosage determined by concomitant drugs used (see Lamictal monograph for details). er tab: slow release. <br /> <br />
            <b>NOTES: </b> doses may not reflect manufacturers' recommendations, they are based on clinical literature and experience; most drugs in this category do not have a formal mood stabilizer indication. Levels may be useful for investigating toxicity and adherence, in addition to achieving a therapeutic dose. ^half-life of active metabolite. *due to risks for drug-drug interactions and adverse effects 
            </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  } 
}


