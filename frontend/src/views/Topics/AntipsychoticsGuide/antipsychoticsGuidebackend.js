import axios from 'axios';

const antipsychoticsGuideUpdate = async (name, value) => {
  try {
    const response = await axios.post('http://localhost:8887/api/antipsychoticsGuideSubmit', {
     name,
     value
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};

export default submitFeedback;
