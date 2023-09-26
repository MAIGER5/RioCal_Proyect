import axios from "axios"

const URLform = 'http://localhost:3001/form'

export const postFormActions = (payload) => {
  return async function() {
    const response = await axios.post(`${URLform}/`, payload);
    return response.data;
  };
}
