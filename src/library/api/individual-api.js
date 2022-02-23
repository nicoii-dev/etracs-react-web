import axios from 'react-native-axios';

const IndividualApi = {
  getIndividuals: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/individual");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message
    }
  },

  storeIndividual: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/individual", json , {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
          });
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message
      }
  },

  showIndividualById: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/individual/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message
      }
  },

  updateIndividual: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/individual/"+id, json, {
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json'
          }
        });
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message
      }
  },
  
  deleteIndividual: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/individual/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message
      }
  },

  multipleDeleteIndividual: async (payload) => {
    try {
        const response = await axios.post("http://localhost:8000/api/individual/multipledelete", payload , {
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json'
          }
        });
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message
      }
  },
}

export default IndividualApi;
