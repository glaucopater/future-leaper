export enum ReducerActionType {
  ADD_APP,
  ADD_APP_SUCCESS,
  ADD_APP_FAILURE,
  GET_APP,
  LIST_APP,
  LIST_APP_SUCCESS,
  LIST_APP_FAILURE,
  UPDATE_APP,
  UPDATE_APP_SUCCESS,
  UPDATE_APP_FAILURE,
  DELETE_APP,
  DELETE_APP_SUCCESS,
  DELETE_APP_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER,
  RESET_SANDBOX,
}

export type AddApplication = {
  type: ReducerActionType.ADD_APP;
};

export type UpdateApplication = {
  type: ReducerActionType.UPDATE_APP;
};

export type DeleteApplications = {
  type: ReducerActionType.DELETE_APP;
};

export type GetApplication = {
  type: ReducerActionType.GET_APP;
};

export type ListApplications = {
  type: ReducerActionType.LIST_APP;
};

export type RegisterUser = {
  type: ReducerActionType.REGISTER_USER;
};

export type LoginUser = {
  type: ReducerActionType.LOGIN_USER;
};

export type GetUser = {
  type: ReducerActionType.GET_USER;
};

export type ReducerApplicationsActions =
  | AddApplication
  | UpdateApplication
  | ListApplications
  | GetApplication;

export type ReducerUsersActions = GetUser | LoginUser | RegisterUser;

export type ReducerActions = ReducerUsersActions | ReducerApplicationsActions;
