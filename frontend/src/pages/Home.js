import { Card, CardContent, Container, Grid, Typography, Box, Button } from "@mui/material";
import "./Home.css";
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
  const [activeButtons, setActiveButtons] = useState({});

  useEffect(() => {
      console.log('Drug data:', drugData);
  }, [selectedDrugs, drugData]);

  const handleCheckboxChange = (drugName, isChecked) => {
      if (isChecked) {
          setSelectedDrugs(prev => [...prev, drugName]);
          if (!drugData[drugName]) {
              axios
              .get(`${process.env.REACT_APP_DEV_API_URL}/api/subcategories/${drugName}`)
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
      setActiveButtons(prev => ({
        ...prev,
        [drugName]: !prev[drugName]
    }));
  };

  const drugList = [
    {
      category: 'Antidepressants',
      data: [
        { name: 'Antidepressants Medication Table', route: '9a56b502-ebec-4584-8ff6-11c8c6f26ca4' },
        { name: 'Antidepressants Adverse Effects and Safety', route: '3c4da90f-089d-43d0-897b-72cb318a392e' },
        { name: 'Antidepressants Clinical Guide', route: 'b5f661bc-1085-4cdd-869d-e3508a462819' }
      ]
    },
    {
      category: "Antipsychotics",
      data: [
        { name: 'Antipsychotics Medication Table', route: 'fb69854a-cb70-4234-81ec-ec1a2e02aab9' },
        { name: 'Antipsychotics Adverse Effects and Safety', route: 'e10741f6-5e45-494f-96e2-df8889235a1f' }
        
      ]
   
    },

    {
      category: "Dementia",
      data: [
        { name: 'Cognitive Enhancers Medication Table', route: 'a95f6ba6-c753-4ce0-a6bc-ee0ef97a6c28' },
        { name: 'Cognitive Enhancers Adverse Effects and Safety', route: 'e04c2562-30c4-4cce-b337-45916dd296d2'},
        { name: 'Cognitive Enhancers Clinical Guide', route: '625e131d-85e3-4366-ae1e-756d547b7131' }
      ]
    },

    {
      category: "Insomnia",
      data: [
        { name: 'Sedatives/Hypnotics Medication Table', route: 'f1215bc3-b24b-4b61-ad3b-08e31cf6aae6' },
        { name: 'Sedatives/Hypnotics Adverse Effects and Safety', route: '91cb79f9-84a8-44bd-8097-765c7d328d3d' },
        { name: 'Sedatives/Hypnotics Clinical Guide', route: '968cc37f-8776-4e47-866d-98f2165e6212' }
      ]
      
    },

    {
      category: "Delirium",
      data: [
        { name: 'Delirium Nonpharmalogical', route: '1e0f973c-0d1c-4078-a514-f0ccd96d8e91' },
        { name: 'Delirium Pharmalogical', route: '683fb42a-ae49-436f-9ce3-dacea24db402' },
        { name: 'Delirium Anticholinergic Activity', route: 'ad92d63b-9f0e-4729-a1bd-f304658c4e80' }
      ]
    },

   

    {
      category: "ECT & Psychoactive Medications",
      data: [
        { name: 'ECT & Psychoactive Medications Medication Table', route: 'b78720b1-afe8-4f36-8013-cf6f62269002' }
      ]
      
    },

    {
      category: "Mood Stabilizers",
      data: [
        { name: 'Mood Stabilizers Medication Table', route: 'c536e448-fda6-480b-b236-16703fe361b7' }
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
                                },
                                backgroundColor: activeButtons[drugItem.route] ? "#96D2B0" : "#ffffff"
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
                                  style={{ visibility: "hidden", marginRight: "10px" }} 
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
                                      style={{ visibility: "hidden" }} 
                                      onChange={(e) => handleCheckboxChange(drugItem.route, e.target.checked)}
                                    />
                                    <Typography
                                      className={`myStyledButton ${activeButtons[drugItem.route] ? 'activeButton' : ''}`}
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
                            <h2>{drugData[drugName]?.description || 'Default Description'}</h2>
                            <DataDisplay subcategoryHeaders={drugData[drugName]?.Subcategory_Headers} />

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