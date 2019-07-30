import axios from 'axios';

import config from '../../config';
import handleError from '../error-handlers/check-status';

const instance = axios.create({
  baseURL: config.apiUrl,
});

instance.interceptors.response.use(
  response => response,
  error => handleError(error, instance),
);

export const getRequest = async (url, params) => {
  const response = await instance.get(url, {
    params: {
      ...params,
    },
  });

  return response;
};

export const postRequest = async (url, data, params) => {
  const response = await instance.post(url, data, {
    params: {
      ...params,
    },
  });

  return response;
};
