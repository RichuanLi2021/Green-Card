import './PsychotropicMonitoringSection.css';
import * as React from 'react';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
import { PsychotropicMonitoringUpdate, submitDrug } from "./PsychotropicMonitoringbackend";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../../Footer/Footer';



export default function PsychotropicMonitoringSection() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/psychotropicmonitoringsection')
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


  const [drugName, setdrugName] = useState('');
  const [Antipsychotics, setAntipsychotics] = useState('');
  const [Lithium, setLithium] = useState('');
  const [Valproate, setValproate] = useState('');

  const handleDrugName = (event) => {
    setdrugName(event.target.value);
  };

  const handleAntipyschotics = (event) => {
    setAntipsychotics(event.target.value);
  };

  const handleLitihum = (event) => {
    setLithium(event.target.value);
  };

  const handleValproate = (event) => {
    setValproate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ drugName, Antipsychotics, Lithium, Valproate });
    submitDrug(drugName, Antipsychotics, Lithium, Valproate)
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
        PsychotropicMonitoringUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:" + event.target.value);
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

  if (Object.keys(data).length > 0) {
    // Editable Fields
    if (admin) {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              <div className='subtitle'>
                Psychotropic Monitoring
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
                          <strong>Antipsychotics: </strong>
                          <input id="`Antipsychotics`"
                            name={dataObj.Name}
                            type='text'
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Antipsychotics`]} />
                        </div>

                        <div className="box-content">
                          <strong>Lithium: </strong>
                          <input id="`Lithium`"
                            name={dataObj.Name}
                            type='text'
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Lithium`]} />
                        </div>

                        <div className="box-content">
                          <strong>Valproate: </strong>
                          <input id="`Valproate`"
                            name={dataObj.Name}
                            type='text'
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Valproate`]} />
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
                    label="Drug Name: "
                    variant="filled"
                    value={drugName}
                    onChange={handleDrugName}
                    required
                  />

                </Box>
                <Box >
                  <TextField
                    label="Antipyschotics:"
                    variant="filled"
                    value={Antipsychotics}
                    onChange={handleAntipyschotics}
                    type="text"
                    multiline
                    required
                  />
                </Box>

                <Box >
                  <TextField
                    label="Litihium:"
                    variant="filled"
                    value={Lithium}
                    onChange={handleLitihum}
                    multiline
                    required
                  />
                </Box>

                <Box >
                  <TextField
                    label="Valproate:"
                    variant="filled"
                    value={Valproate}
                    onChange={handleValproate}
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
            <div className="psychotropic-footer">
              <p className='psychotropic-notes'>
                <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <br /> <br />
                <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment
              </p>
            </div>
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
              <div className='subtitle'>
                Psychotropic Monitoring
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
                          <strong>Antipsychotics: </strong>
                          <span>{dataObj[`Antipsychotics`]}</span>
                        </div>
                        <div className="box-content">
                          <strong>Lithium: </strong>
                          <span>{dataObj[`Lithium`]}</span>
                        </div>

                        <div className="box-content">
                          <strong>Valproate: </strong>
                          <span>{dataObj[`Valproate`]}</span>
                        </div>

                      </div>
                    )}
                  </div>

                );
              })}
            </div>
            <div className="psychotropic-footer">
              <p className='psychotropic-notes'>
                <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <br /> <br />
                <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}

