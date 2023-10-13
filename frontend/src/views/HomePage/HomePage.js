import { Card, CardContent, Container, Grid, Typography, Button,Box } from "@mui/material";
import Navigation from "../Navigation/navigation";
import "./HomePage.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import GridTest from '../../components/testData/gridTest';

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

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Search onSearch={handleSearch}></Search>
        {/* <SearchBar placeholder="Search" data={Data} /> */}
        <Container className="main-container" maxWidth={false}>

          <Grid container spacing={4} direction="row" sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={3.5}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Antidepressants{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="item-container">
                        <input type="checkbox" id="AntidepressantGuideCheckbox" />
              
                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }} 
                          onClick={(e) => {
                            e.preventDefault();  // Prevent any default behavior
                            const checkbox = document.getElementById("AntidepressantGuideCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Antidepressant Guide     
                        </Typography>
                      </div>
                      <div className="item-container">
                        <input type="checkbox" id="AntidepressantsClinicalCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("AntidepressantsClinicalCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Antidepressant Clinical Guide

                        </Typography>
                      </div>
                      <div className="item-container">
                        <input type="checkbox" id="AntidepressantSafetyCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("AntidepressantSafetyCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Antidepressant Safety Concerns

                        </Typography>                    
                    </div>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>

                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Antipsychotics{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="item-container">
                        <input type="checkbox" id="AntipsychoticsGuideCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }} 
                          onClick={(e) => {
                            e.preventDefault();  // Prevent any default behavior
                            const checkbox = document.getElementById("AntipsychoticsGuideCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Antipsychotics Guide

                        </Typography>                   
                      </div>
                      <div className="item-container">
                        <input type="checkbox" id="AntipsychoticSafetyCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("AntipsychoticSafetyCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Antipsychotics Safety Concerns

                        </Typography>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Insomnia{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="item-container">
                        <input type="checkbox" id="InsomniaManagementCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("InsomniaManagementCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Insomnia management

                        </Typography>
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="InsomniaSedativesCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("InsomniaSedativesCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Sedatives/hypnotics Guide

                        </Typography>
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="InsomniaClinicalCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("InsomniaClinicalCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Sedatives/hypnotics Clinical Guide

                        </Typography>
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="InsomniaSafetyCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("InsomniaSafetyCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Sedatives/hypnotics Safety Concerns

                        </Typography>
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="InsomniaDeprescribingCheckbox" />
                        
                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("InsomniaDeprescribingCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Deprescribing Sedatives/Hypnotics

                        </Typography>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Dementia{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="item-container">
                        <input type="checkbox" id="CognitiveEnhancersGuideCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("CognitiveEnhancersGuideCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Cognitive Enhancers Guide

                        </Typography>
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="CognitiveEnhancersClinicalCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("CognitiveEnhancersClinicalCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Cognitive Enhancers Clinical Guide

                        </Typography>
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="NPSManagementCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("NPSManagementCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          NPS Management

                        </Typography>                   
                      </div>
                    </AccordionDetails>

                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Delirium{" "}
                      </Typography>
                      
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="item-container">
                        <input type="checkbox" id="DeliriumManagementCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("DeliriumManagementCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Delirium Management

                        </Typography>                      
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="AnticholinergicActivityCheckbox" />

                        <Typography
                          className="myStyledButton"
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("AnticholinergicActivityCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Anticholinergic activity

                        </Typography>                        
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Polypharmacy{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="item-container">
                        <input type="checkbox" id="CommonDDIsCheckbox" />

                        <Typography 
                          className="myStyledButton" 
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("CommonDDIsCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >            
                         Common DDI's             
                        </Typography>                      
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="NotableChangesCheckbox" />

                        <Typography 
                          className="myStyledButton" 
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("NotableChangesCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Notable changes in older adults

                        </Typography>                      
                      </div>

                      <div className="item-container">
                        <input type="checkbox" id="PrescribingPrinciplesCheckbox" />

                        <Typography 
                          className="myStyledButton" 
                          sx={{ fontWeight: 300, fontSize: "1rem", cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            const checkbox = document.getElementById("PrescribingPrinciplesCheckbox");
                            if (checkbox) checkbox.checked = !checkbox.checked;
                          }}
                        >
                          Prescribing and deprescribing principles

                        </Typography>                       
                      </div>
                    </AccordionDetails>

                  </Accordion>
                </CardContent>
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
                        const checkbox = document.getElementById("ECTandPsychoactiveCheckbox");
                        if (checkbox) checkbox.checked = !checkbox.checked;
                      }}

                  >
                      <input type="checkbox" id="ECTandPsychoactiveCheckbox" style={{ marginRight: "10px" }} />

                      <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                          ECT & Psychoactive Medications
                      </Typography>
                  </Button>
                 
                </CardContent>

                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button
                      variant="h1"
                      sx={{
                        background: "#ffffff", // Set white background
                        width: "100%",
                        display: "flex",

                        flexDirection: "row", // changed to row to have checkbox and text side by side
                        alignItems: "center", // added to vertically align checkbox and text
                        justifyContent: "center", // added to horizontally center content

                        textTransform: "none",
                        padding: "15px",
                        border: "1px solid #cbcbcb", // Add border
                        boxShadow: "0px 1px 1px rgba(0,0,0,0.5)", // Add shadow
                        '&:hover': {

                            backgroundColor: "#96D2B0", // Change background color when hovered
                        }
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        const checkbox = document.getElementById("MoodStabilizersCheckbox");
                        if (checkbox) checkbox.checked = !checkbox.checked;
                      }}

                  >
                      <input type="checkbox" id="MoodStabilizersCheckbox" style={{ marginRight: "10px" }} />

                      <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                          Mood Stabilizers
                      </Typography>
                  </Button>
                </CardContent>

                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button

                      variant="h1"
                      sx={{
                          background: "#ffffff", // Set white background
                          width: "100%",
                          display: "flex",
                          flexDirection: "row", // changed to row to have checkbox and text side by side
                          alignItems: "center", // added to vertically align checkbox and text
                          justifyContent: "center", // added to horizontally center content
                          textTransform: "none",
                          padding: "15px",
                          border: "1px solid #cbcbcb", // Add border
                          boxShadow: "0px 1px 1px rgba(0,0,0,0.5)", // Add shadow
                          '&:hover': {
                              backgroundColor: "#96D2B0", // Change background color when hovered
                          }
                      }}
                      onClick={(e) => {
                          e.preventDefault();
                          const checkbox = document.getElementById("PsychotropicMonitoringCheckbox");
                          if (checkbox) checkbox.checked = !checkbox.checked;
                      }}

                  >
                      <input type="checkbox" id="PsychotropicMonitoringCheckbox" style={{ marginRight: "10px" }} />
                      
                      <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                          Psychotropic Monitoring
                      </Typography>
                  </Button>                 
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8.5}>
              <Box className="gray-square">

                <GridTest/>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;
