import axios from 'react-native-axios';

const RevisionYearApi = {

  fetchRevisionYear: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/revision-year");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3)
    }
  },

  storeRevisionYear: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/revision-year", json , {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
          });
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  updateRevisionYear: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/revision-year/"+id, json , {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
          });
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  deleteRevisionYear: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/revision-year/"+id)
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

}

export default RevisionYearApi;
