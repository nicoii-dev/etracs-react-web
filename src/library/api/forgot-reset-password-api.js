import axios from 'react-native-axios';

const ForgotPasswordApi = {
    forgotPassword: async (payload) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.post("http://localhost:8000/api/forgot-password", json, {
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
    resetPassword: async (payload) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.post("http://localhost:8000/api/reset-password", json, {
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

export default ForgotPasswordApi;
