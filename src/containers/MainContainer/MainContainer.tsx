import {
  deleteApp,
  updateApp,
  addApp,
  registerUser,
  loginUser,
  listApp,
} from "../../store/actions/actions";
import { IAppProps, IAppState } from "./App.types";
import { connect } from "react-redux";
import React from "react";
import { getApplications } from "../../api";
import { useCookies } from "react-cookie";
import { Header } from "../../components/Header";
import { AxiosResponse } from "axios";
import { Application, User } from "../../store/reducers/appStore";
import { List as ApplicationList } from "../../components/List";
import { AddApplicationButton } from "../../components/AddApplicationButton";
import { Modal as AddModal } from "../../components/Modal";
import "./App.css";

export const mapStateToProps = (state: IAppState) => {
  return {
    appStore: state.appStore,
  };
};

export const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    appStore: { appStore: { applications: never[]; user: undefined } };
  }) => void
) => {
  return {
    deleteApp: (appId: Application["id"]) => {
      dispatch(deleteApp(appId));
    },
    addApp: (app: Application) => {
      dispatch(addApp(app));
    },
    updateApp: (app: Application) => {
      dispatch(updateApp(app));
    },
    listApp: () => {
      dispatch(listApp());
    },
    registerUser: (user: User) => {
      dispatch(registerUser(user));
    },
    loginUser: (user: User) => {
      dispatch(loginUser(user));
    },
  };
};

const MainContainer = (props: IAppProps & IAppState) => {
  const [state, setState] = React.useState<IAppState>(props);
  const [displayModal, setDisplayModal] = React.useState(false);
  const [cookies] = useCookies(["sessionId"]);

  const { listApp, deleteApp } = props;

  React.useEffect(() => {
    if (cookies["sessionId"] && state.appStore.applications.length === 0) {
      listApp();
      getApplications().then((resp: AxiosResponse) => {
        console.log("Applications", resp.data);
        setState({
          appStore: {
            users: [],
            applications: resp.data,
          },
        });
      });
    }
  }, [state.appStore.applications.length, cookies, listApp]);

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
    deleteApp(appId);
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <AddApplicationButton onClickHandler={handleOnClickAddButton} />
        <ApplicationList
          data={state.appStore.applications}
          renderer={renderer}
          handleDeleteApplication={handleDeleteApplication}
        />
        <AddModal
          content={{
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
