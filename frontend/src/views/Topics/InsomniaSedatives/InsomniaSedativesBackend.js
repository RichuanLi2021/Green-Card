import axios from 'axios';

export const InsomniaSedativesUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/InsomniaSedatives/update", {
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

 export const submitDrug = async (drugName, doseEquiv, timeToPeakInPlasma, halfLife, avgDoseRange, mgFormsupplied) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/add/InsomniaSedatives", {
        drugName,
        doseEquiv, 
        timeToPeakInPlasma, 
        halfLife,
        avgDoseRange, 
        mgFormsupplied
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};