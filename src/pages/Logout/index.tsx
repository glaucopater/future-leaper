import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import "../../containers/MainContainer/App.css";

export const Logout = () => {
  const [cookie, , removeCookie] = useCookies(["sessionId"]);

  useEffect(() => {
    removeCookie("sessionId");
  });

  if (!cookie["sessionId"]) return <Navigate to="/" replace={true} />;
  else return <>Logging out</>;
};

