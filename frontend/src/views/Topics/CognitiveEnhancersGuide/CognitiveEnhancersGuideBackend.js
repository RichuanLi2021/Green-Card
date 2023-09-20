import axios from 'axios';

export const CognitiveEnhancersGuideUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/CognitiveEnhancersGuide/update", {
     name,
     column,
     value
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};

export const submitDrug = async (drugName, action, halfLife, dose, frequency, mgFormsupplied, withFood, mci, mildModeAlz, severeAlz, mixed, vascular, lbd, ftd, pd, dsd) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/add/CognitiveEnhancersGuide", {
      drugName, action, halfLife, dose, frequency, mgFormsupplied, withFood, mci, mildModeAlz, severeAlz, mixed, vascular, lbd, ftd, pd, dsd
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};
