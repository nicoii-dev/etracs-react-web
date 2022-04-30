import axios from 'react-native-axios';

const ChangePasswordApi = {
    changePassword: async (payload) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.post("http://localhost:8000/api/change-password", json, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.data;
            return data;
        } catch (error) {
            console.log(error.message)
            return error.message.substr(32, 3)
        }
    },
}

export default ChangePasswordApi;
