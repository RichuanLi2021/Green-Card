import './InsomniaDeprescribing.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import {InsomniaDeprescribingUpdate,submitDrug} from "./InsomniaDeprescribingBackend";
import Footer from '../../Footer/Footer';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function InsomniaDeprescribing() {

  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/insomniadeprescribing')
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


  const [duration, setDuration] = useState('');
  const [doseReduction, setdoseReduction] = useState('');
  const [interval, setInterval] = useState('');

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  const handledoseReduction = (event) => {
    setdoseReduction(event.target.value);
  };

  const handleInterval = (event) => {
    setInterval(event.target.value);
  };

  const store_value = (event) => {
    setValue(event.target.value);
  }
  //calls update query when an input was selected and is not anymore (if the value actually changed)
  const update_value = (event) => {
    if (admin) {
      console.log(event.target.name,event.target.value,event.target.column);
      if (event.target.value !== value) {
        event.preventDefault();
        InsomniaDeprescribingUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
          alert('Data successfully updated! \nDrug:'+event.target.name + "\nColumn:" + event.target.id + "\nNew Value:"+ event.target.value);
          window.location.reload();
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

  const handleDelete = async (Duration) =>{
    if(window.confirm('Are you sure you want to delete this record?')){
    try{
      
      await axios.delete('http://localhost:8887/api/deprescribing/delete/'+Duration)
      window.alert('Drug Deleted Successfully !')
      window.location.reload();
    }catch(err) {
      console.log(err);
    }
  }
  }

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ duration, doseReduction, interval });
    submitDrug(duration, doseReduction, interval)
      .then((data) => {
        window.alert('Drug was added Successfully!');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert('Failed to submit the Drug!');
      });
  };
  


  if (Object.keys(data).length > 0)

  { if (admin){
    return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
          <Typography className='subtitle' gutterBottom>
          Deprescribing Sedatives/Hypnotics
          </Typography>

          <div className="grid-container">
            {Object.keys(data).map((id) => {
              const dataObj = data[id];
              const isDrugSelected = selectedDrugs.includes(dataObj);
              return (
                <div  className="grid-item" key={id}>
                  <button
                    onClick={() => handleDrugClick(dataObj)}
                    className={`drug-button ${isDrugSelected ? 'active' : ''}`} 
                  >
                    BZRA {dataObj.Duration} weeks

                     <button style={{background:'none',border:'none',cursor:'pointer'}} onClick={e => handleDelete(dataObj.Duration)} > <span class="material-symbols-outlined">
delete
</span></button> 
                  </button>
                  
                  
                  {isDrugSelected && (
                    <div>

                    <div className="box">
                    <div className="box-content">
                      <strong>Duration: </strong>
                      <input
                                  id="`Duration`"

                                  name={dataObj.Duration}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Duration`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong> Dose Reduction Schedule Duration (weeks) </strong>
                      <input
                                  id="`Dose Reduction Schedule Duration (weeks)`"
                                  name={dataObj[`Dose Reduction Schedule Duration (weeks)`]}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Dose Reduction Schedule Duration (weeks)`]}
                                />
                    </div>
                    
                    <div className="box-content">
                      <strong>Interval Between Dose Reductions (weeks): </strong>
                      <input
                                  id="`Interval Between Dose Reductions (weeks)`"
                                  name={dataObj[`Interval Between Dose Reductions (weeks)`]}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Interval Between Dose Reductions (weeks)`]}
                                />
                    </div>
                    

                  </div>
                </div> 
                )}  

              </div>
                
              );
            })}
            
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
          <Box >
            <TextField
              label="Duration"
              variant="filled"
              value={duration}
              onChange={handleDuration}
              
              
              
              required
            />
            
            </Box>
            <Box >
            <TextField
              label="Dose Reduction Schedule Duration (weeks)"
              variant="filled"
              value={doseReduction}
              onChange={handledoseReduction}
              
             
              type="text"
              
              
              required
            />
            </Box>
            <Box >
            <TextField
              label="Interval Between Dose Reductions (weeks)"
              variant="filled"
              value={interval}
              onChange={handleInterval}
              
              
              
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
      
         <div className="keynote-div">
            <p className='keynote'>
              <b>Key: </b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime. 
              <br/> <br />
              <b>NOTES: </b> doses may not reflect manufacturer's recommendations but are based on research and/or expert opinion.  All sedatives should be used sparingly in the older adults and in people with liver disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio. 
            </p>
          </div>
        </div>
        <Footer />

    
      </>
    );
          }
  }
} 

/* <>
<Navigation />
<SearchBar placeholder="Search" data={Data} />
<div style={{ marginTop: '2rem', padding: '0 1rem' }}>
  <Typography variant="h3" align="center" gutterBottom>
  <div className='subtitle'>
    Deprescribing Sedatives/Hypnotics
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
         BZRA {dataObj['Duration of BZRA use (months)']} weeks
          </button>

          {isDrugSelected && (
          <div className="box">
            <div className="box-content">
              <strong>Dose Reduction Schedule Duration (weeks)</strong>
              <span>{dataObj['Dose Reduction Schedule Duration (weeks)']}</span>
            </div>
            <div className="box-content">
              <strong>Interval Between Dose Reductions (weeks)</strong>
              <span>{dataObj['Interval Between Dose Reductions (weeks)']}</span>
            </div>
            
            
            
          </div>
        )}
      </div>
        
      );
    })}
  </div>
  <div className="insomnia-footer">
    <p className='insomnia-notes'>
      <b>Key: </b> BZRA: benzodiazepine and z-drugs (benzodiazepine agonists) 
    </p>
  </div>
</div>
<Footer />
</> */


