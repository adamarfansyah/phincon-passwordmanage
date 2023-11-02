import axios from "axios";

const baseURL = "http://localhost:3000";

const Api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "Application/json",
  },
});

export const callApi = async (endpoint = "", method = "GET", body) => {
  const response = await Api.request({
    url: endpoint,
    method: method,
    data: body,
  });

  return response.data;
};
