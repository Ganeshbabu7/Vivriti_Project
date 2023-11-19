import axios from "axios";
const apiUrl = process.env.REACT_APP_HTTP_SERVER;

// Headers :
const setHeaders = (token, contentType) => {
  instance.defaults.headers.common["Content-Type"] = contentType;
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const instance = axios.create({
  baseURL: apiUrl,
});

export const getRequest = (token, url) => {
  setHeaders(token, "application/json");
  return instance.get(url);
};
