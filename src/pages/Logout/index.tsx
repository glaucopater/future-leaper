import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "../../containers/Main/Main.css";

export const Logout = () => {
  const [cookie, , removeCookie] = useCookies(["sessionId"]);

  useEffect(() => {
    if (cookie["sessionId"]) {
      removeCookie("sessionId");
      //force refresh to avoid cookie cache
      window.location.reload();
    }
  }, [cookie,removeCookie]);

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <h3>See you soon!</h3>
        <Link to="/login">Back to login</Link>
      </main>
    </div>
  );
};
