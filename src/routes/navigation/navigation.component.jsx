import { Fragment } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/086 crown.svg";

import "./navigation.styles.scss";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
