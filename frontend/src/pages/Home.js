import { Card, CardContent, Container, Grid, Typography, Box, Button } from "@mui/material";
import "./Home.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataDisplay from '../components/DataDisplay/dataDisplay';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Config from "../config/config";
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import logo from "../assets/images/icons/logo/white/WhiteShine256px.svg";
import Avatar from "@mui/material/Avatar";



const theme = createTheme({
  typography: {
    h1: {
      fontSize: 25,
      fontWeight: "normal",
    },
  },
});


const HomePage = (props) => {
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [drugData, setDrugData] = useState({});
  const [activeButtons, setActiveButtons] = useState({});
  const [drugList, setDrugList] = useState([]);
  const [scrollToDrugName, setScrollToDrugName] = useState(null); // New state for triggering scroll
  const drugDisplayRefs = useRef({});

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
    if (scrollToDrugName && drugData[scrollToDrugName]) {
      scrollToDisplay(scrollToDrugName);
      setScrollToDrugName(null); // Reset after scrolling
    }
  }, [scrollToDrugName, drugData]); // Depend on scrollToDrugName and drugData



  const handleCheckboxChange = (drugName, isChecked) => {
    if (isChecked) {
      setSelectedDrugs(prev => [...prev, drugName]);
      if (!drugData[drugName]) {
        axios.get(`${Config.API_URL}/api/subcategories/${drugName}`, { withCredentials: true })
          .then(response => {
            setDrugData(prev => ({ ...prev, [drugName]: response.data }));
            setScrollToDrugName(drugName);
          })
          .catch(error => {
            console.log(error);
          });
      }
       else {
        setScrollToDrugName(drugName);
      }
    } else {
      setSelectedDrugs(prev => prev.filter(item => item !== drugName));
    }
    setActiveButtons(prev => ({
      ...prev,
      [drugName]: !prev[drugName]
    }));
    if (isChecked && drugDisplayRefs.current[drugName]) {
      scrollToDisplay(drugName);
    }
  };

  const scrollToDisplay = (drugName) => {
    drugDisplayRefs.current[drugName]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };



  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
          zIndex:1
        });
      }
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }


  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  
  return (
    <div>
    <Toolbar id="back-to-top-anchor" />
    <ThemeProvider theme={theme}>
            <Container className="main-container" maxWidth={false}>
                <Grid container spacing={4} direction="row" sx={{textAlign: "left"}}> 
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
                                        fontWeight:"bold", 
                                        color:"white"
                                    },
                                    backgroundColor: activeButtons[drugItem.route] ? "#96D2B0" : "#ffffff"
                                  }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const checkbox = document.getElementById(`${drugItem.route}Checkbox`);
                                    if (checkbox) {
                                        checkbox.checked = !checkbox.checked;
                                        handleCheckboxChange(drugItem.route, checkbox.checked);
                                        console.log("test");
                                        if(checkbox.checked){
                                          scrollToDisplay(drugItem.route);
                                        }
                                        
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
                                              if(checkbox.checked){
                                                scrollToDisplay(drugItem.route);
                                              }
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


<div>
  <Box
    sx={{
      textAlign: "center",
      flex: ".8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {" "}
    {/* Adjusted flex value and added display and alignItems */}
    <Avatar
      sx={{
        width: 90,
        height: 90,
        border: "3px solid #5a8e70",
        bgcolor: "#96d2b0",
        mb: 3,
      }}
    >
      <img src={logo} className={"height-width-5rem"} alt="GPGC Logo"></img>
    </Avatar>
    <Typography
      variant="h3"
      component="h1"
      sx={{
        fontWeight: "bold",
        backgroundColor: "#355944",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      THE GREEN CARD
    </Typography>
    <Typography
      variant="h6"
      component="h2"
      sx={{
        fontWeight: "bold",
        backgroundColor: "#355944",
        mb: 2,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      GERIATRIC PSYCHOTROPIC DRUG REFERENCE CARD
    </Typography>
    <Typography
      variant="h5"
      component="h2"
      sx={{
        mt: 1,
        backgroundColor: "#355944",
        mb: 2,
        fontSize: 18,
        px: 7,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Kathleen Singh, MD, FRCPC; Terry Chisholm, MD, FRCPC; David Gardner,
      PharmD, MSc
    </Typography>
    <Typography
      variant="h5"
      sx={{
        mb: 2,
        backgroundColor: "#355944",
        fontSize: 16,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontsize: "500px",

      }}
    >
      Dept of Psychiatry, Dalhousie University, Halifax, CANADA
    </Typography>
    <Typography
      variant="subtitle2"
      gutterBottom
      sx={{
        fontWeight: "bold",
        mt: 4,
        fontSize: "14px",
        mb: 2,
        color: "#355944",
      }}
    >
    </Typography>
  </Box>
</div>
<DataDisplay />
{selectedDrugs.map(drugName => (
  <div className="grid" key={drugName} ref={el => drugDisplayRefs.current[drugName] = el}>
    <h2>{drugData[drugName]?.description || 'Default Description'}</h2>
    <DataDisplay subcategoryHeaders={drugData[drugName]?.Subcategory_Headers} />

  </div>
))}




</Box>
                    </Grid>
                  </Grid>
            </Container>
          </ThemeProvider>



        <React.Fragment>
          <CssBaseline />
          <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </React.Fragment>

       
      </div>
  );
};

export default HomePage;