import axios from 'react-native-axios';

const LandAdjustmentApi = {
  getLandAdjustment: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/land-adjustment");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3)
    }
  },

  storeLandAdjustment: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/land-adjustment", json , {
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

  showLandAdjustment: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/land-adjustment/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  updateLandAdjustment: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/land-adjustment/"+id, json, {
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
  
  deleteLandAdjustment: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/land-adjustment/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },
}

export default LandAdjustmentApi;
