import './CognitiveEnhancersClinical.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import CognitiveEnhancersClinicalUpdate from './CognitiveEnhancersClinicalBackend';

import Footer from '../../Footer/Footer';


export default function CognitiveEnhancersClinical() {

  
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/cognitiveenhancersclinical')
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
        CognitiveEnhancersClinicalUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
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
          <div className="subtitle">
            Cognitive Enhancers Clinical Guide
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
                    {dataObj.Description}
                  </button>

                  {isDrugSelected && (
                    <div>

                    <div className="box">
                    <div className="box-content">
                      <input
                                  id="`LIST_HEADERS_ID`"
                                  name={dataObj.Description}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`LIST_HEADERS_Id`]}
                                />
                    </div>
                    
                    <div className="box-content">
                      <strong>Description</strong>
                      <input
                                  id="`Description`"
                                  name={dataObj.Description}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Description`]}
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
          <div className="cognitive-footer">
            <p className='cognitive-notes'>
              <b>Key: </b>COG_CONTRA means "Contraindications", COG_ACHEI means "Adverse Effects (AChEI)", COG_ACHEI_ME means "Adverse Effects (Memantine)", COG_BASELINE means "Baseline",
              COG_MONITOR means "monitoring" 
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
          <div className="subtitle">
            Cognitive Enhancers Clinical Guide
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
                    {dataObj.Description}
                  </button>

                  {isDrugSelected && (
                  <div className="box">
                     <div className="box-content">
                      <span>{dataObj['LIST_HEADERS_Id']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Description: </strong>
                      <span>{dataObj['Description']}</span>
                    </div>
                    
                   
                    
                  </div>
                )}
              </div>
                
              );
            })}
          </div>
          <div className="cognitive-footer">
            <p className='cognitive-notes'>
              <b>Key: </b>COG_CONTRA means "Contraindications", COG_ACHEI means "Adverse Effects (AChEI)", COG_ACHEI_ME means "Adverse Effects (Memantine)", COG_BASELINE means "Baseline",
              COG_MONITOR means "monitoring" 
          </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
} 
}




