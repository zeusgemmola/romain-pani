import logo from "../../images/AppBar.logo.svg";
import "./AppBar.css";
export const AppBar = () => {
  return (
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
  );
};
