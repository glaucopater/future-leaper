import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import MainContainer from "../../containers/MainContainer/MainContainer";
import "../../containers/MainContainer/App.css";

export const Home = () => {
  const [cookies] = useCookies(["sessionId", "Domain", "Path"]);
  if (cookies["sessionId"]) return <MainContainer />;
  else return <Navigate to="/login" replace={true} />;
};
