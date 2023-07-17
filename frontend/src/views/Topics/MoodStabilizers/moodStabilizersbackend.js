import axios from "axios";

const moodStabilizersUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(
      "http://localhost:8887/api/moodstabilizers/update",
      {
        name,
        column,
        value,
      }
    );
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};
export const submitDrug = async (doseInitial, frequency, mgFormSupplied, halfLife, monitoringLevel) => {
  try {
    const response = await axios.post('http://localhost:8887/api/add/MoodStabilizers', {
      doseInitial,
      frequency, 
      mgFormSupplied, 
        halfLife,
        monitoringLevel, 
    
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};

export default moodStabilizersUpdate;
