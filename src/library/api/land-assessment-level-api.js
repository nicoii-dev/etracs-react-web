import axios from 'react-native-axios';

const LandAssessmentLevelApi = {
  getAssessmentLevel: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/assessment-levels");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3)
    }
  },

  storeAssessmentLevel: async (payload) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.post("http://localhost:8000/api/assessment-levels", json , {
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

  showAssessmentLevel: async (id) => {
    try {
        const response = await axios.get("http://localhost:8000/api/assessment-levels/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },

  updateAssessmentLevel: async (payload, id) => {
    try {
        const json = JSON.stringify(payload);
        const response = await axios.put("http://localhost:8000/api/assessment-levels/"+id, json, {
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
  
  deleteAssessmentLevel: async (id) => {
    try {
        const response = await axios.delete("http://localhost:8000/api/assessment-levels/"+id);
        const data = await response.data;
        return data;
      } catch (error) {
        return error.message.substr(32, 3)
      }
  },
}

export default LandAssessmentLevelApi;
