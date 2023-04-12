import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowFeedback from './ShowFeedback';
import { CircularProgress } from '@mui/material';

function FeedbackBackEnd({ onClose }) {
    const [feedbackData, setFeedbackData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://gpgc-service.onrender.com/api/get-feedback')
            .then(response => {
                setFeedbackData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
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

export default FeedbackBackEnd;
