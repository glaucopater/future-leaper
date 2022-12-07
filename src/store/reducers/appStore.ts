import { IAppState } from "../../containers/Main/Main.types";
import { ReducerActionType } from "../actions/actionTypes";

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

export const initialState: IAppState = {
  appStoreReducer: {
    applications: [],
    users: [],
  },
};

const appStoreReducer = (
  state = initialState,
  action: { type: ReducerActionType; payload: string | object }
) => {
  switch (action.type) {
    case ReducerActionType.ADD_APP:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.ADD_APP_SUCCESS:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.ADD_APP_FAILURE:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.LIST_APP:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.LIST_APP_SUCCESS:
      return { ...state, applications: action.payload };
    case ReducerActionType.GET_APP:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.GET_APP_FAILURE:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.GET_APP_SUCCESS:
      return { ...state, activeApplication: action.payload };
    case ReducerActionType.UPDATE_APP:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.UPDATE_APP_SUCCESS:
      return Object.assign({}, state);
    case ReducerActionType.UPDATE_APP_FAILURE:
      return Object.assign({}, state);
    case ReducerActionType.DELETE_APP:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.DELETE_APP_SUCCESS:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.DELETE_APP_FAILURE:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.LOGIN_USER:
      return Object.assign({}, state);
    case ReducerActionType.LOGIN_SUCCESS:
      return { ...state, userSession: action.payload };
    case ReducerActionType.LOGIN_FAILURE:
      return Object.assign({}, state, action.payload);
    case ReducerActionType.REGISTER_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default appStoreReducer;
