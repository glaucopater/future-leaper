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
  listApp: () => void;
  registerUser: (user: User) => void;
  loginUser: (user: User) => void;
  appStore: {
    users: User[];
    applications: Application[];
  };
}
