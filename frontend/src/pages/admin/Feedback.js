import { useState } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Feedback.css';


const theme = createTheme({
  palette: {
    primary: {
      main: "#96d2b0",
    },
  },
});

// const ShowFeedback = ({ feedbackData, onClose, onFeedbackSelect }) => {
const ShowFeedback = ({ onClose }) => {
  // const [filteredFeedbacks, setFilteredFeedbacks] = useState(feedbackData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSelected, setFilterSelected] = useState(false);

  const handleFilterButtonClick = () => {
    // const filtered = feedbackData.filter((feedback) => feedback.overall_rating > 3);
    // setFilteredFeedbacks(filtered);
    setFilterSelected(true);
  };

  const handleResetButtonClick = () => {
    // setFilteredFeedbacks(feedbackData);
    setSearchTerm("");
    setFilterSelected(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    // const filtered = feedbackData.filter((feedback) => {
    //   const lowerCaseName = feedback.name.toLowerCase();
    //   const lowerCaseEmail = feedback.email.toLowerCase();
    //   return (
    //     lowerCaseName.includes(value) || lowerCaseEmail.includes(value)
    //   );
    // });
    // setFilteredFeedbacks(filtered);
  };

  // const handleRowClick = (feedback) => {
  //   if (onFeedbackSelect) {
  //     onFeedbackSelect(feedback);
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <div className="form-container" style={{ height: "70%" }}>
        <div className="form-header">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" className="title">
              Feedbacks
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              variant="contained"
              onClick={handleFilterButtonClick}
              sx={{ mr: 1 }}
              color={filterSelected ? "warning" : "primary"}
            >
              Filter (rating {">"} 3)
            </Button>
            <Button variant="contained" onClick={handleResetButtonClick}>
              Reset
            </Button>
          </Box>
        </div>
        <Box mt={2} display="flex" alignItems="center">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Box>
        <TableContainer component={Paper} style={{ height: "70%" }}>
          <Table stickyHeader aria-label="feedback table">
            <TableHead>
              <TableRow>
                <TableCell stickyHeader>ID</TableCell>
                <TableCell stickyHeader>Name</TableCell>
                <TableCell stickyHeader>Email</TableCell>
                <TableCell stickyHeader>Comment</TableCell>
                <TableCell stickyHeader>Overall Rating</TableCell>
                <TableCell stickyHeader>Subscribe</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*{filteredFeedbacks.map((feedback) => (*/}
              {/*  <TableRow key={generateID()} onClick={() => handleRowClick(feedback)}>*/}
              {/*    <TableCell>{feedback.id}</TableCell>*/}
              {/*    <TableCell>{feedback.name}</TableCell>*/}
              {/*    <TableCell>{feedback.email}</TableCell>*/}
              {/*    <TableCell>{feedback.comment}</TableCell>*/}
              {/*    <TableCell>{feedback.overall_rating}</TableCell>*/}
              {/*    <TableCell>*/}
              {/*      {feedback.subscribe ? "Yes" : "No"}*/}
              {/*    </TableCell>*/}
              {/*  </TableRow>*/}
              {/*))}*/}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
};

export default ShowFeedback;
