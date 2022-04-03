import axios from 'react-native-axios';

const JobPositionApi = {
    fetchJobPosition: async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/job-position");
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },
    storeJobPosition: async (payload) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.post("http://localhost:8000/api/job-position", json, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },

    updateJobPosition: async (payload, id) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.put("http://localhost:8000/api/job-position/" + id, json, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },

    deleteJobPosition: async (id) => {
        try {
            const response = await axios.delete("http://localhost:8000/api/job-position/"+id)
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },
}

export default JobPositionApi;
