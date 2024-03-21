import { useState, useEffect } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Config from "../../config/config";
import './Feedback.css';
import { TextareaAutosize } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: "#96d2b0",
    },
  },
});

const ShowFeedback = () =>{

  const [feedbackData, setFeedbackData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSelected, setFilterSelected] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
      const fetchFeedback = async () => {
          try{
              const response = await axios.get(`${Config.API_URL}/api/feedback`,{withCredentials:true})
              setFeedbackData(response.data);
              setFilteredData(response.data);
          } catch (error) {
              console.error('Error fetching feedback:', error);
          }
      };
      
      fetchFeedback();
  }, []);

  const handleFilterButtonClick = () => {
    const filtered = feedbackData.filter((feedback) => feedback.rating < 3);
    setFilteredData(filtered);
    setFilterSelected(true);
  };
  //reset filter applied
  const handleResetButtonClick = () => {
    setFilteredData(feedbackData);
    setSearchTerm("");
    setFilterSelected(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = feedbackData.filter((feedback) => {
      const lowerCaseName = feedback.name.toLowerCase();
      const lowerCaseEmail = feedback.email.toLowerCase();
      return (
        lowerCaseName.includes(value) || lowerCaseEmail.includes(value)
      );
    });
    setFilteredData(filtered);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  
  

  const handleSelectReview = (event, id) => {
    //to stop popup
    event.stopPropagation();
    const selectedIndex = selectedReviews.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedReviews, id);
    } else if (selectedIndex >= 0) {
      newSelected = [...selectedReviews];
      newSelected.splice(selectedIndex, 1);
    }
    setSelectedReviews(newSelected);
  };

  const handleMarkAsReviewed = () => {
    /* Future backend linkup */
    setSelectedReviews([]); 
  };

  const handleSelectAllReviews = () => {
    if(selectedReviews.length === filteredData.length){
      setSelectedReviews([]);
    } else {
      const newSelected = filteredData.map((feedback, index) => feedback.id || index);
      setSelectedReviews(newSelected);
    }
  };  
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
            <Button variant="contained" onClick={handleSelectAllReviews} sx={{ mr: 1 }}>
              {selectedReviews.length === filteredData.length ? 'Deselect All' : 'Select All'}
            </Button>
            {selectedReviews.length > 0 && (
              <Button
              variant="contained"
              onClick={handleMarkAsReviewed}
              sx={{ backgroundColor: '#96d2b0', color: 'black', mr: 1}}
              >
                Reviewed
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleFilterButtonClick}
              sx={{ mr: 1 }}
              color={filterSelected ? "warning" : "primary"}
            >
              Filter (rating {"<"} 3)
            </Button>
            <Button variant="contained" onClick={handleResetButtonClick}>
              Reset
            </Button>
          </Box>
        </div>
        <Box mt={2} display="flex" alignItems="center">
          <TextField
            sx={{zIndex: '0'}}
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
                <TableCell padding="checkbox">Reviewed</TableCell>
                <TableCell stickyHeader>Name</TableCell>
                <TableCell stickyHeader>Email</TableCell>
                <TableCell stickyHeader>Comment</TableCell>
                <TableCell stickyHeader>Overall Rating</TableCell>
                <TableCell stickyHeader>Subscribe</TableCell>
                <TableCell stickyHeader>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((feedback, index) => (
              <TableRow key={feedback.id || index} onClick={() => { setSelectedFeedback(feedback); setPopupOpen(true); }}>
              <TableCell padding="checkbox" onClick={(event) => event.stopPropagation()}>
                <Checkbox
                  checked={selectedReviews.includes(feedback.id || index)}
                  onChange={(event) => handleSelectReview(event, feedback.id || index)}
                />
              </TableCell>
              <TableCell>{feedback.name}</TableCell>
              <TableCell>{feedback.email}</TableCell>
              <TableCell>{truncateText(feedback.comment, 20)}</TableCell>
              <TableCell>{feedback.rating}</TableCell>
              <TableCell>
                {feedback.allowEmailBack ? "Yes" : "No"}
              </TableCell>
              <TableCell>{new Date(feedback.createdAt).toLocaleDateString('en-ca')}</TableCell>
            </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* POPUP MODAL */}
          {popupOpen && (
            <Box className={`popup-backdrop show-popup`} onClick={() => setPopupOpen(false)} />
          )}
          {popupOpen && (
            <Box className={`popup show-popup`}>
              <Typography variant="h6" className="title" mb={2} align='center'>
                Feedback Details
              </Typography>
              <Typography mb={2}>Name: {selectedFeedback.name}</Typography>
              <Typography mb={2}>Email: {selectedFeedback.email}</Typography>
              <Box mb={2} style={{ maxHeight: '200px', overflowY: 'auto' }}>
                <TextareaAutosize
                  aria-label="comment"
                  value={selectedFeedback.comment}
                  disabled
                  style={{ width: '100%', resize: 'none', border: 'none', outline: 'none', overflow: 'hidden' }}
                />
              </Box>
              <Typography mb={2}>Overall Rating: {selectedFeedback.rating}</Typography>
              <Typography mb={2}>
                Subscribe: {selectedFeedback.allowEmailBack ? "Yes" : "No"}
              </Typography>
              <Typography mb={2}>
                Date: {new Date(selectedFeedback.createdAt).toLocaleDateString('en-ca')}
              </Typography>
              <Box sx={{ m: 1.5, display: 'flex', justifyContent: 'center' }}>
                <Button sx={{backgroundColor: '#96d2b0', color: 'black'}} onClick={() => setPopupOpen(false)} className="popup-close-button">
                  Close
                </Button>
              </Box>
            </Box>
          )}
      </div>
    </ThemeProvider>
  );
};

export default ShowFeedback;
