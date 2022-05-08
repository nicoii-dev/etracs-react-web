import axios from 'react-native-axios';

const MultipleApi = {
  getMultiple: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/multiple");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3)
    }
  },

  storeMultiple: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/multiple", json , {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
          });
        const data = await response.data;
        return data;
      } catch (error) {
        return error.response
      }
  },

  showMultipleById: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/multiple/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  updateMultiple: async (payload, id) => {
    console.log(payload)
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/multiple/"+id, json, {
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json'
          }
        });
        const data = await response.data;
        return data;
      } catch (error) {
        return error.response
      }
  },
  
  deleteMultiple: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/multiple/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  multipleDeleteMultiple: async (payload) => {
    try {
        const response = await axios.post("http://localhost:8000/api/multiple/multipledelete", payload , {
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

export default MultipleApi;
