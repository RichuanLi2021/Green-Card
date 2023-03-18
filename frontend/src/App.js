import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import './views/Navigation/navigation.css';
import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import {useEffect} from "react";
import FeedbackFormHandler from './views/FeedbackForm/FeedbackFormHandler';
import "./views/FeedbackForm/FeedbackForm.css";
import HomePage from './views/HomePage/HomePage';

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
                <HomePage/>
            </main>
        </ThemeProvider>
        <FeedbackFormHandler/>
        </>
    );
}
