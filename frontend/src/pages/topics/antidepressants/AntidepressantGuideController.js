import axios from "axios";

const AntidepressantGuideUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/api/AntidepressantGuide/update",
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

export default AntidepressantGuideUpdate;
