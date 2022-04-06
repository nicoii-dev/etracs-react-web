import axios from 'react-native-axios';

const AccountsApi = {
    fetchAccounts: async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/accounts");
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },
    createAccount: async (payload) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.post("http://localhost:8000/api/create-account", json, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.data;
            console.log(data)
            return data;
        } catch (error) {
            console.log(error.message)
            return error.message.substr(32, 3)
        }
    },

    login: async (payload) => {
        try {
            const json = JSON.stringify(payload);
            const response = await axios.post("http://localhost:8000/api/login", json, {
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

    logout: async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/logout")
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3)
        }
    },

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
            return error.message.substr(32, 3)
        }
    },
}

export default AccountsApi;
