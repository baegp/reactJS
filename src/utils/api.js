import axios from 'axios';

export const getAPI = async (url) => {
  const response = await axios.get(url).catch((err) => console.error(err));
  if (response && response.status === 200) {
    return response.data;
  }
  return undefined;
};

export const postAPI = async (url) => {
  const response = await axios.post(url,{}).catch((err) => console.error(err));
  return response;
};

export const deleteAPI = async (url) => {
  const response = await axios.delete(url).catch((err) => console.error(err));
  return response;  
};

export const putAPI = async (url) => {
  const response = await axios.put(url).catch((err) => console.error(err));
  return response;
};