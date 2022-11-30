import axios from "axios";

export const Api = (
  method: string,
  endpoint: string,
  payload?: object | string,
  parameters?: string
) => {
  fetch(endpoint, {
    method,
    // credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    mode: "no-cors",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => console.log(actualData))
    .catch((err) => {
      console.log(err.message);
    });
};

export const get = (
  endpoint: string,
  payload?: object | string,
  parameters?: string
) => {
  return Api("GET", endpoint, payload, parameters);
};

export const post = (
  endpoint: string,
  payload?: object | string,
  parameters?: string
) => {
  return Api("POST", endpoint, payload, parameters);
};

export const getApplications = (parameters?: string) => {
  return axios.get("/applications");
};

export const getUsers = (parameters?: string) => {
  return axios.get("/users");
};

export const postUsersLogin = (
  payload: object | string,
  parameters?: string
) => {
  const res = axios.post("/users/login", payload);
  return res;
};

export const postRegisterUser = (
  payload: object | string,
  parameters?: string
) => {
  const res = axios.post("/users", payload);
  return res;
};
