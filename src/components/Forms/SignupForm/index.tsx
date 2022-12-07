import { useState } from "react";
import { connect } from "react-redux";
import { IAppProps, IAppState } from "../../../containers/Main/Main.types";
import { mapDispatchToProps, mapStateToProps } from "../../../containers/Main";
import { User } from "../../../store/reducers/appStore";
import "./SignupForm.css";

export const SignupForm = ({
  appStoreReducer,
  registerUser,
}: IAppProps & IAppState) => {
  const [, setIsLoading] = useState(false);
  const [currentUsername, setCurrentUsername] = useState<User["username"]>("");
  const [currentPassword, setCurrentPassword] = useState<User["password"]>("");
  const handleOnChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentUsername(e.currentTarget.value);
  };

  const handleOnChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentPassword(e.currentTarget.value);
  };

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentUsername || currentPassword) {
      setIsLoading(true);
      registerUser({ username: currentUsername, password: currentPassword });
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="Signup-Form">
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          autoComplete="username"
          defaultValue={currentUsername}
          onChange={handleOnChangeUsername}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          autoComplete="current-password"
          defaultValue={currentPassword}
          onChange={handleOnChangePassword}
        ></input>
        <button
          disabled={!currentUsername && !currentPassword}
          onClick={handleOnSubmit}
        >
          Signup
        </button>
      </form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
