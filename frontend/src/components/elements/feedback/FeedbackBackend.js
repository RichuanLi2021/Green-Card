import axios from 'axios';
import Config from '../../../config/config'; // Adjust this path as necessary

const submitFeedback = async ({ name, email, comment, rating, allowEmailBack, reviewed }) => {
  // Prepare the feedback object. If email is not provided, it won't be included in the object.
  const feedbackData = {
    comment,
    rating,
    allowEmailBack,
    reviewed,
  };
  if(name && email) {
    feedbackData.name = name;
    feedbackData.email = email;
  }


  try {
    const response = await axios.post(`${Config.API_URL}/api/feedback`, feedbackData, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

export default submitFeedback;