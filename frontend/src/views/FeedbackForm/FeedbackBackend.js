import axios from 'axios';

const submitFeedback = async (name, email, comment, rating, subscribe) => {
  try {
    const response = await axios.post('https://gpgc-server.vercel.app/api/submit-feedback', {
      name,
      email,
      comment,
      rating,
      subscribe,
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};

export default submitFeedback;
