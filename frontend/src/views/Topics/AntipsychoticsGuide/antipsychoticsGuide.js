import './antipsychoticsGuide.css';
import * as React from 'react';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
import antipsychoticsGuideUpdate from "./antipsychoticsGuidebackend";

export default function AntipsychoticsGuide() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/antipsychoticsGuide')
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

  const storeValue = (event) => {
    const { name, id, value } = event.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: {
        ...prevValue[name],
        [id]: value,
      },
    }));
  };
  

  const updateValue = async (event) => {
    if (admin) {
      event.preventDefault();
      const { name, id, value } = event.target;
      try {
        await antipsychoticsGuideUpdate(name, id, value);
        fetchData(); // Refresh the data after successful update
      } catch (error) {
        console.error(error);
        alert('Failed to update!');
      }
    } else {
      alert('You must be an administrator to edit');
    }
  };
  
  const antipsychoticsGuideUpdate = async (name, column, value) => {
    try {
      const response = await axios.post('http://localhost:8887/api/antipsychoticsGuide/update', {
        name,
        column,
        value
      });
      console.log(response.data); 
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  if (Object.keys(data).length > 0) {
    // Editable Fields
    if (admin) {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Antipsychotics Guide
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
                    </button>z

                    {isDrugSelected && (
                      <div className="box">
                      <div className="box-content">
                        <strong>Approx equiv dose:</strong>
                        <input
                         type="text"
                         name={dataObj.Name}
                         id="Approx. equiv. dose"
                         value={value[dataObj.Name]?.['Approx. equiv. dose'] || ''}
                         onChange={storeValue}
                         onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>Half-Life:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="Half-life"
                          value={value[dataObj.Name]?.['Half-life'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>Frequency:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          value={value[dataObj.Name]?.['Frequency'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>Tab Strength/Form supplied:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="Tab Strength/Form Supplied"
                          value={value[dataObj.Name]?.['Tab Strength/Form Supplied'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>NPS:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="NPS"
                          value={value[dataObj.Name]?.['NPS'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>PP:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="PP"
                          value={value[dataObj.Name]?.['PP'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>MDE (AD augment):</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          value={value[dataObj.Name]?.['MDE (ADaugment)'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>MDE (w.psychosis):</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="MDE (w.psychosis)"
                          value={value[dataObj.Name]?.['MDE (w.psychosis)'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>Delirium:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="Delirium"
                          value={value[dataObj.Name]?.['Delirium'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>EO-SCZ:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="EO-SCZ"
                          value={value[dataObj.Name]?.['EO-SCZ'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                      <div className="box-content">
                        <strong>LO-SCZ:</strong>
                        <input
                          type="text"
                          name={dataObj.Name}
                          id="LO-SCZ"
                          value={value[dataObj.Name]?.['LO-SCZ'] || ''}
                          onChange={storeValue}
                          onBlur={updateValue}
                        />
                      </div>
                    </div>
                    )}
                  </div>
                );
              })}
            </div>
            <footer id="footer">
              <b>Key:</b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset
              schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis;
              †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites;
              **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data. <b>NOTES:</b> doses may not
              reflect manufacturers' recommendations but are based on clinical literature and opinion. Half lives are estimates based on adult data
              and in older adults they can often be increased up to 170%.
            </footer>
          </div>
        </>
      );
    }
    // Non-Editable Fields
    else {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Antipsychotics Guide
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
                        <strong>Approx equiv dose:</strong>
                        <span>{dataObj['Approx. equiv. dose']}</span>
                      </div>
                      <div className="box-content">
                        <strong>Half-Life:</strong>
                        <span>{dataObj['Half-life']}</span>
                      </div>
                      
                      <div className="box-content">
                        <strong>Frequency:</strong>
                        <span>{dataObj['Frequency']}</span>
                      </div>
                      <div className="box-content" style={{ width: 230 }}>
                        <strong>Tab Strength/Form Supplied:</strong>
                        <span>{dataObj['Tab Strength/Form Supplied']}</span>
                      </div>
                      <div className="box-content">
                        <strong>NPS:</strong>
                        <span>{dataObj['NPS']}</span>
                      </div>
                      <div className="box-content">
                        <strong>PP:</strong>
                        <span>{dataObj['PP']}</span>
                      </div>
                      <div className="box-content">
                        <strong>MDE (AD augment):</strong>
                        <span>{dataObj['MDE (ADaugment)']}</span>
                      </div>
                      <div className="box-content">
                        <strong>MDE (w.psychosis):</strong>
                        <span>{dataObj['MDE (w.psychosis)']}</span>
                      </div>
                      <div className="box-content">
                        <strong>Delirium:</strong>
                        <span>{dataObj['Delirium']}</span>
                      </div>
                      <div className="box-content">
                        <strong>EO-SCZ:</strong>
                        <span>{dataObj['EO-SCZ']}</span>
                      </div>
                      <div className="box-content">
                        <strong>LO-SCZ:</strong>
                        <span>{dataObj['LO-SCZ']}</span>
                      </div>
                    </div>
                  )}
                </div>
                  
                );
              })}
            </div>
            <footer id="footer">
              <b>Key:</b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset
              schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis;
              †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites;
              **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data. <b>NOTES:</b> doses may not
              reflect manufacturers' recommendations but are based on clinical literature and opinion. Half lives are estimates based on adult data
              and in older adults they can often be increased up to 170%.
            </footer>
          </div>
        </>
      );
    }
  } else {
    return null;
  }
}