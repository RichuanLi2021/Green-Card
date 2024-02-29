import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeedbackBackEnd from './FeedbackBackEnd';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 20,
            fontWeight: "bold",
        },
    },
});


const FeedbackAdminPage = () => {
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const [emailResponse, setEmailResponse] = useState('');

    const handleFeedbackSelect = (feedback) => {
        setSelectedFeedback(feedback);
        setEmailResponse(''); 
    };

    const handleEmailChange = (event) => {
        setEmailResponse(event.target.value);
    };

    const sendEmailResponse = () => {
        // This is the Logic to send email response goes here
        console.log("Sending email response: ", emailResponse);

        // Reset the response field after sending
        setEmailResponse('');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4} style={{ marginTop: '100px' }}>
                        <Card>
                            <CardContent style={{ overflow: 'auto' }}> 
                                <FeedbackBackEnd onFeedbackSelect={handleFeedbackSelect} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {selectedFeedback && (
                            <Box>
                                <Typography variant="h1" gutterBottom>
                                    Feedback Details
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Name:</strong> {selectedFeedback.name}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Email:</strong> {selectedFeedback.email}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Comment:</strong> {selectedFeedback.comment}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Rating:</strong> {selectedFeedback.rating}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Allow Email Back:</strong> {selectedFeedback.allowEmailBack ? 'Yes' : 'No'}
                                </Typography>
                                {selectedFeedback.allowEmailBack && (
                                    <Box mt={2}>
                                        <TextField
                                            label="Email Response"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            variant="outlined"
                                            value={emailResponse}
                                            onChange={handleEmailChange}
                                            margin="normal"
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={sendEmailResponse}
                                        >
                                            Send Email
                                        </Button>
                                    </Box>
                                )}
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};



export default FeedbackAdminPage;
