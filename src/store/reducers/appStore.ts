import { ADD_APP, DELETE_APP, UPDATE_APP } from "../actions/actionTypes";

const initialState = {
  appStore: {},
};

const appStore = (state = initialState.appStore, action: any) => {
  let appStore;
  switch (action.type) {
    case ADD_APP:
      appStore = Object.assign({}, state, action.appStore);
      break;
    case UPDATE_APP:
      appStore = Object.assign({}, state, action.appStore);
      break;
    case DELETE_APP:
      appStore = Object.assign({}, state, action.appStore);
      break;
    default:
      appStore = state;
  }
  return appStore;
};

export default appStore;
