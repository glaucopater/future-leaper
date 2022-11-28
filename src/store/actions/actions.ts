import * as constants from "./actionTypes";

export const updateApp = (App: any) => {
  return {
    type: constants.UPDATE_APP,
  };
};

export const addApp = (appStore: any) => {
  return {
    type: constants.ADD_APP,
    appStore: appStore,
  };
};

export const deleteApp = (appStore: any) => {
  return {
    type: constants.DELETE_APP,
    appStore: appStore,
  };
};

export const fetchData = () => {
  return (dispatch: any) => {
    return [];
  };
};
