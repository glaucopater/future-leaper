import { useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "../../../containers/MainContainer/App.types";
import {
  addApplication,
  updateApplication,
} from "../../../store/actions/actions";
import { Application } from "../../../store/reducers/appStore";
import "./ApplicationForm.css";

export const mapStateToProps = (state: IAppState) => {
  return {
    ...state,
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    addApplication: (app: Application) => {
      dispatch(addApplication(app));
    },
    updateApplication: (app: Application) => {
      dispatch(updateApplication(app));
    },
  };
};

type applicationFormProps = {
  activeApplication: Application;
  isEditable?: boolean;
  handleOnComplete: () => void;
};

export interface IAppProps {
  updateApplication: (app: Application) => void;
  addApplication: (app: Application) => void;
}

export type ApplicationFormMergedProps = IAppState &
  IAppProps &
  applicationFormProps;

export const ApplicationForm = (props: ApplicationFormMergedProps) => {
  const [, setIsLoading] = useState(false);
  const [currentApplication, setCurrentApplication] = useState<Application>(
    props.activeApplication
  );

  const handleOnUpdate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentApplication) {
      setIsLoading(true);
      if (props.isEditable) {
        props.updateApplication(currentApplication);
      } else {
        props.addApplication(currentApplication);
      }
      setIsLoading(false);
      props.handleOnComplete();
    }
  };

  const handleOnChangeUserName = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentApplication({
      ...currentApplication,
      username: e.currentTarget.value,
    });
  };

  const handleOnChangeId = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentApplication({
      ...currentApplication,
      id: e.currentTarget.value,
    });
  };

  const handleOnChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentApplication({
      ...currentApplication,
      name: e.currentTarget.value,
    });
  };

  const handleOnChangeVersion = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentApplication({
      ...currentApplication,
      version: Number(e.currentTarget.value),
    });
  };

  const handleOnChangeSecret = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentApplication({
      ...currentApplication,
      secret: e.currentTarget.value,
    });
  };

  const handleOnChangeLanguage = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentApplication({
      ...currentApplication,
      lang: e.currentTarget.value,
    });
  };

  return (
    <form className="ApplicationForm-Form">
      <label>Id</label>
      <input
        type="text"
        placeholder="id"
        autoComplete="id"
        defaultValue={currentApplication.id}
        onChange={handleOnChangeId}
        readOnly={props.isEditable}
      ></input>
      <label>Name</label>
      <input
        type="text"
        placeholder="name"
        autoComplete="name"
        defaultValue={currentApplication.name}
        onChange={handleOnChangeName}
      ></input>
      <label>Version</label>
      <input
        type="text"
        placeholder="version"
        autoComplete="current-version"
        defaultValue={currentApplication.version}
        onChange={handleOnChangeVersion}
      ></input>
      <label>Secret</label>
      <input
        type="password"
        placeholder="secret"
        autoComplete="current-secret"
        defaultValue={currentApplication.secret}
        onChange={handleOnChangeSecret}
      ></input>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        autoComplete="username"
        defaultValue={currentApplication.username}
        onChange={handleOnChangeUserName}
        readOnly={props.isEditable}
      ></input>
      <label>Language</label>
      <input
        type="text"
        placeholder="language"
        autoComplete="language"
        defaultValue={currentApplication.lang}
        onChange={handleOnChangeLanguage}
      ></input>
      <button
        disabled={!currentApplication.name && !currentApplication.version}
        onClick={handleOnUpdate}
      >
        {props.isEditable ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);