import * as React from 'react';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AntidepressantGuideUpdate from "./AntidepressantGuideController.js";
import './AntidepressantsGuide.css';
import Footer from '../../Footer/Footer';
import Search from '../../Search/Search';
import { useNavigate } from "react-router-dom";

export default function MoodStabilizers() { 

  const fontStyle = { 
    fontSize: '18px'
  };  

  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/antidepressantguide")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const admin = localStorage.getItem('admin');

  
  const [newDrug, setNewDrug] = useState({
    Name: "",
    Half_life: "",
    Primary_NT: "",
    Dose: "",
    Frequency: "",
    supplied: "",
  });

  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };
  
  const handleInputChange = (e) => {
    setNewDrug({ ...newDrug, [e.target.name]: e.target.value });
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
        AntidepressantGuideUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:"+ event.target.value);
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
  
    // addDrug function
    const addDrug = (drugData) => {
      if (admin) {
        axios
          .post(process.env.REACT_APP_BACKEND_URL + "/api/AntidepressantGuide/add", drugData)
          .then((response) => {
            alert("Data successfully added! \nDrug:" + drugData.Name + drugData.Half_life);
            fetchData(); // Refresh the data after the new drug is added.
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to add drug!");
          });
      } else {
        alert("You must be an administrator to add a drug");
      }
    };

    const handleDelete = async (Name) => {
      if (window.confirm("Are you sure you want to delete this record?")) {
        try {
          console.log(Name);
          await axios.delete(process.env.REACT_APP_BACKEND_URL + "/api/AntidepressantGuide/delete/" + Name);
          alert("Data deleted succesfully! \nDrug:" + Name);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
            <Typography id='topicHeader' gutterBottom>
            Antidepressant Guide
            </Typography>
    
            <div className="grid-container" id="antidepressant-grid">
              {Object.keys(data).map((id) => {
                const dataObj = data[id];
                const isDrugSelected = selectedDrugs.includes(dataObj);
                return (
                  <div className="grid-item drug-display" key={id}>
                    <button
                      onClick={() => handleDrugClick(dataObj)}
                      className={`drug-button ${isDrugSelected ? 'active' : ''}`}
                    >
                      {dataObj.Name}
                      <button
                        style={{ background: "none", border: "none", cursor: "pointer" }}
                        onClick={(e) => handleDelete(dataObj.Name)}
                      >
                        <span class="material-symbols-outlined">delete</span>
                      </button>
                    </button>
    
                    {isDrugSelected && (
                      <div className="box drug-box">
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
                        <strong>Primary NT: </strong>
                        <input
                          id="`Primary NT`"
                          name={dataObj.Name}
                          type="text"
                          onFocus={store_value}
                          onBlur={update_value}
                          defaultValue={dataObj[`Primary NT`]}
                        />
                        </div>

                        <div className="box-content">
                          <strong>Dose (mg/day) Initial | Maint. | Max: </strong>
                           <input
                                id="`Dose (mg/day) Initial | Maint. | Max.`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}
                              />
                        </div>
    
                        <div className="box-content">
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
                          <strong>mg/Form Supplied: </strong>
                              <input
                                id="`mg/Form Supplied`"
                                name={dataObj.Name}
                                type="text"
                                onFocus={store_value}
                                onBlur={update_value}
                                defaultValue={dataObj[`mg/Form Supplied`]}
                              />
                        </div>
                    </div>
                    )}
                  </div>
                );
              })}
              <div>
                <button onClick={() => setFormVisible(!formVisible)} className="button-style">
                  {formVisible ? "Cancel" : "Add Drug"}
                </button>
                {formVisible && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      addDrug(newDrug);
                      setFormVisible(false);
                    }}
                    className="form-style"
                  >
                    <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    className="input-style"
                    />
                    <input
                    type="text"
                    name="Half_life"
                    placeholder="Half-life"
                    onChange={handleInputChange}
                    className="input-style"
                    style={{ fontSize: '20px'}}
                    />
                    <input
                    type="text"
                    name="Primary_NT"
                    placeholder="Primary NT"
                    onChange={handleInputChange}
                    className="input-style"
                    style={{ fontSize: '16px'}}
                    />
                    <input
                    type="text"
                    name="Dose"
                    placeholder="Dose (mg/day) Initial | Maint. | Max."
                    onChange={handleInputChange}
                    className="input-style"
                    />
                    <input
                    type="text"
                    name="Frequency"
                    placeholder="Frequency"
                    onChange={handleInputChange}
                    className="input-style"
                    />
                    <input
                    type="text"
                    name="supplied"
                    placeholder="mg/Form Supplied"
                    onChange={handleInputChange}
                    className="input-style"
                    />
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
                  )}
              </div>
            </div>
            
            <div className='keynote-div'>
              <p className='keynote'><b>Key:</b> 5HT: serotonin; DA: dopamine; NaSSA: noradrenaline serotonin specific antidepressant; NDRI:
              noradrenaline dopamine reuptake inhibitor; NT: neurotransmitter; NA: noradrenaline; SARI: serotonin
              antagonist & reuptake inhibitor; SSRI: selective serotonin reuptake inhibitor; TCA: tricyclic
              antidepressant (2°&3°: secondary and tertiary amines); xl, sr & er: slow release; †
              therapeutic levels
              available and useful; ^ accounts for half life of active metabolite; **preferred choice based on existing
              evidence; ∅ less appropriate due to long half life; ♯ less appropriate due to anticholinergic activity.
              <b>NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical literature
              and expert opinion. Half lives are estimates based on adult data and in older adults they can often be
              increased up to 170%. </p>
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
        <div style={fontStyle}> 
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
            <Typography id='topicHeader' gutterBottom>
            Antidepressant Guide
            </Typography>

            <div className="grid-container" id="antidepressant-grid">
              {Object.keys(data).map((id) => {
                const dataObj = data[id];
                const isDrugSelected = selectedDrugs.includes(dataObj);
                return (
                  <div className="grid-item drug-display" key={id}>
                    <button
                      onClick={() => handleDrugClick(dataObj)}
                      className={`drug-button ${isDrugSelected ? 'active' : ''}`}
                    >
                      {dataObj.Name}
                    </button>

                    {isDrugSelected && (
                    <div className="box drug-box" style={{fontSize:'2rem'}}>
                      <div className="box-content">
                        <strong>Half-life: </strong>
                        <span style={{ fontSize: '100px' }}>{dataObj[`Half-life`]}</span>
                      </div>
                      <div className="box-content">
                        <strong>Primary NT: </strong>
                        <span>{dataObj[`Primary NT`]}</span>
                      </div>
                      <div className="box-content">
                        <strong>Dose (mg/day) Initial | Maint. | Max.: </strong>
                        <span>{dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}</span>
                      </div>
   
                      <div className="box-content">
                        <strong>Frequency: </strong>
                        <span>{dataObj[`Frequency`]}</span>
                      </div>

                      <div className="box-content">
                        <strong>mg/Form Supplied: </strong>
                        <span>{dataObj[`mg/Form Supplied`]}</span>
                      </div>
                      
                    </div>
                  )}
                </div>
                  
                );
              })}
            </div>
            <div className="keynote-div">
              <p className='keynote'><b>Key:</b> 5HT: serotonin; DA: dopamine; NaSSA: noradrenaline serotonin specific antidepressant; NDRI:
              noradrenaline dopamine reuptake inhibitor; NT: neurotransmitter; NA: noradrenaline; SARI: serotonin
              antagonist & reuptake inhibitor; SSRI: selective serotonin reuptake inhibitor; TCA: tricyclic
              antidepressant (2°&3°: secondary and tertiary amines); xl, sr & er: slow release; †
              therapeutic levels
              available and useful; ^ accounts for half life of active metabolite; **preferred choice based on existing
              evidence; ∅ less appropriate due to long half life; ♯ less appropriate due to anticholinergic activity.
              <b> NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical literature
              and expert opinion. Half lives are estimates based on adult data and in older adults they can often be
              increased up to 170%. </p>
            </div>
          </div>
          <Footer /> 
        </div>  
        </>
      );
    }
  } 
}
