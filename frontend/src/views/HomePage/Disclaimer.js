import React, { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#96d2b0'
        }
    }
});

const GreenCardDisclaimer = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

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

const Disclaimer = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hasSeenNotice = localStorage.getItem('hasSeenNotice');
        const disclaimerDismissedOn = localStorage.getItem('disclaimerDismissedOn');
        const ONE_DAY_IN_MS = 86400000;

        if (hasSeenNotice) {
            setOpen(false);
        } else if (disclaimerDismissedOn) {
            const lastDismissed = new Date(disclaimerDismissedOn).getTime();
            const currentTime = new Date().getTime();
            const timePassed = currentTime - lastDismissed;

            if (timePassed >= ONE_DAY_IN_MS) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        } else {
            setOpen(true);
        }
    }, []);

    const handleCloseDontShowAgain = () => {
        setOpen(false);
        localStorage.setItem('hasSeenNotice', 'true');
        localStorage.setItem('disclaimerDismissedOn', new Date().toISOString());
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <GreenCardDisclaimer onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <GreenCardDisclaimerTitle id="customized-dialog-title" onClose={handleClose}>
                    The Green Card
                </GreenCardDisclaimerTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        WARNING: This card is meant to support rather than guide management decisions in older adults.
                        Information is not comprehensive and errors may occur. Drug doses and other management recommendations
                        may not reflect manufacturers’ recommendation but are based on clinical literature and expert opinion.
                        Listed maximum doses are meant for physically healthy older adults, and in general not recommended for
                        frail patients. The Green Card should not supersede clinical judgment and is not applicable in all circumstances
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} type="submit" variant="contained">
                        I understand
                    </Button>
                    <Button autoFocus onClick={handleCloseDontShowAgain} variant="outlined" sx={{ color: 'red' }}>
                        I understand and Don't show again
                    </Button>
                </DialogActions>
            </GreenCardDisclaimer>
        </ThemeProvider>
    )
}

export default Disclaimer