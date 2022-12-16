import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import Main from "../../containers/Main";
import "../../containers/Main/Main.css";

export const Home = () => {
  const [cookies] = useCookies(["sessionId"]);
  if (cookies["sessionId"]) return <Main />;
  else return <Navigate to="/login" replace />;
};
