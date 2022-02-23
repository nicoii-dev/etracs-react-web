import axios from 'react-native-axios';

const JuridicalApi = {
  getJuridical: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/juridical");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3)
    }
  },

  storeJuridical: async (payload) => {
    try {
      console.log(payload)
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/juridical", json , {
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

  showJuridicalById: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/juridical/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  updateJuridical: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/juridical/"+id, json, {
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
  
  deleteJuridical: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/juridical/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  multipleDeleteJuridical: async (payload) => {
    try {
        const response = await axios.post("http://localhost:8000/api/juridical/multipledelete", payload , {
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

export default JuridicalApi;
