import axios from 'axios';




export const NeuropsychiatricUpdate = async (name, column, value) => {

  try {

    const response = await axios.post('http://localhost:8887/api/Delirium/update', {

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


export const submitDrug = async (listHeader, description) => {
  try {
    const response = await axios.post('http://localhost:8887/api/add/Delirium', {
      listHeader, description
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};


