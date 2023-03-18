import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import './views/Navigation/navigation.css';
import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import {useEffect} from "react";
import FeedbackFormHandler from './views/FeedbackForm/FeedbackFormHandler';
import "./views/FeedbackForm/FeedbackForm.css";
import Navigation from './/views//Navigation//navigation';

//Sourced from https://mui.com/material-ui/react-dialog/
const GreenCardDisclaimer = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
//Sourced from https://mui.com/material-ui/react-dialog/
function GreenCardDisclaimerTitle(props) {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
const theme = createTheme();


export default function Green() {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        const hasSeenNotice = localStorage.getItem('hasSeenNotice');
        if (hasSeenNotice) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, []);
    const handleCloseDontShowAgain = () => {
        setOpen(false);
        localStorage.setItem('hasSeenNotice', 'true');
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation/>
            <main>
                {/*Disclaimer pop-up*/}
                <div>
                    <GreenCardDisclaimer
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <GreenCardDisclaimerTitle id="customized-dialog-title" onClose={handleClose}>
                            The Green Card
                        </GreenCardDisclaimerTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                WARNING: This card is meant to support rather than guide management decisions in older adults. Information is
                                not comprehensive and errors may occur. Drug doses and other management recommendations may not
                                reflect manufacturers’ recommendation but are based on clinical literature and expert opinion. Listed
                                maximum doses are meant for physically healthy older adults, and in general not recommended for frail
                                patients. The Green Card should not supersede clinical judgment and is not applicable in all circumstances
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                I understand
                            </Button>
                            <Button autoFocus onClick={handleCloseDontShowAgain}>
                                I understand and Don't show again
                            </Button>
                        </DialogActions>
                    </GreenCardDisclaimer>
                </div>
                {/* Hero unit */}
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                </Box>
                <Container>
                    {/* End hero unit */}
                    <Grid container spacing={4} direction={"column"} alignItems={"center"} justify={"center"}>
                            <Grid>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography component="h1" variant="h5">
                                            <a href='AntipsychoticsGuide'>Antipsychotics Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Antipsychotics Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='CognitiveEnhancersGuide'>Cognitive Enhancers Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Cognitive Enhancers Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='InsomniaManagement'>Insomnia Management</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to Insomnia Management.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='AntidepressantClinicalGuide'>Antidepressant Clinical Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Antidepressant Clinical Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='MoodStabilizersGuide'>Mood Stabilizers Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Mood Stabilizers Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='DeliriumManagement'>Delirium Management</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to Delirium Management.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='NeuropsychiatricSymptomsECT'>NPS Management & ECT & Psychoactive Meds</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to NPS Management & ECT & Psychoactive Meds.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
        <FeedbackFormHandler/>
        </>
    );
}
