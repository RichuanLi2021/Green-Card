import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {InsomniaClinicalUpdate,submitDrug} from "./InsomniaClinicalController";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navigation from "../../Navigation/navigation";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import Footer from "../../Footer/Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./InsomniaClinical.css";

export default function InsomniaClinical() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [when,setWhen] = useState('');
  const [what,setWhat] = useState('');

  const handleWhen = (event)=>{
    setWhen(event.target.value);
  }

  const handleWhat = (event)=>{
    setWhat(event.target.value);
  }
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ when, what });
    submitDrug(when, what)
      .then((data) => {
        window.alert("Drug was added Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to submit the Drug!");
      });
  };

  const handleDelete = async (Description) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(process.env.REACT_APP_BACKEND_URL + "/api/clinical/delete/" + Description);
        window.alert("Drug Deleted Successfully !");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };


  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/insomniaclinical")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setAdmin(localStorage.getItem("admin") === "true");
  }, []);

  const [value,setValue] = useState("");

  const store_value = (event) => {
    setValue(event.target.value);
  };


  const update_value = (event) => {
    if (admin) {
      console.log(event.target.name, event.target.value, event.target.column);
      if (event.target.value !== value) {
        event.preventDefault();
        InsomniaClinicalUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert(
              "Data successfully updated! \nDrug:" +
                event.target.name +
                "\nColumn:" +
                event.target.id +
                "\nNew Value:" +
                event.target.value
            );
            window.location.reload();
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
  const groupDataByHeader = (data) => {
    const groupedData = {};

    data.forEach((item) => {
      const header = item.LIST_HEADERS;
      if (!groupedData[header]) {
        groupedData[header] = [];
      }
      groupedData[header].push(item);
    });

    return groupedData;
  };

  const groupedData = groupDataByHeader(data);
  console.log(groupedData);

 
  if (Object.keys(data).length > 0) {
    if (admin) {
      
  return (
    <>
    <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
      <Navigation />
      <Search onSearch={handleSearch}></Search>
      <div id="insomniaClinical">
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography id="topicHeader">Sedatives/Hypnotics Clinical Guide</Typography>
        </Box>
        
        {Object.keys(groupedData).map((headerKey) =>
          admin ? (
            <Accordion key={headerKey} id={headerKey}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${headerKey}-content`}
                id={`${headerKey}-header`}
              >
                <Typography>
                  <b>{headerKey}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {groupedData[headerKey].map((dataObj, index) => (
                    <><input
                        key={index}
                        id={`LIST_HEADERS-${index}`}
                        name={dataObj[`Id`]}
                        type="text"
                        onFocus={store_value}
                        onBlur={update_value}
                        defaultValue={dataObj[`Description`]} /><button
                        style={{ background: "none", border: "none", cursor: "pointer", marginTop: "10px" }}
                        onClick={(e) => handleDelete(dataObj.Description)}
                      >
                        {" "}
                        <span class="material-symbols-outlined">delete</span>
                      </button></>
                    
                   
                                
                  ))}
                   
                </div>
              </AccordionDetails>

            </Accordion>
          ) : (
            <Accordion key={headerKey}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${headerKey}-content`} id={`panel${headerKey}-header`}>
                <Typography>
                  <b>{headerKey}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  {groupedData[headerKey].map((dataObj, index) => (
                    <li key={index}>
                      {dataObj.Description}
                    </li>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        )}

<div className="box-content">
                <div className="form-header">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" className="title">
                      Add new guide
                    </Typography>
                  </Box>
                </div>
              
                <form onSubmit={handleSubmit}>
                 
                  <Box>
                  
                  <select value={when} onChange={handleWhen}>
                      <option>SELECT AN OPTION</option> 
                      <option value='Before prescribing'>Before prescribing</option>
                      <option value='Starting'>Starting</option> 
                      <option value='Ending'>Ending</option> 
                  </select>
                  </Box>
                  <Box>
                     <TextField
                      label="What to do ?"
                      variant="filled"
                      value={what}
                      onChange={handleWhat}
                      required
                    /> 
                    
  

                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Button type="submit" variant="contained" className="submit-button" color="primary">
                      Submit
                    </Button>
                  </Box>
                </form>
                
              </div>
              
                </div>
      <Footer />
    </>
  );
}
else{
  return(
   
    <>
    <Navigation />
    <Search onSearch={handleSearch}></Search>
    <div id="insomniaClinical">
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography id="topicHeader">Sedatives/Hypnotics Clinical Guide</Typography>
      </Box>

      {Object.keys(groupedData).map((headerKey) =>
        admin ? (
          <Accordion key={headerKey} id={headerKey}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${headerKey}-content`}
              id={`${headerKey}-header`}
            >
              <Typography>
                <b>{headerKey}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {groupedData[headerKey].map((dataObj, index) => (
                  <input
                    key={index}
                    id={`LIST_HEADERS-${index}`}
                    name={dataObj[`Id`]}
                    type="text"
                    onFocus={store_value}
                    onBlur={update_value}
                    defaultValue={dataObj[`Description`]}
                  />
                ))}
              </div>
            </AccordionDetails>

          </Accordion>
        ) : (
          <Accordion key={headerKey}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${headerKey}-content`} id={`panel${headerKey}-header`}>
              <Typography>
                <b>{headerKey}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left", padding: '0 10px' }}>
                {groupedData[headerKey].map((dataObj, index) => (
                  <li key={index} className='custom-font'>
                    {dataObj.Description}
                  </li>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      )}
    </div>
    <Footer />
  </>
        
      
  );
}}}
