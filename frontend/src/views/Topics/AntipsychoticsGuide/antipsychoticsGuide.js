import './antipsychoticsGuide.css';
import * as React from 'react';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
import antipsychoticsGuideUpdate from "./antipsychoticsGuidebackend";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Footer from '../../Footer/Footer';

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
        antipsychoticsGuideUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
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


  if (Object.keys(data).length > 0) {
    if (admin) {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div className="subHeader" style={{ marginTop: '2rem', padding: '0 1rem' }}>
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
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>General Information</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className="accordion-content">
                                <div className="box-content">
                                  <strong>Approx equiv dose:</strong>
                                  <input
                                    id="`Approx. equiv. dose`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Approx. equiv. dose`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Half-Life:</strong>
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
                                  <strong>Frequency:</strong>
                                  <input
                                    id="`Frequency`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Frequency`]}
                                  />
                                </div>
                                <div className="box-content" style={{ width: 230 }}>
                                  <strong>Tab Strength/Form Supplied:</strong>
                                  <input
                                    id="`Tab Strength/Form Supplied`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Tab Strength/Form Supplied`]}
                                  />
                                </div>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </div>
  
                        <div className="box-content">
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>Recommended Dosing</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className="accordion-content">
                                <div className="box-content">
                                  <strong>Neuropsychiatric symptoms of dementia:</strong>
                                  <input
                                    id="`NPS`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`NPS`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Parkinson's psychosis:</strong>
                                  <input
                                    id="`PP`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`PP`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Major depressive disorder (antidepressant augment):</strong>
                                  <input
                                    id="`MDE (ADaugment)`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`MDE (ADaugment)`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Major depressive disorder (w.psychosis):</strong>
                                  <input
                                    id="`MDE (w.psychosis)`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`MDE (w.psychosis)`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Delirium:</strong>
                                  <input
                                    id="`Delirium`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Delirium`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Early-onset schizophrenia:</strong>
                                  <input
                                    id="`EO-SCZ`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`EO-SCZ`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Late-onset schizophrenia:</strong>
                                  <input
                                    id="`LO-SCZ`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`LO-SCZ`]}
                                  />
                                </div>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="antipsychoticsGuide-footer">
            <p className="footer-notes">
              <b>Key: </b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset
              schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis;
              †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites;
              **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data.
              <br /> <br /> 
              <b>NOTES: </b> doses may not
              reflect manufacturers' recommendations but are based on clinical literature and opinion. Half-lives are estimates based on adult data
              and in older adults they can often be increased up to 170%.
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
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>General Information</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          
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
                              <strong>Tablet Strength/Form Supplied:</strong>
                              <span>{dataObj['Tab Strength/Form Supplied']}</span>
                            </div>
                          
                        </AccordionDetails>
                      </Accordion>

                      <Accordion >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>Recommended Dosing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          
                            <div className="box-content">
                              <strong>Neuropsychiatric symptoms of dementia:</strong>
                              <span>{dataObj['NPS']}</span>
                            </div>
                            <div className="box-content">
                              <strong>Parkinson's psychosis:</strong>
                              <span>{dataObj['PP']}</span>
                            </div>
                            <div className="box-content">
                              <strong>
                                Major depressive disorder (antidepressant augment):
                              </strong>
                              <span>{dataObj['MDE (ADaugment)']}</span>
                            </div>
                            <div className="box-content">
                              <strong>Major depressive disorder (w.psychosis):</strong>
                              <span>{dataObj['MDE (w.psychosis)']}</span>
                            </div>
                            <div className="box-content">
                              <strong>Delirium:</strong>
                              <span>{dataObj['Delirium']}</span>
                            </div>
                            <div className="box-content">
                              <strong>Early-onset schizophrenia:</strong>
                              <span>{dataObj['EO-SCZ']}</span>
                            </div>
                            <div className="box-content">
                              <strong>Late-onset schizophrenia:</strong>
                              <span>{dataObj['LO-SCZ']}</span>
                            </div>
                          
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="antipsychoticsGuide-footer">
            <p className="footer-notes">
              <b>Key: </b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset schizophrenia; LO-SCZ: late-onset
              schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis;
              †0.25 of adult equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites;
              **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data.
              <br /> <br /> 
              <b>NOTES: </b> doses may not
              reflect manufacturers' recommendations but are based on clinical literature and opinion. Half-lives are estimates based on adult data
              and in older adults they can often be increased up to 170%.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
    }
  }
}