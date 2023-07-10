import './InsomniaSedatives.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import InsomniaSedativesUpdate from './InsomniaSedativesBackend';




export default function InsomniaSedatives() {

  
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
        InsomniaSedativesUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
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

  // const handleDelete = async (Name) =>{
  //   try{
  //     await axios.delete('http://localhost:8887/api/delete/'+Name)
  //     window.alert('Drug Deleted Successfully !')
  //   }catch(err) {
  //     console.log(err);
  //   }
  // }

  if (Object.keys(data).length > 0)
  {if (admin) {
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
                    {/* <button onClick={e => handleDelete(dataObj.Name)}> Delete</button> */}
                  </button>

                  {isDrugSelected && (
                    <div>

                    <div className="box">
                    <div className="box-content">
                      <strong>Dose equiv.</strong>
                      <input
                                  id="`Dose equiv.`"

                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Dose equiv.`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong>Time to peak in plasma</strong>
                      <input
                                  id="`Time to peak in plasma`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Time to peak in plasma`]}
                                />
                    </div>
                    
                    <div className="box-content">
                      <strong>Half-life</strong>
                      <input
                                  id="`Half-life`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Half-life`]}
                                />
                    </div>
                    <div className="box-content" style={{ width: 230 }}>
                      <strong>Avg dose range (mg/day)</strong>
                      <input
                                  id="`Avg dose range (mg/day)`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Avg dose range (mg/day)`]}
                                />
                    </div>
                    <div className="box-content">
                      <strong>mg/Form supplied</strong>
                      <input
                                  id="`mg/Form supplied`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`mg/Form supplied`]}
                                />
                    </div>


                    

                    
                    
                  </div>
                  
                  </div> 
                    )}
                     
                </div>
              );
            })}
          </div>
          <button className="drug-button" > <a href='http://localhost:3000/AddDrug'>Add new Drug</a> </button>
          <footer id="footer">
          <p><b>Key:</b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime. <b>NOTES</b>: doses may not reflect manufacturer's recommendations but are based on research and/or expert opinion.  All sedatives should be used sparingly in the older adults and in people with liver disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio. </p>
          
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
}
