import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { IAppProps, IAppState } from "../../../containers/Main/Main.types";
import { mapDispatchToProps, mapStateToProps } from "../../../containers/Main";
import { User } from "../../../store/reducers/appStore";
import "./LoginForm.css";

export const LoginForm = ({
  appStoreReducer,
  loginUser,
}: IAppProps & IAppState) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["sessionId"]);
  const [currentUsername, setCurrentUsername] = useState<User["username"]>();
  const [currentPassword, setCurrentPassword] = useState<User["password"]>();

  const { userSession } = appStoreReducer;

  useEffect(() => {
    if (userSession?.session) setCookie("sessionId", userSession?.session);
  }, [userSession, setCookie]);

  const handleOnLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentUsername && currentPassword) {
      setIsLoading(true);
      loginUser({
        username: currentUsername,
        password: currentPassword,
      });
      setIsLoading(false);
    }
  };

  const handleOnChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentUsername(e.currentTarget.value);
  };

  const handleOnChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentPassword(e.currentTarget.value);
  };

  if (cookies["sessionId"]) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <form className="Login-Form">
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
        {isLoading ? (
          "Loggin in ..."
        ) : (
          <button
            disabled={!currentUsername && !currentPassword}
            onClick={handleOnLogin}
          >
            Login
          </button>
        )}
      </form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
