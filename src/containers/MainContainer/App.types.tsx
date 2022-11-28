import React from "react";
import { LoginForm } from "../../components/LoginForm";
import { SignupForm } from "../../components/SignupForm";
import "./App.css";

export interface IAppState {
  appStore: any;
}

interface IAppProps {
  deleteApp: (appId: number) => void;
  addApp: (app: any) => void;
  updateApp: (app: any) => void;
  appStore: any;
}

export const App = (props: IAppProps & IAppState) => {
  const [, setState] = React.useState<IAppState>(props);
  const { appStore } = props;

  React.useEffect(() => {
    setState({
      appStore: {},
    });
  }, [appStore]);

  return (
    <div className="App">
      <header className="App-header">Future leap</header>
      <main className="App-main">
        <SignupForm />
        <LoginForm />
      </main>
    </div>
  );
};
