import axios from 'axios';

export const InsomniaSafetyUpdate = async (name, column, value) => {
  try {
    const response = await axios.post('http://localhost:8887/api/InsomniaSafety/update', {
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

//  export const submitDrug = async (duration, doseReduction, interval) => {
//   try {
//     const response = await axios.post('http://localhost:8887/api/add/InsomniaSafety', {
//         duration,
//         doseReduction, 
//         interval
        
//     });
//     console.log(response.data); // log response from server
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error; // throw error to be handled by calling function
//   }
// };