import axios from "axios";

export const MoodStabilizersUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(
      "https://gpgc-server.vercel.app/api/MoodStabilizers/update",
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
export const submitDrug = async (drugName, doseInitial, frequency, mgFormSupplied, halfLife, monitoringLevel) => {
  try {
    const response = await axios.post('https://gpgc-server.vercel.app/api/add/MoodStabilizers', {
      drugName, 
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

