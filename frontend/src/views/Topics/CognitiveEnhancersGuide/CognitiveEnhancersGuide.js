import './cognitiveEnhancersGuide.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import CognitiveEnhancersGuideUpdate from './CognitiveEnhancersGuideBackend';

import Footer from '../../Footer/Footer';


export default function CognitiveEnhancersGuide() {

  
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/cognitiveenhancersguide')
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
        CognitiveEnhancersGuideUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
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
          <Typography variant="h3" align="center" gutterBottom>
          <div className='subtitle'>
            Cognitive Enhancers Guide
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
                    <div>

                    <div className="box">
                    <div className="box-content">
                      <strong>Action: </strong>
                      <input
                                  id="`Action`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Action`]}
                                />
                    </div>
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
                      <strong>Dose "initial/monthly increment/maint": </strong>
                      <input
                                  id="`Dose`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Dose (initial/monthly increment/maint)`]}
                                />
                    </div>
                    <div className="box-content" style={{ width: 230 }}>
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
                      <strong>mg/Form supplied: </strong>
                      <input
                                  id="`mg/form supplied`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`mg/form supplied`]}
                                />
                    </div>

                    <div className="box-content">
                      <strong>With food?: </strong>
                      <input
                                  id="`With food?`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`With food?`]}
                                />
                    </div>
                    

                    
                    
                  </div>
                  
                  </div> 
                    )}
                     
                </div>
              );
            })}
          </div>
          <div className="keynote-div">
            <p className='cognitive-notes'>
              <b>Key:</b> AChEI: acetylcholinesterase inhibitor; BuChEI: butyrylcholinesterase inhibitor 
            </p>     
          </div>
        </div>
        <Footer />
      </>
    );
  }
  else{

 
    return (
      <>
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
          <Typography variant="h3" align="center" gutterBottom>
          <div className='subtitle'>
            Cognitive Enhancers Guide
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
                      <strong>Action: </strong>
                      <span>{dataObj['Action']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Half-life: </strong>
                      <span>{dataObj['Half-life']}</span>
                    </div>
                    
                    <div className="box-content">
                      <strong>Dose "initial/monthly increment/maint": </strong>
                      <span>{dataObj['Dose (initial/monthly increment/maint)']}</span>
                    </div>
                    <div className="box-content" style={{ width: 230 }}>
                      <strong>Frequency: </strong>
                      <span>{dataObj['Frequency']}</span>
                    </div>
                    <div className="box-content">
                      <strong>mg/Form supplied: </strong>
                      <span>{dataObj['mg/form supplied']}</span>
                    </div>
                    
                  </div>
                )}
              </div>
                
              );
            })}
          </div>
          <div className="keynote-div">
            <p className='cognitive-notes'>
              <b>Key:</b> AChEI: acetylcholinesterase inhibitor; BuChEI: butyrylcholinesterase inhibitor 
            </p>     
          </div>
        </div>
        <Footer />
      </>
    );
  }
} 
}



