import { Card, CardContent, Container, Grid, Typography, Button } from "@mui/material";
import Navigation from "../Navigation/navigation";
import "./HomePage.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 25,
            fontWeight: 'normal',
            
        }
    }
});


const HomePage = () => {
    return (
        <div>
            <ThemeProvider theme={theme}> 
            <Navigation />
            <Container className="main-container" sx={{ overflow: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={4} direction="column" alignItems="center" justify="center" sx={{ textAlign: "center" }}>
                    <Grid item xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent> 
                                <Accordion sx={{background: '#96D2B0', width: "90%", justifyContent: "center"}}>
                                <AccordionSummary>
                                    <Typography variant="h1"> Antidepressants </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Antidepressant Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Antidepressant Clinical Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Antidepressant Safety Concerns </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent> 
                                <Accordion style={{background: '#96D2B0', width: "90%"}}>
                                <AccordionSummary>
                                    <Typography variant="h1"> Antipsychotics </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Antipsychotics Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Antidepressant Safety Concerns </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent> 
                                <Accordion style={{background: '#96D2B0', width: "90%"}}>
                                <AccordionSummary>
                                    <Typography variant="h1"> Insomnia </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Insomnia management </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Sedatives/hypnotics Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Sedatives/hypnotics Safety Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Sedatives/hypnotics Safety Concerns </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent> 
                                <Accordion style={{background: '#96D2B0', width: "90%"}}>
                                <AccordionSummary>
                                    <Typography variant="h1"> Dementia </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Cognitive Enhancers Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Cognitive Enhancers Guide continued </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Cognitive Enhancers Clinical Guide </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> NPS Management </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent> 
                                <Accordion sx={{background: '#96D2B0', width: "90%"}}>
                                <AccordionSummary>
                                    <Typography variant="h1"> Delirium </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Delirium Management </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Anticholinergic activity </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent> 
                                <Accordion sx={{background: '#96D2B0', width: "90%"}}>
                                <AccordionSummary>
                                    <Typography variant="h1"> Polypharmacy </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Common DDI's </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Notable changes in older adults </a> </Typography>
                                        <Typography> <a href='AntipsychoticsGuide'> Prescribing and deprescribing principles </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardContent> 
                                <Accordion className="accordion" sx={{background: '#96D2B0', width: "90%"}}>
                                <AccordionSummary sx={{justifyContent: "center", textAlign: "center", width: "50%"}}>
                                    <Typography variant="h5" component="h1"> Mood Stabilizers </Typography>
                                </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> <a href='AntipsychoticsGuide'> Mood Stabilizers </a> </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            {buttonsContent.map((content, index) => (
                                <CardContent key={index} sx={{ flexGrow: 1 }}>
                                    <Button variant="contained" sx={{ bgcolor: "#96d2b0", color: "#000", width: '90%', ":hover": { opacity: 1, background: "#96d2b0" } }} href={content.href}>
                                        <Typography component="h1" variant="h5">
                                            {content.title}
                                        </Typography>
                                    </Button>
                                </CardContent>
                            ))}
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            </ThemeProvider>
        </div>
    );
};

export default HomePage;

const buttonsContent = [
    {
        title: "Deprescribing Sedatives/hypnotics",
        href: "AntipsychoticsGuide",
    },
    {
        title: "ECT + Psychoactive Medications",
        href: "CognitiveEnhancersGuide",
    },
    {
        title: "Psychotropic Monitoring",
        href: "InsomniaManagement",
    },
];