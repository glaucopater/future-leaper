import { deleteApp, updateApp, addApp } from "../../store/actions/actions";
import { IAppState } from "./App.types";
import { App } from "./App.types";
import { connect } from "react-redux";

const mapStateToProps = (state: IAppState) => {
  return {
    appStore: state.appStore,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteApp: (appId: number) => {
      dispatch(deleteApp(appId));
    },
    addApp: (app: any) => {
      dispatch(addApp(app));
    },
    updateApp: (app: any) => {
      dispatch(updateApp(app));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
