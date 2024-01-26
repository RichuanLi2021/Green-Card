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
import Config from "../config/config";

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
  const [drugList, setDrugList] = useState([]); 

  useEffect(() => {
    const fetchDrugCategories = async () => {
      try {
        const response = await axios.get(`${Config.API_URL}/api/all/categories`, { withCredentials: true });
        const formattedData = response.data.message.map(category => ({
          category: category.title,
          data: category.Subcategories.map(sub => ({
            name: sub.description,
            route: sub.uuid
          }))
        }));
        setDrugList(formattedData);
      } catch (error) {
        console.error("Error fetching drug categories:", error);
      }
    };

    fetchDrugCategories();
  }, []);

  useEffect(() => {
      console.log('Drug data:', drugData);
  }, [selectedDrugs, drugData]);

  const handleCheckboxChange = (drugName, isChecked) => {
      if (isChecked) {
          setSelectedDrugs(prev => [...prev, drugName]);
          if (!drugData[drugName]) {
              axios
              .get(`${Config.API_URL}/api/subcategories/${drugName}`, { withCredentials: true })
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
                                marginRight: "30px",
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
                                  style={{ visibility: "hidden", marginRight: "20px" }} 
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