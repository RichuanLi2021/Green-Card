/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowFeedback from './Feedback';
import { CircularProgress } from '@mui/material';
import config from '../../config/config';


function FeedbackBackEnd({ onClose }) {
    const [feedbackData, setFeedbackData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeedback = async () => {
            try{
                const response = await axios.get(`${config.API_URL}/api/feedback`,{withCredentials:true})
                setFeedbackData(response.data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };
        
        fetchFeedback();
    }, []);

    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            {loading ?
                <CircularProgress />
                :
                <ShowFeedback feedbackData={feedbackData} onClose={handleClose} />
            }
        </div>
    );
}

export default FeedbackBackEnd; */
