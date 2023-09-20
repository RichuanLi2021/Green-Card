import axios from 'axios';

export const PsychotropicMonitoringUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/PsychotropicMonitoringSection/update", {
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


export const submitDrug = async (drugName, Antipsychotics, Lithium, Valproate) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/add/PsychotropicMonitoringSection", {
      drugName, Antipsychotics, Lithium, Valproate
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
