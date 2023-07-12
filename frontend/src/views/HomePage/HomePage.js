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
            direction="column"
            alignItems="center"
            justify="center"
            sx={{ textAlign: "center" }}
          >
            <Grid item xs={12}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion sx={{ background: "#96D2B0", width: "80%", display: "flex", flexDirection: "column" }}>
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Antidepressants{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="AntidepressantGuide"> Antidepressant Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="AntidepressantsClinical"> Antidepressant Clinical Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="AntidepressantSafety"> Antidepressant Safety Concerns </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion sx={{ background: "#96D2B0", width: "80%", display: "flex", flexDirection: "column" }}>
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Antipsychotics{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="AntipsychoticsGuide"> Antipsychotics Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="AntipsychoticSafety"> Antipsychotics Safety Concerns </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion sx={{ background: "#96D2B0", width: "80%", display: "flex", flexDirection: "column" }}>
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Insomnia{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="InsomniaManagement"> Insomnia management </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="InsomniaSedatives"> Sedatives/hypnotics Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="InsomniaClinical"> Sedatives/hypnotics Clinical Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="InsomniaSafety"> Sedatives/hypnotics Safety Concerns </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="InsomniaDeprescribing"> Deprescribing Sedatives/Hypnotics </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion sx={{ background: "#96D2B0", width: "80%", display: "flex", flexDirection: "column" }}>
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Dementia{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="CognitiveEnhancersGuide"> Cognitive Enhancers Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="CognitiveEnhancersGuideCont"> Cognitive Enhancers Guide continued </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="CognitiveEnhancersClinical"> Cognitive Enhancers Clinical Guide </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="Neuropsychiatric"> NPS Management </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion sx={{ background: "#96D2B0", width: "80%", display: "flex", flexDirection: "column" }}>
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Delirium{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="DeliriumManagement"> Delirium Management </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="DeliriumManagement"> Anticholinergic activity </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Accordion sx={{ background: "#96D2B0", width: "80%", display: "flex", flexDirection: "column" }}>
                    <AccordionSummary sx={{ alignSelf: "center" }} expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                        {" "}
                        Polypharmacy{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="PolypharmacyCommonDDIs"> Common DDI's </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="PolypharmacyNotableChanges"> Notable changes in older adults </a>{" "}
                      </Typography>
                      <Typography sx={{ fontWeight: 300, fontSize: "1rem" }}>
                        {" "}
                        <a href="PolypharmacyPrinciples"> Prescribing and deprescribing principles </a>{" "}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button
                    variant="h1"
                    sx={{
                      background: "#96D2B0",
                      width: "80%",
                      display: "flex",
                      flexDirection: "column",
                      textTransform: "none",
                    }}
                    href={"Neuropsychiatric"}
                  >
                    <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                      ECT & Psychoactive Medications
                    </Typography>
                  </Button>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button
                    variant="h1"
                    sx={{
                      background: "#96D2B0",
                      width: "80%",
                      display: "flex",
                      flexDirection: "column",
                      textTransform: "none",
                    }}
                    href={"MoodStabilizers"}
                  >
                    <Typography variant="h5" component="h1" sx={{ fontWeight: 400, fontSize: "1.25rem" }}>
                      {" "}
                      Mood Stabilizers{" "}
                    </Typography>
                  </Button>
                </CardContent>
                <CardContent sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                  <Button
                    variant="h1"
                    sx={{
                      background: "#96D2B0",
                      width: "80%",
                      display: "flex",
                      flexDirection: "column",
                      textTransform: "none",
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
