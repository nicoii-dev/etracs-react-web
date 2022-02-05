import axios from 'react-native-axios';

const ProductApi = {
  getProduct: async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      return data;
    } catch (error) {
      return error.message.substr(32, 3);
    }
  }
}

export default ProductApi;

