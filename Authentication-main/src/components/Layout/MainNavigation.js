import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Store/Auth-Context";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";

const MainNavigation = () => {
  const context = useContext(AuthContext);
  const Navigate = useNavigate();

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!context.isLoggedIn && (
            <li>
              <NavLink to="/auth">Login</NavLink>
            </li>
          )}
          {context.isLoggedIn && (
            <>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    context.Logout();
                    Navigate("/auth");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
