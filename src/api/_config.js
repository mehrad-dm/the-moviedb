import axios from 'axios';
import Qs from 'qs';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 100000,
  params: {
    api_key: '13dcd5db351f0ea6110e8f58eb8c0385',
  },
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: 'comma' });
  },
});

export default axiosInstance;
