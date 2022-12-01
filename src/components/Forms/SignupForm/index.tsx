import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { postRegisterUser } from "../../../api";
import { User } from "../../../store/reducers/appStore";
import "./SignupForm.css";

export const SignupForm = ({ formAction: registerUser }: any) => {
  const [, setIsLoading] = useState(false);
  const [currentUsername, setCurrentUsername] = useState<User["username"]>();
  const [currentPassword, setCurrentPassword] = useState<User["password"]>();
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
      registerUser();

      await postRegisterUser({
        username: currentUsername,
        password: currentPassword,
      })
        .then((resp: AxiosResponse) => {
          const data = resp.data;
          if (data.status === "ok")
            console.log("User " + currentUsername + " created!");
          setIsLoading(false);
        })
        .catch((error: Error | AxiosError) => {
          if (axios.isAxiosError(error)) {
            const { error: errorMessage } =
              error.response?.data || "Server error";
            console.log(errorMessage.message);
          } else {
            console.log("Server error");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <h3>Signup</h3>
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
        <button onClick={handleOnSubmit}>Signup</button>
      </form>
    </>
  );
};
