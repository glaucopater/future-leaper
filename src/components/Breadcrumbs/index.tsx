import "./Breadcrumbs.css";
import { useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathTokens = pathname.split("/");

  return (
    <header className="Breadcrumbs">
      {pathTokens
        .filter((token) => token !== "")
        .map((token, index) => (
          <span key={index} className="PathToken">
            {token}
          </span>
        ))}
    </header>
  );
};
