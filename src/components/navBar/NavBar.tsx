import React from "react";
import {
  FaHome,
  FaShopify,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import styles from "./NavBar.module.css";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Navbar: React.FC<{}> = () => {
  const items = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login ");
  };

  return (
    <header className="header">
      <Link to="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      <div className={styles.link}>
        <Link to="/" style={{ color: "white" }}>
          {<FaShopify />}Shop
        </Link>
      </div>

      <ul>
        <div className = 'navLink'>
          <Link  to="/">
            <button
              data-testid="home-navlink"
              className={styles.link}
              onClick={onLogout}
            >
              {<FaHome />} Home
            </button>
          </Link>
          {user ? (
            <NavLink to="/login">
              <button
                data-testid="home-navlink"
                className={styles.link}
                onClick={onLogout}
              >
                {<FaSignOutAlt />} Logout
              </button>
            </NavLink>
          ) : (
            <>
              <NavLink to="/login">
                <button data-testid="home-navlink" className={styles.link}>
                  {<FaSignInAlt />} Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button data-testid="home-navlink" className={styles.link}>
                  {<FaUser />} Register
                </button>
              </NavLink>
            </>
          )}
          <Link className={styles.link} to="/cart">
            <button className={styles.link}>

            {<FaShoppingCart />} Cart: {items.length}
            </button>
          </Link>
        </div>
      </ul>
    </header>
  );
};
export default Navbar;
