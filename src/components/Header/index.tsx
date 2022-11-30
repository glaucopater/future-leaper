import { useCookies } from "react-cookie";
import "./Header.css";

export const Header = () => {
  const [cookie, , removeCookie] = useCookies(["sessionId"]);

  const handleOnClick = async () => {
    removeCookie("sessionId");
  };

  return (
    <header className="Header">
      <h1>Future leap</h1>
      {cookie["sessionId"] && (
        <button className="Header-Logout" onClick={handleOnClick}>
          Logout
        </button>
      )}
    </header>
  );
};
