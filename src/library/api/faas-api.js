import axios from 'react-native-axios';

const FaasApi = {

  fetchFaas: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/faas");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3)
    }
  },

  fetchStatusBased: async (payload) => {
    try {
      const json = JSON.stringify(payload);
      const response = await axios.post("http://localhost:8000/api/faas/status", json , {
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

  storeFaas: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/faas", json , {
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

  updateFaas: async (payload, id) => {
    console.log(payload)
    console.log(id)
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/faas/"+id, json , {
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

  deleteFaas: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/faas/"+id)
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  multipleDeleteFaas: async (payload) => {
    try {
        const response = await axios.post("http://localhost:8000/api/faas/multipledelete", payload , {
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

export default FaasApi;
