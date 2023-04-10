import { Card, CardContent, Container, Grid, Typography, Button } from "@mui/material";
import Navigation from "../Navigation/navigation";
import "./HomePage.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 25,
            fontWeight: 'normal'
        }
    } 
});


const HomePage = () => {
    return (
        <div>
            <ThemeProvider theme={theme}> 
            <Navigation />
            <Container className="main-container" sx={{ overflow: "auto", display: "flex" }}>
                <Grid container spacing={4} direction="column" alignItems="center" justify="center" sx={{ textAlign: "center" }}>
                    <Grid item xs={12} >
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}> 
                            <Accordion sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column"}}>
                                <AccordionSummary sx={{alignSelf: "center"}} expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h1"> Antidepressants </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='antidepressantsGuide'> Antidepressant Guide </a> </Typography>
                                        <Typography> <a href='AntidepressantClinicalGuide'> Antidepressant Clinical Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Antidepressant Safety Concerns </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}> 
                            <Accordion sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column"}}>
                                <AccordionSummary sx={{alignSelf: "center"}} expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h1"> Antipsychotics </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Antipsychotics Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Antidepressant Safety Concerns </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}> 
                            <Accordion sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column"}}>
                                <AccordionSummary sx={{alignSelf: "center"}} expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h1"> Insomnia </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='InsomniaManagement'> Insomnia management </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Sedatives/hypnotics Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Sedatives/hypnotics Safety Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Sedatives/hypnotics Safety Concerns </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}>
                                <Button variant="h1" sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column", textTransform: "none"}} href={''}>
                                    <Typography variant="h5" component="h1">
                                        Deprescribing Sedatives/Hypnotics
                                    </Typography>
                                </Button>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}> 
                            <Accordion sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column"}}>
                                <AccordionSummary sx={{alignSelf: "center"}} expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h1"> Dementia </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='CognitiveEnhancersGuide'> Cognitive Enhancers Guide </a> </Typography>
                                        <Typography> <a href='CognitiveEnhancersGuide'> Cognitive Enhancers Guide continued </a> </Typography>
                                        <Typography> <a href='CognitiveEnhancersGuide'> Cognitive Enhancers Clinical Guide </a> </Typography>
                                        <Typography> <a href='NeuropsychiatricSymptomsECT'> NPS Management </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}> 
                            <Accordion sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column"}}>
                                <AccordionSummary sx={{alignSelf: "center"}} expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h1"> Delirium </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='DeliriumManagement'> Delirium Management </a> </Typography>
                                        <Typography> <a href='DeliriumManagement'> Anticholinergic activity </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}> 
                            <Accordion sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column"}}>
                                <AccordionSummary sx={{alignSelf: "center"}} expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h5" component="h1"> Polypharmacy </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Common DDI's </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Notable changes in older adults </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Prescribing and deprescribing principles </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}>
                                <Button variant="h1" sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column", textTransform: "none"}} href={'CognitiveEnhancersGuide'}>
                                    <Typography variant="h5" component="h1">
                                        ECT & Psychoactive Medications
                                    </Typography>
                                </Button>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}> 
                                <Accordion sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column"}}>
                                <AccordionSummary sx={{alignSelf: "center"}} expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h5" component="h1"> Mood Stabilizers </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='MoodStabilizersGuide'> Mood Stabilizers </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent sx= {{justifyContent: "center", display: "flex", alignItems: "center"}}>
                                <Button variant="h1" sx={{background: '#96D2B0', width: "80%", display: "flex", flexDirection: "column", textTransform: "none"}} href={'PsychotropicMonitoring'}>
                                    <Typography variant="h5" component="h1">
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

