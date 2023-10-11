import axios from 'axios';

export const antidepressantClinicalUpdate = async (name, column, value) => {
    try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/AntidepressantsClinical/update", {
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

export const submitData = async (listHeader, description) => {
    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/AntidepressantsClinical/add", {
        listHeader, description
      });
      console.log(response.data); // log response from server
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // throw error to be handled by calling function
    }
  };
  


