import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance =  axios.create({
  baseURL: 'https://9b66-2604-3d09-e7d-d710-dcd4-f781-ac4d-43e8.ngrok-free.app',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err)
  }
);

export default instance;
