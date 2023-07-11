import axios from 'axios';

const submitDrug = async (drugName, doseEquiv, timeToPeakInPlasma, avgDoseRange, mgFormsupplied) => {
  try {
    const response = await axios.post('http://localhost:8887/api/add/InsomniaSedatives', {
        drugName,
        doseEquiv, 
        timeToPeakInPlasma, 
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


export default submitDrug;