import axios from 'axios';
import Config from '../../../config/config'; // Ensure this path matches your project structure
const submitFeedback = async (name, email, comment, rating, allowEmailBack) => {
  try {
    const response = await axios.post(`${Config.API_URL}/api/feedback`, {
      name,
      email,
      comment,
      rating,
      allowEmailBack,
    }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};
export default submitFeedback;