import axios from "axios";


const baseUrl = process.env.REACT_APP_API_URL + "/api";

const editPatient = (id, data,token) => {
  return axios
    .put(baseUrl + "/editPatient/" + id, data, {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => response);
};

const getManyPatients = (id,set, handleError,token) => {
  axios
    .get(baseUrl + "/getManyPatients/" + id, {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => set(res.data))
    .catch((err) => handleError(err.response));
};
const getPatient = (setPatient, handleError, id,token) => {
  axios
    .get(baseUrl + "/getPatient/" + id, {
        headers: {
            "x-access-token":token,
            "Content-Type": "application/json",
        }
    })
    .then((res) => setPatient(res.data))
    .catch((err) => handleError(err.response));
};

const addPatietns = (data,id,token) => {
  return axios
    .post(baseUrl + "/newPatients/" + id, data, {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    })

    .then((response) => response)
    .catch((err) => err.response);
};

const deletePatient = (id,token) => {
  return axios
    .delete(baseUrl + "/deletePatient/" + id, {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => err.response);
};

export default {
  editPatient,
  getManyPatients,
  addPatietns,
  getPatient,
  deletePatient,
};
