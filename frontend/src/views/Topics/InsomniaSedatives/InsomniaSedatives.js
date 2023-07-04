import './InsomniaSedatives.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';

import Data from "../../searchBar/Data.json";




export default function InsomniaSedatives() {

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:8887/api/insomniasedatives')
  //       .then(response => {
  //         setData(response.data)
  //         console.log(response.data[0]);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }, []);
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/insomniasedatives')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState('');

  const store_value = (event) => {
    setValue(event.target.value);
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
                    {dataObj.Name}
                  </button>

                  {isDrugSelected && (
                  <div className="box">
                    <div className="box-content">
                      <strong>Dose equiv.</strong>
                      <span>{dataObj['Dose equiv.']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Time to peak in plasma</strong>
                      <span>{dataObj['Time to peak in plasma']}</span>
                    </div>
                    
                    <div className="box-content">
                      <strong>Half-life</strong>
                      <span>{dataObj['Half-life']}</span>
                    </div>
                    <div className="box-content" style={{ width: 230 }}>
                      <strong>Avg dose range (mg/day)</strong>
                      <span>{dataObj['Avg dose range (mg/day)']}</span>
                    </div>
                    <div className="box-content">
                      <strong>mg/Form supplied</strong>
                      <span>{dataObj['mg/Form supplied']}</span>
                    </div>
                    
                  </div>
                )}
              </div>
                
              );
            })}
          </div>
          <footer id="footer">
          <p><b>Key:</b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime. <b>NOTES</b>: doses may not reflect manufacturer's recommendations but are based on research and/or expert opinion.  All sedatives should be used sparingly in the older adults and in people with liver disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio. </p>
          </footer>
        </div>
      </>
    );
  }
} 

