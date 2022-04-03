import axios from 'react-native-axios';

const PersonnelApi = {
    getPersonnel: async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/personnel");
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },
    storePersonnel: async (payload) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.post("http://localhost:8000/api/personnel", json, {
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

    updatePersonnel: async (payload, id) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.put("http://localhost:8000/api/personnel/" + id, json, {
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

    deletePersonnel: async (id) => {
        try {
            const response = await axios.delete("http://localhost:8000/api/personnel/"+id)
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },
}

export default PersonnelApi;
