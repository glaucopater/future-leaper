import { Breadcrumbs } from "../Breadcrumbs";
import { Navbar } from "../Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="Header">
        <h1>Future leap</h1>
        <Navbar />
      </header>
      <Breadcrumbs />
    </>
  );
};
