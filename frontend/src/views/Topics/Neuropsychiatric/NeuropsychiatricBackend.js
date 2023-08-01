import axios from 'axios';




export const NeuropsychiatricUpdate = async (name, column, value) => {

  try {

    const response = await axios.post('https://gpgc-server.vercel.app/api/Neuropsychiatric/update', {

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


export const submitDrug = async (medication, recommendedAction) => {
  try {
    const response = await axios.post('https://gpgc-server.vercel.app/api/add/Neuropsychiatric', {
      medication, recommendedAction
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};

