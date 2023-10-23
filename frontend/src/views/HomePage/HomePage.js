import { Card, CardContent, Container, Grid, Typography, Box } from "@mui/material";
import "./HomePage.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Search from "../../components/elements/search/Search";
import { useNavigate } from "react-router-dom";

import GridTest from '../../components/testData/gridTest';
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
  const navigate = useNavigate();
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
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };
  const drugList = [
    {
      category: 'Antidepressants',
      drugs: [
        'antidepressantguide',
        'antidepressantsclinical',
        'antidepressantsafety',
      ]
    },
    {
      category: "Antipsychotics",
      drugs: [
        'antipsychoticsguide',
        'antipsychoticsafety',
      ]
    },
    {
      category: "Insomnia",
      drugs: [
        'insomniamanagement',
        'insomniasedatives',
        'insomniaclinical',
        'insomniasafety',
        'insomniadeprescribing',
      ]
    },
    {
      category: "Dementia",
      drugs: [
        'cognitiveenhancersguide',
        'cognitiveenhancersclinical',
        'npsmanagement',
      ]
    },
    {
      category: "Delirium",
      drugs: [
        'delirium',
        'anticholinergicactivity',
      ]
    },
    {
      category: "Polypharmacy",
      drugs: [
        'polypharmacycommon',
        'polypharmacynotable',
        'principlespolypharmacy',
      ]
    },
    {
      category: "ECT & Psychoactive Medications",
      drugs: [
        'ectandpsychoactive',
      ]
    },
    {
      category: "Mood Stabilizers",
      drugs: [
        'moodStabilizers',
      ]
    },
    {
      category: "Psychotropic Monitoring",
      drugs: [
        'psychotropicmonitoringsection',
      ]
    },
  ];
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Search onSearch={handleSearch}></Search>
        <Container className="main-container" maxWidth={false}>
          <Grid container spacing={4} direction="row" sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={3}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                {drugList.map(drugCategory => (
                  <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Accordion className="myAccordion">
                      <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                          {drugCategory.category} 
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {drugCategory.drugs.map(drugName => (
                          <div className="item-container">
                            <input 
                                type="checkbox" 
                                id={`${drugName}Checkbox`} 
                                onChange={(e) => handleCheckboxChange(drugName, e.target.checked)}
                            />
                            <Typography
                              className="myStyledButton"
                              sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }} 
                              onClick={() => {
                                const checkbox = document.getElementById(`${drugName}Checkbox`);
                                if (checkbox) {
                                  checkbox.checked = !checkbox.checked;
                                  handleCheckboxChange(drugName, checkbox.checked);
                                }
                              }}
                            >
                              {drugName.charAt(0).toUpperCase() + drugName.slice(1)}
                            </Typography>
                          </div>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                ))}
              </Card>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box className="gray-square">
                <GridTest/>
                {selectedDrugs.map(drugName => (
                    <div key={drugName}>
                        <h2>Rendering GridTest for {drugName}</h2>
                        <GridTest drugData={drugData[drugName]} />
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
