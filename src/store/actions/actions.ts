import { Application, initialState, User } from "../reducers/appStore";
import * as constants from "./actionTypes";

const appStore = initialState;

export const updateApp = (app: Application) => {
  return {
    type: constants.UPDATE_APP,
    appStore,
  };
};

export const addApp = (app: Application) => {
  return {
    type: constants.ADD_APP,
    appStore,
  };
};

export const deleteApp = (id: Application["id"]) => {
  return {
    type: constants.DELETE_APP,
    appStore: appStore,
  };
};

export const listApp = () => {
  return {
    type: constants.LIST_APP,
    appStore,
  };
};

export const registerUser = (user: User) => {
  return {
    type: constants.REGISTER_USER,
    appStore,
  };
};


export const loginUser = (user: User) => {
  return {
    type: constants.LOGIN_USER,
    appStore,
  };
};
