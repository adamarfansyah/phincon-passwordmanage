import { callApi } from "./callApi";

const ENDPOINT_USER = "/password";
const ENDPOINT_CATEGORIES = "/categories";

export const fetchDataUser = async () => {
  try {
    const res = await callApi(ENDPOINT_USER);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postDataUser = async (data) => {
  try {
    const res = await callApi(ENDPOINT_USER, "POST", data);
    return { res, message: "Success Add User" };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataCategories = async () => {
  try {
    const res = await callApi(ENDPOINT_CATEGORIES);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataUserById = async (id) => {
  try {
    const res = await callApi(`${ENDPOINT_USER}/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateDataUser = async (data) => {
  const { id, ...rest } = data;
  try {
    const res = await callApi(`${ENDPOINT_USER}/${id}`, "PATCH", rest);
    return { res, message: "Sukses Update data" };
  } catch (error) {
    console.log(error);
  }
};

export const deleteDataUser = async (id) => {
  try {
    const res = await callApi(`${ENDPOINT_USER}/${id}`, "DELETE");
    return { res, message: "Sukses Delete Data" };
  } catch (error) {
    console.log(error);
  }
};
