import { Application, User } from "../../store/reducers/appStore";

export interface IAppState {
  appStore: {
    users: User[];
    applications: Application[];
  };
}

export interface IAppProps {
  deleteApp: (appId: Application["id"]) => void;
  addApp: (app: Application) => void;
  updateApp: (app: Application) => void;
  registerUser: (app: User) => void;
  appStore: {
    users: User[];
    applications: Application[];
  };
}
