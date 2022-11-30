import { AxiosResponse } from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { postUsersLogin } from "../../api";
import { User } from "../../store/reducers/appStore";
import "./LoginForm.css";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["sessionId"]);
  const [currentUsername, setCurrentUsername] = useState<User["username"]>();
  const [currentPassword, setCurrentPassword] = useState<User["password"]>();

  const handleOnLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentUsername || currentPassword) {
      setIsLoading(true);
      await postUsersLogin({
        username: currentUsername,
        password: currentPassword,
      })
        .then((resp: AxiosResponse) => {
          const data = resp.data;
          setCookie("sessionId", data["session"] as unknown as any);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleOnChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentUsername(e.currentTarget.value);
  };

  const handleOnChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentPassword(e.currentTarget.value);
  };

  if (cookies["sessionId"]) {
    return <>Redirect ...</>;
  }

  return (
    <>
      <h3>Login</h3>
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
