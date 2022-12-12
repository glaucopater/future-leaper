import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Application, User } from "../reducers/appStore";
import { ReducerActionType } from "./actionTypes";

const backendAPI = "";

export const loginSuccess = (data: User) => {
  return {
    type: ReducerActionType.LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (message: string) => {
  return {
    type: ReducerActionType.LOGIN_FAILURE,
    payload: message,
  };
};

export const loginUser = (user: User) => {
  return (
    dispatch: (arg0: {
      type: ReducerActionType;
      payload: string | User;
    }) => void
  ) => {
    return axios
      .post<User>(backendAPI + "users/login", user)
      .then(({ data }: AxiosResponse) => {
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};

export const getApplicationsSuccess = (data: Application[]) => {
  return {
    type: ReducerActionType.LIST_APP_SUCCESS,
    payload: data,
  };
};

export const getApplicationsFailure = (message: string) => {
  return {
    type: ReducerActionType.LIST_APP_FAILURE,
    payload: message,
  };
};

export const getApplications = () => {
  return (
    dispatch: Dispatch<{
      type: ReducerActionType;
      payload: Application[] | string;
    }>
  ) => {
    return axios
      .get<Application[]>(backendAPI + "/applications")
      .then(({ data }: AxiosResponse) => {
        dispatch(getApplicationsSuccess(data));
      })
      .catch((error) => {
        dispatch(getApplicationsFailure(error));
      });
  };
};

export const getApplicationDetailsSuccess = (data: Application) => {
  return {
    type: ReducerActionType.GET_APP_SUCCESS,
    payload: data,
  };
};

export const getApplicationDetailsFailure = (message: string) => {
  return {
    type: ReducerActionType.GET_APP_FAILURE,
    payload: message,
  };
};

export const getApplicationDetails = (applicationId: Application["id"]) => {
  return (
    dispatch: (arg0: {
      type: ReducerActionType;
      payload: string | Application;
    }) => void
  ) => {
    return axios
      .get<Application>(backendAPI + "/applications/" + applicationId)
      .then(({ data }: AxiosResponse) => {
        dispatch(getApplicationDetailsSuccess(data));
      })
      .catch((error) => {
        dispatch(getApplicationDetailsFailure(error));
      });
  };
};

export const updateApplicationsSuccess = (data: Application) => {
  return {
    type: ReducerActionType.UPDATE_APP_SUCCESS,
    payload: data,
  };
};

export const updateApplicationsFailure = (message: string) => {
  return {
    type: ReducerActionType.UPDATE_APP_FAILURE,
    payload: message,
  };
};

export const updateApplication = (application: Application) => {
  return (dispatch: any) => {
    return axios
      .put(backendAPI + "/applications/" + application.id, application)
      .then(({ data }: AxiosResponse) => {
        dispatch(updateApplicationsSuccess(data));
        dispatch(getApplications());
      })
      .catch((error) => {
        dispatch(updateApplicationsFailure(error));
      });
  };
};

export const addApplicationsSuccess = (data: Application) => {
  return {
    type: ReducerActionType.ADD_APP_SUCCESS,
    payload: data,
  };
};

export const addApplicationsFailure = (message: string) => {
  return {
    type: ReducerActionType.ADD_APP_FAILURE,
    payload: message,
  };
};

export const addApplication = (application: Application) => {
  return (dispatch: any) => {
    return axios
      .post(backendAPI + "/applications", application)
      .then((resp: AxiosResponse) => {
        dispatch(addApplicationsSuccess(resp.data));
        dispatch(getApplications());
      })
      .catch((error) => {
        dispatch(addApplicationsFailure(error));
      });
  };
};

export const deleteApplicationSuccess = (data: Application) => {
  return {
    type: ReducerActionType.DELETE_APP_SUCCESS,
    payload: data,
  };
};

export const deleteApplicationFailure = (message: string) => {
  return {
    type: ReducerActionType.DELETE_APP_FAILURE,
    payload: message,
  };
};

export const deleteApplication = (applicationId: Application["id"]) => {
  return (dispatch: any) => {
    return axios
      .delete(backendAPI + "/applications/" + applicationId)
      .then(({ data }: AxiosResponse) => {
        dispatch(deleteApplicationSuccess(data));
        dispatch(getApplications());
      })
      .catch((error) => {
        dispatch(deleteApplicationFailure(error));
      });
  };
};

export const registerUserSuccess = (data: Application) => {
  return {
    type: ReducerActionType.REGISTER_USER_SUCCESS,
    payload: data,
  };
};

export const registerUserFailure = (message: string) => {
  return {
    type: ReducerActionType.REGISTER_USER_FAILURE,
    payload: message,
  };
};

export const registerUser = (user: User) => {
  return (dispatch: any) => {
    return axios
      .post(backendAPI + "/users", user)
      .then(({ data }: AxiosResponse) => {
        dispatch(registerUserSuccess(data));
      })
      .catch((error) => {
        dispatch(registerUserFailure(error));
      });
  };
};
