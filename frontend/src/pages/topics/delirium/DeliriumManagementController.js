import axios from 'axios';


export const addDrug = async (listHeader, description) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/api/add/Delirium",
      {
        listHeader,
        description
      }
    );

    return response.data;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateDrug = async (name, column, value) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/api/Delirium/update",
      {
        name,
        column,
        value
      }
    );

    return response.data;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
};