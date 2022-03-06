import axios from 'react-native-axios';

const SpecificClassApi = {
    showSpecificClass: async (id) => {
        try {
            const response = await axios.get("http://localhost:8000/api/specific-class/"+id);
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },

  storeSpecificClass: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/specific-class", json , {
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

  updateSpecificClass: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/specific-class/"+id, json, {
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
  
  deleteSpecificClass: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/specific-class/"+id, json, {
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
}

export default SpecificClassApi;
