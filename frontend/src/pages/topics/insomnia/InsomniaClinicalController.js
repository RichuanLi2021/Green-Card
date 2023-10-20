import axios from "axios";

export const InsomniaClinicalUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/api/InsomniaClinical/update",
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

export const submitDrug = async (when, what) => {
  try {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/add/Insomnia/Clinical", {
        when,
        what
        
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};



