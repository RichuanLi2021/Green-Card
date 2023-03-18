import { Card, CardContent, Container, Grid, Typography, Button } from "@mui/material";
import Navigation from "../Navigation/navigation";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Container className="main-container" sx={{ overflow: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={4} direction="column" alignItems="center" justify="center" sx={{ textAlign: "center" }}>
                    <Grid item xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
        </div>
    );
};

export default HomePage;

const buttonsContent = [
    {
        title: "Antipsychotics Guide",
        href: "AntipsychoticsGuide",
    },
    {
        title: "Cognitive Enhancers Guide",
        href: "CognitiveEnhancersGuide",
    },
    {
        title: "Insomnia Management",
        href: "InsomniaManagement",
    },
    {
        title: "Antidepressant Clinical Guide",
        href: "AntidepressantClinicalGuide",
    },
    {
        title: "Mood Stabilizers Guide",
        href: "MoodStabilizersGuide",
    },
    {
        title: "Delirium Management",
        href: "DeliriumManagement",
    },
    {
        title: "NPS Management & ECT & Psychoactive Meds",
        href: "NeuropsychiatricSymptomsECT",
    },
];