import './InsomniaDeprescribing.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";


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
            Sedatives/Hypnotics Guide
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
          <footer id="footer">
          
<p><b>Key:</b> BZRA: benzodiazepine and z-drugs (benzodiazepine agonists) </p>
          </footer>
        </div>
      </>
    );
  }
} 


