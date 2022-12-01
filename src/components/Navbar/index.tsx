import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [cookies] = useCookies(["sessionId", "Domain", "Path"]);


  console.log(cookies);
  return (
    <nav>
      <ul className="Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        {cookies["sessionId"] ? (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
