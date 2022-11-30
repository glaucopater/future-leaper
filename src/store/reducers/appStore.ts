import {
  ADD_APP,
  DELETE_APP,
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_APP,
} from "../actions/actionTypes";

export type User = {
  username: string;
  password: string;
};

export type Application = {
  id: string;
  name: string;
  secret: string;
  lang: string;
  version: number;
  username: User["username"];
};

export const initialState = {
  appStore: {
    applications: [],
    user: undefined,
  },
};

const appStore = (
  state = initialState.appStore,
  action: { type: any; appStore: any }
) => {
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
    case LOGIN_USER:
      console.log("LOGIN_USER");
      // [POST] https://frontend-test.getsandbox.com/users/login
      // OK should redirect to main page
      // error should show a notification

      appStore = Object.assign({}, state, action.appStore);
      break;
    case REGISTER_USER:
      console.log("REGISTER_USER");
      // [POST] https://frontend-test.getsandbox.com/users
      // OK should show a notification
      // error should show a notification
      appStore = Object.assign({}, state, action.appStore);
      break;
    default:
      appStore = state;
  }
  return appStore;
};

export default appStore;
