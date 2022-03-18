import axios from 'react-native-axios';

const FormulaVariableApi = {

  fetchVariable: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/formula-variable");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3)
    }
  },

  storeVariable: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/formula-variable", json , {
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

  updateVariable: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/formula-variable/"+id, json , {
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

  deleteVariable: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/formula-variable/"+id)
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

}

export default FormulaVariableApi;
