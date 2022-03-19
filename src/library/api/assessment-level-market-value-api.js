import axios from 'react-native-axios';

const AssessmentMarketValueApi = {

  storeMarketValue: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/market-value", json , {
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

  showMarketValue: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/market-value/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  updateMarketValue: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/market-value/"+id, json, {
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
  
  deleteMarketValue: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/market-value/"+id, json, {
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

export default AssessmentMarketValueApi;
