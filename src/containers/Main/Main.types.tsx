import { Application, User } from "../../store/reducers/appStore";

export interface IAppState {
  appStoreReducer: {
    users: User[];
    applications: Application[];
    activeApplication?: Application;
    userSession?: { session: string; username: User["username"] };
  };
}

export interface IAppProps {
  deleteApplication: (applicationId: Application["id"]) => void;
  addApplication: (app: Application) => void;
  updateApplication: (app: Application) => void;
  getApplications: () => void;
  getApplicationDetails: (applicationId: Application["id"]) => void;
  registerUser: (user: User) => void;
  loginUser: (user: User) => void;
}
