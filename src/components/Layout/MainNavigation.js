import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <nav className={`${classes.Nav}`}>
      <ul>
        {!isLoggedIn && (
          <li>
            <Link to="/auth">Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/about">About Us</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        )}
        {isLoggedIn && <li onClick={logoutHandler} className={classes.cdef}>Logout</li>}
      </ul>
    </nav>
  );
};

export default MainNavigation;
