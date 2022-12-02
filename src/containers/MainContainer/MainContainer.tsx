import {
  addApplication,
  deleteApplication,
  getApplicationDetails,
  getApplications,
  loginUser,
  registerUser,
  updateApplication,
} from "../../store/actions/actions";
import { IAppProps, IAppState } from "./App.types";
import { connect } from "react-redux";
import React from "react";
import { useCookies } from "react-cookie";
import { Header } from "../../components/Header";
import { Application, User } from "../../store/reducers/appStore";
import { List as ApplicationList } from "../../components/List";
import { Modal as AddModal } from "../../components/Modal";
import "./App.css";

export const mapStateToProps = (state: IAppState) => {
  return { ...state };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    registerUser: (user: User) => {
      dispatch(registerUser(user));
    },
    deleteApplication: (appId: Application["id"]) => {
      dispatch(deleteApplication(appId));
    },
    addApplication: (app: Application) => {
      dispatch(addApplication(app));
    },
    updateApplication: (app: Application) => {
      dispatch(updateApplication(app));
    },
    loginUser: (user: User) => {
      dispatch(loginUser(user));
    },
    getApplications: () => {
      dispatch(getApplications());
    },
    getApplicationDetails: (appId: Application["id"]) => {
      dispatch(getApplicationDetails(appId));
    },
  };
};

const MainContainer = ({
  getApplications,
  deleteApplication,
  appStoreReducer,
}: IAppProps & IAppState) => {
  const [displayModal, setDisplayModal] = React.useState(false);
  const [cookies] = useCookies(["sessionId"]);

  React.useEffect(() => {
    if (cookies["sessionId"]) {
      getApplications();
    }
  }, [cookies, getApplications]);

  const renderer = () => [
    "id",
    "lang",
    "name",
    "username",
    "version",
    "secret",
  ];

  const handleOnCloseModal = () => {
    setDisplayModal(false);
  };

  const handleOnClickAddButton = () => {
    setDisplayModal(true);
  };

  const handleDeleteApplication = (appId: string) => {
    deleteApplication(appId);
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <ApplicationList
          data={appStoreReducer.applications}
          renderer={renderer}
          handleDeleteApplication={handleDeleteApplication}
          handleOnClickAddButton={handleOnClickAddButton}
        />
        <AddModal
          application={{
            id: "",
            name: "",
            secret: "",
            lang: "",
            version: 0,
            username: "",
          }}
          state={displayModal}
          closeModal={handleOnCloseModal}
        />
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
