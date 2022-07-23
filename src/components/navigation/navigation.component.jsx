import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as DevLogo } from "../../assets/dev.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <DevLogo className="logo" />
          </Link>
          <span className="me">Lindsay Reed</span>
          <span className="title">Web Applications Developer</span>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
