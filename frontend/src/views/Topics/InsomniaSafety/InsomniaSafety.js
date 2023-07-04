import './InsomniaSafety.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";

import Data from "../../searchBar/Data.json";
import Navigation from '../../Navigation/navigation';




export default function InsomniaSafety() {

  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/insomniasafety')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  
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
  {
    return (
      <>
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
          <Typography variant="h3" align="center" gutterBottom>
          Sedatives/Hypnotics Safety Concerns
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
                      <strong>Safety concerns</strong>
                      <span>{dataObj['LIST_HEADERS_Id']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Safety concerns names</strong>
                      <span>{dataObj['Description']}</span>
                    </div>
                    
                    
                  </div>
                )}
              </div>
                
              );
            })}
          </div>
          <footer id="footer">
          <p><b>Key notes: SHYPCLIN_SAF means safety concerns</b> </p>
          </footer>
        </div>
      </>
    );
  }
} 


