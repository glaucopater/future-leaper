import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "../../../containers/Main/Main.types";
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
  handleOnComplete?: () => void;
};

export interface IAppProps {
  updateApplication: (app: Application) => void;
  addApplication: (app: Application) => void;
}

export type ApplicationFormMergedProps = IAppState &
  IAppProps &
  applicationFormProps;

export const ApplicationForm = ({
  isEditable,
  activeApplication,
  handleOnComplete,
  addApplication,
  updateApplication,
  appStoreReducer,
}: ApplicationFormMergedProps) => {
  const [, setIsLoading] = useState(false);
  const [currentApplication, setCurrentApplication] =
    useState<Application>(activeApplication);

  useEffect(() => {
    if (
      appStoreReducer.activeApplication &&
      currentApplication?.id !== activeApplication.id
    )
      setCurrentApplication(appStoreReducer.activeApplication);
  }, [
    activeApplication,
    currentApplication,
    appStoreReducer.activeApplication,
  ]);

  const handleOnUpdate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentApplication) {
      setIsLoading(true);
      if (isEditable) {
        updateApplication(currentApplication);
      } else {
        addApplication(currentApplication);
      }
      setIsLoading(false);
      if (handleOnComplete) handleOnComplete();
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

  if (
    !activeApplication &&
    !appStoreReducer.activeApplication &&
    !currentApplication
  ) {
    return <>Loading</>;
  }

  return (
    <form className="ApplicationForm-Form" autoComplete="off">
      <label>Id</label>
      <input
        type="text"
        placeholder="id"
        value={currentApplication.id}
        onChange={handleOnChangeId}
      ></input>
      <label>Name</label>
      <input
        type="text"
        placeholder="name"
        autoComplete="name"
        value={currentApplication.name}
        onChange={handleOnChangeName}
      ></input>
      <label>Version</label>
      <input
        type="text"
        placeholder="version"
        autoComplete="current-version"
        value={currentApplication.version}
        onChange={handleOnChangeVersion}
      ></input>
      <label>Secret</label>
      <input
        type="password"
        placeholder="secret"
        autoComplete="current-secret"
        value={currentApplication.secret}
        onChange={handleOnChangeSecret}
      ></input>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        autoComplete="username"
        value={currentApplication.username}
        onChange={handleOnChangeUserName}
        readOnly={isEditable}
      ></input>
      <label>Language</label>
      <input
        type="text"
        placeholder="language"
        autoComplete="language"
        value={currentApplication.lang}
        onChange={handleOnChangeLanguage}
      ></input>
      <button
        className="Update_Application"
        disabled={!currentApplication.name && !currentApplication.version}
        onClick={handleOnUpdate}
      >
        {isEditable ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
