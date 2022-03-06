import axios from 'react-native-axios';

const SubClassApi = {
    showSubClass: async (id) => {
        try {
            const response = await axios.get("http://localhost:8000/api/sub-class/"+id);
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },

  storeSubClass: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/sub-class", json , {
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

  updateSubClass: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/sub-class/"+id, json, {
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
  
  deleteSubClass: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/sub-class/"+id, json, {
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

export default SubClassApi;
