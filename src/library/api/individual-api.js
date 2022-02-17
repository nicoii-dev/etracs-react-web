import axios from 'react-native-axios';

const IndividualApi = {
  getIndividuals: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/individual");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3);
    }
  },

  showIndividualById: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/individual/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3);
      }
  },

  updateIndividual: async (data, id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/individual/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3);
      }
  },
  
  deleteIndividual: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/individual/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3);
      }
  },

  multipleDeleteIndividual: async (_ids) => {
    try {
        const response = await axios.post("http://localhost:8000/api/individual/multipledelete", 'ids='+_ids);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3);
      }
  },
}

export default IndividualApi;
