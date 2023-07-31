import './cognitiveEnhancersGuide.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Navigation from '../../Navigation/navigation';
import Data from "../../searchBar/Data.json";
import {CognitiveEnhancersGuideUpdate, submitDrug} from './CognitiveEnhancersGuideBackend';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Footer from '../../Footer/Footer';


export default function CognitiveEnhancersGuide() {

  
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8887/api/cognitiveEnhancersguide')
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
  
  //add drug components shifted to this page itself
  const [drugName, setdrugName] = useState('');
  const [action, setAction] = useState('');
  const [halfLife, sethalfLife] = useState('');
  const [dose, setDose] = useState('');
  const [frequency, setFrequency] = useState('');
  const [mgFormsupplied, setmgFormsupplied] = useState('');
  const [withfood, setwithfood] = useState('');
  const [mci, setmci] = useState('');
  const [mildModeAlz, setmildModeAlz] = useState('');
  const [severeAlz, setsevereAlz] = useState('');
  const [mixed, setmixed] = useState('');
  const [vascular, setvascular] = useState('');
  const [lbd, setlbd] = useState('');
  const [ftd, setftd] = useState('');
  const [pd, setpd] = useState('');
  const [dsd, setdsd] = useState('');

  const handleDrugName = (event) => {
    setdrugName(event.target.value);
  };

  const handleAction= (event) => {
    setAction(event.target.value);
  };

  const handleHalfLife = (event) => {
    sethalfLife(event.target.value);
  };

  const handleDose = (event) => {
    setDose(event.target.value);
  };

  const handleFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const handleMgFormSupplied = (event) => {
    setmgFormsupplied(event.target.value);
  }
  const handlewithfood = (event) => {
    setwithfood(event.target.value);
  }

  const handlemci = (event) => {
    setmci(event.target.value);
  }
  
  const handlemildModeAlz = (event) => {
    setmildModeAlz(event.target.value);
  }
  const handlesevereAlz = (event) => {
    setsevereAlz(event.target.value);
  }

  const handlemixed = (event) => {
    setmixed(event.target.value);
  }
  const handlevascular = (event) => {
    setvascular(event.target.value);
  }
  
  const handlelbd = (event) => {
    setlbd(event.target.value);
  }
  const handlelftd = (event) => {
    setftd(event.target.value);
  }
  
  const handlepd = (event) => {
    setpd(event.target.value);
  }
  const handledsd = (event) => {
    setdsd(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ drugName, action, halfLife, dose, frequency, mgFormsupplied, withfood, mci, mildModeAlz, severeAlz, mixed, vascular, lbd, ftd, pd, dsd });
    submitDrug(drugName, action, halfLife, dose, frequency, mgFormsupplied, withfood, mci, mildModeAlz, severeAlz, mixed, vascular, lbd, ftd, pd, dsd)
      .then((data) => {
        window.alert('Drug was added Successfully!');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert('Failed to submit the Drug!');
      });
  };

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
        console.log(event.target.name, event.target.id, event.target.value)
        CognitiveEnhancersGuideUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
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

  const handleDelete = async (Name) =>{
    if(window.confirm('Are you sure you want to delete this record?')){
    try{
      console.log(Name);
      await axios.delete('http://localhost:8887/api/CognitiveEnhancersGuide/delete/'+Name)
      window.alert('Drug Deleted Successfully!')
      window.location.reload();
    }catch(err) {
      console.log(err);
    }
  }
  }

  if (Object.keys(data).length > 0)
  {if (admin) {
    return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
          <Typography variant="h3" align="center" gutterBottom>
          <div className='subtitle'>
            Cognitive Enhancers Guide
          </div>
          </Typography>
          
          
          <div style={{ overflowX: 'auto' }}>
          <table className="drug-table">
            <thead>
              <tr>
                <th>Drug Name</th>
                <th>Action</th>
                <th>Half-life</th>
                <th>Dose (initial/monthly increment/maint)</th>
                <th>Frequency</th>
                <th>mg/Form supplied</th>
                <th>With food</th>
                <th>MCI</th>
                <th>Mild-mod Alz</th>
                <th>Severe Alz</th>
                <th>Mixed (Alz+vas)</th>
                <th>Vascular</th>
                <th>LBD</th>
                <th>FTD</th>
                <th>PD</th>
                <th>DSD</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id) => {
                const dataObj = data[id];
                return (
                  <tr key={id}>
                    <td>{dataObj.Name}</td>
                    <td>
                      <input
                        id="`Action`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['Action']}
                      />
                    </td>
                    <td>
                      <input
                       id="`Half-life`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['Half-life']}
                      />
                    </td>
                    <td>
                      <input
                      id="`Dose`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['Dose (initial/monthly increment/maint)']}
                      />
                    </td>
                    <td>
                      <input
                      id="`Frequency`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['Frequency']}
                      />
                    </td>
                    <td>
                      <input
                      id="`mg/form supplied`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['mg/form supplied']}
                      />
                    </td>
                    <td>
                      <input
                      id="`With food`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['With food']}
                      />
                    </td>
                    <td>
                      <input
                      id="`MCI`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['MCI']}
                      />
                    </td>
                    <td>
                      <input
                      id="`Mild-mod Alz`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['mild-mod Alz']}
                      />
                    </td>
                    <td>
                      <input
                      id="`Severe Alz`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['Severe Alz']}
                      />
                    </td>
                    <td>
                      <input
                      id="`Mixed (Alz+vas)`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['Mixed (Alz+vas)']}
                      />
                    </td>
                    <td>
                      <input
                        id="`Vascular`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['Vascular']}
                      />
                    </td>
                    <td>
                      <input
                      id="`LBD`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['LBD']}
                      />
                    </td>
                    <td>
                      <input
                      id="`FTD`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['FTD']}
                      />
                    </td>
                    <td>
                      <input
                      id="`PD`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['PD']}
                      />
                    </td>
                    <td>
                      <input
                      id="`DSD`"
                        name={dataObj.Name}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj['DSD']}
                      />
                    </td>
                    <td>
                      <button
                        onClick={e => handleDelete(dataObj.Name)}
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          
          <div className="grid-container" id="cognitiveEnhancers-grid">
            {Object.keys(data).map((id) => {
              const dataObj = data[id];
              const isDrugSelected = selectedDrugs.includes(dataObj);
              return (
                <div className="grid-item" key={id}>
                  

                  {isDrugSelected && (
                    <div>

                    <div className="box">
                    <div className="box-content">
                      <strong>Action: </strong>
                      <input
                                  id="`Action`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`Action`]}
                                />
                    </div>
                    
                    
                    
                    <div className="box-content" style={{ width: 230 }}>
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
                      <strong>mg/Form supplied: </strong>
                      <input
                                  id="`mg/form supplied`"
                                  name={dataObj.Name}
                                  type="text"
                                  onFocus={store_value}
                                  onBlur={update_value}
                                  defaultValue={dataObj[`mg/form supplied`]}
                                />
                    </div>

                    <div className="box-content">
  <strong>With food: </strong>
  <input
    id="With food"
    name={dataObj.Name}
    type="text"
    onFocus={store_value}
    onBlur={update_value}
    defaultValue={dataObj['With food']}
  />
</div>


                    
                    <div className="box-content">
                      <strong>MCI: </strong>
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
                      <strong>Mild-mod Alz: </strong>
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
                      <strong>Severe Alz: </strong>
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
                      <strong>Mixed (Alz+vas: )</strong>
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
                      <strong>Vascular: </strong>
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
                      <strong>LBD: </strong>
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
                      <strong>FTD: </strong>
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
                      <strong>PD: </strong>
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
                      <strong>DSD: </strong>
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
              label="Action:"
              variant="filled"
              value={action}
              onChange={handleAction}
              
             
              type="text"
              
              
              required
            />
            </Box>

            <Box >
            <TextField
              label="Half-life"
              variant="filled"
              value={halfLife}
              onChange={handleHalfLife}
              
            
              multiline
              
              
              required
            />
             </Box>

            <Box >
            <TextField
              label="Frequency :"
              variant="filled"
              value={frequency}
              onChange={handleFrequency}
              
             
              multiline
              
              
              required
            />
            </Box>

            <Box >
            <TextField
              label="Dose (initial/monthly increment/maint):"
              variant="filled"
              value={dose}
              onChange={handleDose}
              
             
              multiline
              
              
              required
            />
            </Box>

             <Box >
            <TextField
              label="mg Form supplied"
              variant="filled"
              value={mgFormsupplied}
              onChange={handleMgFormSupplied}
              
              
              multiline
              
              
              required
            />
            </Box>
            <Box >
            <TextField
              label="With Food:"
              variant="filled"
              value={withfood}
              onChange={handlewithfood}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="MCI:"
              variant="filled"
              value={mci}
              onChange={handlemci}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="Mild-mod Alz:"
              variant="filled"
              value={mildModeAlz}
              onChange={handlemildModeAlz}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="Severe Alz:"
              variant="filled"
              value={severeAlz}
              onChange={handlesevereAlz}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="Mixed (Alz+vas): "
              variant="filled"
              value={mixed}
              onChange={handlemixed}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="Vascular: "
              variant="filled"
              value={vascular}
              onChange={handlevascular}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="LBD: "
              variant="filled"
              value={lbd}
              onChange={handlelbd}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="FTD: "
              variant="filled"
              value={ftd}
              onChange={handlelftd}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="PD: "
              variant="filled"
              value={pd}
              onChange={handlepd}
              multiline
              required
            />
            </Box>
            <Box >
            <TextField
              label="DSD: "
              variant="filled"
              value={dsd}
              onChange={handledsd}
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
         

        </div>
          <div className="keynote-div">
            <p className='cognitive-notes'>
              <b>Key:</b> AChEI: acetylcholinesterase inhibitor; BuChEI: butyrylcholinesterase inhibitor 
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
          <div className='subtitle'>
            Cognitive Enhancers Guide
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
                      <strong>Action: </strong>
                      <span>{dataObj['Action']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Half-life: </strong>
                      <span>{dataObj['Half-life']}</span>
                    </div>
                    
                    <div className="box-content">
                      <strong>Dose "initial/monthly increment/maint": </strong>
                      <span>{dataObj['Dose (initial/monthly increment/maint)']}</span>
                    </div>
                    <div className="box-content" style={{ width: 230 }}>
                      <strong>Frequency: </strong>
                      <span>{dataObj['Frequency']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Dose (initial/monthly increment/maint): </strong>
                      <span>{dataObj['Dose (initial/monthly increment/maint):']}</span>
                    </div>
                    <div className="box-content">
                      <strong>mg/Form supplied: </strong>
                      <span>{dataObj['mg/form supplied']}</span>
                    </div>
                    <div className="box-content">
                      <strong>With Food?: </strong>
                      <span>{dataObj['With Food']}</span>
                    </div>
                    <div className="box-content">
                      <strong>MCI: </strong>
                      <span>{dataObj['MCI']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Mild-mod Alz: </strong>
                      <span>{dataObj['Mild-mod Alz']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Severe Alz: </strong>
                      <span>{dataObj['Severe Alz']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Mixed (Alz+vas): </strong>
                      <span>{dataObj['Mixed (Alz+vas)']}</span>
                    </div>
                    <div className="box-content">
                      <strong>Vascular: </strong>
                      <span>{dataObj['Vascular']}</span>
                    </div>
                    <div className="box-content">
                      <strong>LBD: </strong>
                      <span>{dataObj['LBD']}</span>
                    </div>
                    <div className="box-content">
                      <strong>FTD: </strong>
                      <span>{dataObj['FTD']}</span>
                    </div>
                    <div className="box-content">
                      <strong>PD: </strong>
                      <span>{dataObj['PD']}</span>
                    </div>
                  </div>
                )}
              </div>
                
              );
            })}
          </div>
          <div className="keynote-div">
            <p className='cognitive-notes'>
              <b>Key:</b> AChEI: acetylcholinesterase inhibitor; BuChEI: butyrylcholinesterase inhibitor 
            </p>     
          </div>
        </div>
        <Footer />
      </>
    );
  }
} 
}