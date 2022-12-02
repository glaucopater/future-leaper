import { Application, User } from "../../store/reducers/appStore";

export interface IAppState {
  appStoreReducer: {
    users: User[];
    applications: Application[];
    isLoggedIn?: boolean;
    userSession?: { session: string; username: User["username"] };
  };
}

export interface IAppProps {
  deleteApplication: (applicationId: Application["id"]) => void;
  addApplication: (app: Application) => void;
  updateApplication: (app: Application) => void;
  getApplications: () => void;
  registerUser: (user: User) => void;
  loginUser: (user: User) => void;
}
