import { Card, CardContent, Container, Grid, Typography, Box, Button } from "@mui/material";
import "./HomePage.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataDisplay from '../components/DataDisplay/dataDisplay';
import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 25,
      fontWeight: "normal",
    },
  },
});

const HomePage = () => {
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [drugData, setDrugData] = useState({});

  useEffect(() => {
      console.log('Drug data:', drugData);
  }, [selectedDrugs, drugData]);

  const handleCheckboxChange = (drugName, isChecked) => {
      if (isChecked) {
          setSelectedDrugs(prev => [...prev, drugName]);
          if (!drugData[drugName]) {
              axios
              .get(`${process.env.REACT_APP_BACKEND_URL}/api/${drugName}`)
              .then(response => {
                  setDrugData(prev => ({ ...prev, [drugName]: response.data }));
              })
              .catch(error => {
                  console.log(error);
              });
          }
      } else {
          setSelectedDrugs(prev => prev.filter(item => item !== drugName));
      }
  };

  const drugList = [
    {
      category: 'Antidepressants',
      data: [
        { name: 'Antidepressant Guide', route: 'antidepressant/guide' },
        { name: 'Antidepressant Clinical Guide', route: 'antidepressant/clinical' },
        { name: 'Antidepressant Safety Concerns', route: 'antidepressant/safety' }
      ]
    },
    {
      category: "Antipsychotics",
      data: [
        { name: 'Antipsychotics Guide', route: 'antipsychotic/guide' },
        { name: 'Antipsychotics Safety Concerns', route: 'antipsychotic/safety' }
      ]
   
    },

    //dont work
    {
      category: "Insomnia",
      data: [
        { name: 'Sedatives/hypnotics Guide', route: 'insomnia/sedatives-guide/sedatives' },
        { name: 'Sedatives/hypnotics Clinical Guide', route: 'insomnia/clinical/insomnia-clinical' },
        { name: 'Sedatives/hypnotics Safety Concerns', route: 'insomnia/safety/insomnia-safety' },
        { name: 'Deprescribing Sedatives/Hypnotics', route: 'insomnia/deprescribing/insomnia-deprescribing' }
      ]
      
    },

    {
      category: "Dementia",
      data: [
        { name: 'Cognitive Enhancers Guide', route: 'cognitive/guide' },
        { name: 'Cognitive Enhancers Clinical Guide', route: 'cognitive/clinical'},
        { name: 'NPS Management', route: 'cognitive/guide-cont' }
      ]
    },

    {
      category: "Delirium",
      data: [
        { name: 'Anticholinergic activity', route: 'delirium/delirium' },
        { name: 'Delirium Management', route: 'delirium/management' }
      ]
    },

    {
      category: "Polypharmacy",
      data: [
        { name: 'Common DDIs', route: 'polypharmacy/polypharmacy-common-ddis' },
        { name: 'Notable changes in older adults', route: 'polypharmacy/polypharmacy-notable-changes' },
        { name: 'Prescribing and deprescribing principles', route: 'polypharmacy/polypharmacy-principles' }
      ]
    },

    {
      category: "ECT & Psychoactive Medications",
      data: [
        { name: 'ECT & Psychoactive Medications', route: 'neuropsy/neuropsychiatric' }
      ]
      
    },

    {
      category: "Mood Stabilizers",
      data: [
        { name: 'Mood Stabilizers', route: 'mood-sta/Mood/mood-stabilizers' }
      ]
     
    },

    {
      category: "Psychotropic Monitoring",
      data: [
        { name: 'Psychotropic Monitoring', route: 'psychotropic/psychotropic-monitoring-section' }
      ]
      
    },
  ];
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container className="main-container" maxWidth={false}>
          <Grid container spacing={4} direction="row" sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={3}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                {drugList.map(drugCategory => {
                  // Check if data array has only one item
                  if (drugCategory.data.length === 1) {
                    const drugItem = drugCategory.data[0];
                    return (
                      <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                        <Button
                          variant="h1"
                          sx={{
                              background: "#ffffff", 
                              width: "100%",
                              display: "flex",
                              flexDirection: "row", 
                              alignItems: "center", 
                              justifyContent: "center", 
                              textTransform: "none",
                              padding: "15px",
                              border: "1px solid #cbcbcb", 
                              boxShadow: "0px 1px 1px rgba(0,0,0,0.5)", 
                              '&:hover': {
                                  backgroundColor: "#96D2B0", 
                              }
                          }}
                          onClick={(e) => {
                              e.preventDefault();
                              const checkbox = document.getElementById(`${drugItem.route}Checkbox`);
                              if (checkbox) {
                                  checkbox.checked = !checkbox.checked;
                                  handleCheckboxChange(drugItem.route, checkbox.checked);
                              }
                          }}
                        >
                            <input 
                                type="checkbox" 
                                id={`${drugItem.route}Checkbox`} 
                                style={{ marginRight: "10px" }} 
                            />
                            <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                                {drugItem.name}
                            </Typography>
                        </Button>
                      </CardContent>
                    );
                  } else {
                    return (
                      <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                        <Accordion className="myAccordion">
                          <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                              {drugCategory.category} 
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {drugCategory.data.map(drugItem => (
                              <div className="item-container">
                                <input 
                                  type="checkbox" 
                                  id={`${drugItem.route}Checkbox`} 
                                  onChange={(e) => handleCheckboxChange(drugItem.route, e.target.checked)}
                                />
                                <Typography
                                  className="myStyledButton"
                                  sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }} 
                                  onClick={() => {
                                    const checkbox = document.getElementById(`${drugItem.route}Checkbox`);
                                    if (checkbox) {
                                      checkbox.checked = !checkbox.checked;
                                      handleCheckboxChange(drugItem.route, checkbox.checked);
                                    }
                                  }}
                                >
                                  {drugItem.name}
                                </Typography>
                              </div>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    );
                  }
                })}
              </Card>
            </Grid>


            
            <Grid item xs={12} sm={9}>
              <Box className="gray-square">
                <DataDisplay/>
                {selectedDrugs.map(drugName => (
                    <div className="grid" key={drugName}>
                        <h2>Rendering GridTest for {drugName}</h2>
                        <DataDisplay drugData={drugData[drugName]} />
                    </div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;