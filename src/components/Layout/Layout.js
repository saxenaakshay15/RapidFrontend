import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = () => {
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <h1 className={classes.naam} style={{fontSize:'2.7rem' , marginLeft:'3rem'}}>RapidChat</h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img
            className={classes.tasveer}
            src="https://cdn-user-icons.flaticon.com/90208/90208893/1673991385633.svg?token=exp=1674632655~hmac=66db68e1cc3e49d7e8566dbbbfdc7264"
            alt="chat"
          />
        </Link>
      </header>
      <MainNavigation />
      <Outlet />
      <footer className={classes.Footer}>
        <p>Copyright ©{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
