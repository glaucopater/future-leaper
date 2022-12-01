import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { SignupForm } from "../../components/Forms/SignupForm";
import "../../containers/MainContainer/App.css";

export const Logout = () => {
  const [cookie, , removeCookie] = useCookies(["sessionId"]);

  useEffect(() => {
    removeCookie("sessionId");
  });

  if (!cookie["sessionId"]) return <Navigate to="/" replace={true} />;
  else return <>Logging out</>;
};

export const Signup = () => {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <SignupForm />
      </main>
    </div>
  );
};
