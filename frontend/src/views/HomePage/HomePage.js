import { Card, CardContent, Container, Grid, Typography, Button } from "@mui/material";
import Navigation from "../Navigation/navigation";
import "./HomePage.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";

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
        <Container className="main-container" sx={{ overflow: "auto", display: "flex" }}>
          <Grid
              container
              spacing={4}
              direction="row"
              wrap="wrap"
              alignItems="center"
              justify="center"
              sx={{ textAlign: "center" }}
          >
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        Antidepressants
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        <a href="AntidepressantGuide" className="myStyledButton"> Antidepressant Guide </a>
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        <a href="AntidepressantsClinical" className="myStyledButton"> Antidepressant Clinical Guide </a>
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        <a href="AntidepressantSafety" className="myStyledButton"> Antidepressant Safety Concerns </a>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Accordion className="myAccordion">
                      <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                          {" "}
                          Antipsychotics{" "}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                          {" "}
                          <a href="AntipsychoticsGuide" className="myStyledButton"> Antipsychotics Guide </a>{" "}
                        </Typography>
                        <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                          {" "}
                          <a href="AntipsychoticSafety" className="myStyledButton"> Antipsychotics Safety Concerns </a>{" "}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Insomnia{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="InsomniaManagement" className="myStyledButton"> Insomnia management </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="InsomniaSedatives" className="myStyledButton"> Sedatives/hypnotics Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="InsomniaClinical" className="myStyledButton"> Sedatives/hypnotics Clinical Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="InsomniaSafety" className="myStyledButton"> Sedatives/hypnotics Safety Concerns </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="InsomniaDeprescribing" className="myStyledButton"> Deprescribing Sedatives/Hypnotics </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Dementia{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="CognitiveEnhancersGuide" className="myStyledButton"> Cognitive Enhancers Guide </a>{" "}
                      </Typography>
                    
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="CognitiveEnhancersClinical" className="myStyledButton"> Cognitive Enhancers Clinical Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="NPSManagement" className="myStyledButton"> NPS Management </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Delirium{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="Delirium" className="myStyledButton"> Delirium Management </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="Delirium" className="myStyledButton"> Anticholinergic activity </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion className="myAccordion">
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Polypharmacy{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="PolypharmacyCommon" className="myStyledButton"> Common DDI's </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="PolypharmacyNotable" className="myStyledButton"> Notable changes in older adults </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem", marginBottom: "2.5em" }}>
                        {" "}
                        <a href="PrinciplesPolypharmacy" className="myStyledButton"> Prescribing and deprescribing principles </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button 
                      variant="h1"
                      sx={{
                        background: "#ffffff", // Set white background
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        textTransform: "none",
                        padding: "15px",
                        border: "1px solid #cbcbcb", // Add border
                        boxShadow: "0px 1px 1px rgba(0,0,0,0.5)", // Add shadow
                        '&:hover': {
                          backgroundColor: "#96D2B0", // Change background color when hovered
                        }
                      }}
                    href={"Neuropsychiatric"}
                  >
                    <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                      ECT & Psychoactive Medications
                    </Typography>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button
                      variant="h1"
                      sx={{
                        background: "#ffffff", // Set white background
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        textTransform: "none",
                        padding: "15px",
                        border: "1px solid #cbcbcb", // Add border
                        boxShadow: "0px 1px 1px rgba(0,0,0,0.5)", // Add shadow
                        '&:hover': {
                          backgroundColor: "#96D2B0", // Change background color when hovered
                        }
                      }}
                    href={"MoodStabilizers"}
                  >
                    <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                      {" "}
                      Mood Stabilizers{" "}
                    </Typography>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          
            <Grid item xs={12} md={4}> 
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button
                    variant="h1"
                    sx={{
                      background: "#ffffff", // Set white background
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      textTransform: "none",
                      padding: "15px",
                      border: "1px solid #cbcbcb", // Add border
                      boxShadow: "0px 1px 1px rgba(0,0,0,0.5)", // Add shadow
                      '&:hover': {
                        backgroundColor: "#96D2B0", // Change background color when hovered
                      }
                    }}
                    href={"PsychotropicMonitoringSection"}
                  >
                    <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                      Psychotropic Monitoring
                    </Typography>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;
