import './CognitiveEnhancersGuideCont.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import CognitiveEnhancersGuideContUpdate from './CognitiveEnhancersGuideContBackend';




export default function CognitiveEnhancersGuideCont() {

  
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/cognitiveenhancersguidecont')
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
        CognitiveEnhancersGuideContUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
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
            Cognitive Enhancers Guide continued.
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
                      <strong>MCI</strong>
                      <input
                                  id="`MCI`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`MCI`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong>Mild-mod Alz</strong>
                      <input
                                  id="`Mild-mod Alz`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`mild-mod Alz`]}
                                />
                    </div>
                    
                    <div className="box-content">
                      <strong>Severe Alz</strong>
                      <input
                                  id="`Severe Alz`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Severe Alz`]}
                                />
                    </div>
                    <div className="box-content" style={{ width: 230 }}>
                      <strong>Mixed (Alz+vas)</strong>
                      <input
                                  id="`Mixed (Alz+vas)`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Mixed (Alz+vas)`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong>Vascular</strong>
                      <input
                                  id="`Vascular`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Vascular`]}
                                />
                    </div>

                    <div className="box-content">
                      <strong>LBD</strong>
                      <input
                                  id="`LBD`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`LBD`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong>FTD</strong>
                      <input
                                  id="`FTD`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`FTD`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong>PD</strong>
                      <input
                                  id="`PD`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`PD`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong>DSD</strong>
                      <input
                                  id="`DSD`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`DSD`]}
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
          <p><b>Key:</b> DSD: down syndrome dementia; FTD: frontotemporal dementia; LBD: lewy body dementia; MCI: mild cognitive impairment; N: not indicated; PD: parkinson's disease; Y: indicated. </p>
          
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
          <Typography variant="h3" align="center" gutterBottom>
            Cognitive Enhancers Guide continued.
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
                      <strong>MCI</strong>
                      <span>{dataObj['MCI']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Mild-mod Alz</strong>
                      <span>{dataObj['mild-mod Alz']}</span>
                    </div>
                    
                    <div className="box-content">
                      <strong>Severe Alz</strong>
                      <span>{dataObj['Severe Alz']}</span>
                    </div>
                    <div className="box-content" style={{ width: 230 }}>
                      <strong>Mixed (Alz+vas)</strong>
                      <span>{dataObj['Mixed (Alz+vas)']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Vascular</strong>
                      <span>{dataObj['Vascular']}</span>
                    </div>
                    <div className="box-content">
                      <strong>LBD</strong>
                      <span>{dataObj['LBD']}</span>
                    </div>
                    <div className="box-content">
                      <strong>FTD</strong>
                      <span>{dataObj['FTD']}</span>
                    </div>
                    <div className="box-content">
                      <strong>PD</strong>
                      <span>{dataObj['PD']}</span>
                    </div>
                    <div className="box-content">
                      <strong>DSD</strong>
                      <span>{dataObj['DSD']}</span>
                    </div>
                    
                  </div>
                )}
              </div>
                
              );
            })}
          </div>
          <footer id="footer">
          <p><b>Key:</b> DSD: down syndrome dementia; FTD: frontotemporal dementia; LBD: lewy body dementia; MCI: mild cognitive impairment; N: not indicated; PD: parkinson's disease; Y: indicated. </p>
          
          </footer>
        </div>
      </>
    );
  }
} 
}



