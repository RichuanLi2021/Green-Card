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
import CloseIcon from '@mui/icons-material/Close';




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
  const [drugList, setDrugList] = useState([]);
  const [scrollToDrugName, setScrollToDrugName] = useState(null); // New state for triggering scroll
  const drugDisplayRefs = useRef({});
  const [activeSubcategories, setActiveSubcategories] = useState({});
  const [latestUpdated, setLatestUpdated] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Config.API_URL}/api/all/categories`, { withCredentials: true });
        const categories = response.data.message;
        let latestTimestamp = new Date(0);
        categories.forEach(category => {
          const updatedAt = new Date(category.updatedAt);
          if (updatedAt > latestTimestamp) {
            latestTimestamp = updatedAt;
          }
        });
        setLatestUpdated(latestTimestamp);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    Object.keys(activeSubcategories).forEach(drugName => {
      if (activeSubcategories[drugName]) {
        scrollToDisplay(drugName);
      }
    });
  }, [activeSubcategories]);



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


  const toggleActiveSubcategory = (drugName, shouldDisplay) => {
    if (shouldDisplay) {
      //Ensure the drug is added to the selectedDrugs only if it's not already there
      if (!selectedDrugs.includes(drugName)) {
        setSelectedDrugs(prev => [...prev, drugName]);
      }
      //Fetch drug data
      if (!drugData[drugName]) {
        axios.get(`${Config.API_URL}/api/subcategories/${drugName}`, { withCredentials: true })
          .then(response => {
            setDrugData(prev => ({ ...prev, [drugName]: response.data }));
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
    else {
      //Remove from selected drugs if it's being toggled of
      setSelectedDrugs(prev => prev.filter(item => item !== drugName));
    }
    //Toggle visibility state
    setActiveSubcategories(prev => ({
      ...prev,
      [drugName]: shouldDisplay
    }));
    //Ensure checkbox is in sync with the state
    const checkbox = document.getElementById(`${drugName}Checkbox`);
    if (checkbox) {
      checkbox.checked = shouldDisplay;

    }


  };


  const handleCheckboxChange = (drugName, isChecked) => {
    toggleActiveSubcategory(drugName, isChecked);
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
          zIndex: 1
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
      <Toolbar id="back-to-top-anchor" /> {/*This tool bar is only used as an anchor to return to the top of the page*/}
      <ThemeProvider theme={theme}>
        <Container className="main-container" maxWidth={false}>
          <Grid container spacing={4} direction="row" sx={{ textAlign: "left" }}>
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
                            background: activeSubcategories[drugItem.route] ? "#96D2B0" : "#ffffff", // Change based on active state
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
                              fontWeight: "bold",
                              color: "white"
                            },
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            const isVisible = !activeSubcategories[drugItem.route];
                            toggleActiveSubcategory(drugItem.route, isVisible);
                          }}
                        >
                          <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                            {
                              drugItem.name.endsWith("Medication Table") ? drugItem.name.split("Medication Table")[0]
                                : drugItem.name}
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
                          {drugCategory.data.map(drugItem => {
                            const cleanName = drugItem.name.replace(drugCategory.category, '').trim();
                            return (
                              <div className="item-container" key={drugItem.route}>
                                <input
                                  type="checkbox"
                                  id={`${drugItem.route}Checkbox`}
                                  style={{ visibility: "hidden" }}
                                  onChange={(e) => handleCheckboxChange(drugItem.route, e.target.checked)}
                                  checked={activeSubcategories[drugItem.route] || false}
                                />
                                <Typography
                                  className={`myStyledButton ${activeSubcategories[drugItem.route] ? 'activeButton' : ''}`}
                                  sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                                  onClick={() => {
                                    const shouldDisplay = !activeSubcategories[drugItem.route];
                                    toggleActiveSubcategory(drugItem.route, shouldDisplay);
                                  }}
                                >
                                  {cleanName}
                                </Typography>
                              </div>
                            );
                          })}
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
                        width: 140,
                        height: 140,
                        border: "3px solid #5a8e70",
                        bgcolor: "#96d2b0",
                        mb: 3,
                      }}
                    >
                      <img src={logo} className={"height-width-5rem"} alt="GPGC Logo" style={{ height: '7.0rem', width: '7.0rem' }}></img>
                    </Avatar>
                    <Typography
                      variant="h3"
                      component="h1"
                      sx={{
                        fontWeight: "bold",
                        backgroundColor: "#355944",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: {
                          xs: '30px',
                          sm: '40px',
                          md: '48px',
                        },
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
                      Department of Psychiatry, Dalhousie University, Halifax, CANADA
                    </Typography>
                    {/* Last Updated Timestamp Display */}
                    {latestUpdated && (
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          mb: 2,
                          color: "#355944",
                        }}
                      >
                        Last Updated: {latestUpdated.toLocaleDateString()} {latestUpdated.toLocaleTimeString()}
                      </Typography>
                    )}
                  </Box>
                </div>
                {selectedDrugs.map(drugName => (

                  <div className="grid" key={drugName} ref={el => drugDisplayRefs.current[drugName] = el}>
                    <div className="header-container">
                      <div>
                        <h2>{
                          drugData[drugName]?.description.endsWith("Medication Table") ?
                          drugData[drugName]?.description.split("Medication Table")[0] :
                          drugData[drugName]?.description || 'Default Description'
                        }</h2>
                      </div>
                      <Button sx={{ backgroundColor: "#96d2b0", color: "#000000" }} onClick={() => toggleActiveSubcategory(drugName, false)}>
                        <CloseIcon />
                      </Button>
                    </div>
                    <DataDisplay subcategoryHeaders={drugData[drugName]?.Subcategory_Headers} displayEdit={false} />
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