import {
  deleteApp,
  updateApp,
  addApp,
  registerUser,
} from "../../store/actions/actions";
import { IAppProps, IAppState } from "./App.types";
import { connect } from "react-redux";
import React from "react";
import { LoginForm } from "../../components/LoginForm";
import { SignupForm } from "../../components/SignupForm";
import { getApplications, getUsers } from "../../api";
import { useCookies } from "react-cookie";
import { Header } from "../../components/Header";
import "./App.css";
import { AxiosResponse } from "axios";
import { Application, User } from "../../store/reducers/appStore";

const mapStateToProps = (state: IAppState) => {
  return {
    appStore: state.appStore,
  };
};

const mapDispatchToProps = (
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
    registerUser: (user: User) => {
      dispatch(registerUser(user));
    },
  };
};

const App = (props: IAppProps & IAppState) => {
  const [, setState] = React.useState<IAppState>(props);
  const [cookies] = useCookies(["sessionId", "Domain", "Path"]);

  const { appStore, registerUser } = props;

  React.useEffect(() => {
    setState({
      appStore: {
        users: [],
        applications: [],
      },
    });
  }, [appStore]);

  React.useEffect(() => {
    if (cookies["sessionId"]) {
      getApplications().then((resp: AxiosResponse) => {
        console.log("Applications", resp.data);
      });
      getUsers().then((resp: AxiosResponse) => {
        console.log("Users", resp.data);
      });
    }
  });

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        {cookies["sessionId"] ? (
          <>Logged in</>
        ) : (
          <>
            <SignupForm formAction={registerUser} />
            <LoginForm />
          </>
        )}
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
