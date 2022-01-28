import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../static/images/logo.png";
import './Header.scss'


const Header = () => {
  return (
    <>
      <header className='container'>
        <nav className='nav-container'>
          <Link to="/" rel="Home">
            <img
              loading="lazy"
              className="logo-img"
              src={Logo}
              alt="Sabka Bazaar Logo"
            />
          </Link>
          <ul className="list-n">
            <li>
              <Link to="/" role="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" role="link">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          <nav>
            <ul className="list-h">
              <li className="link">
                <Link to="/login" role="link">
                  Signin
                </Link>
              </li>
              <li className="link">
                <Link to="/register" role="link">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="btn-cart"
            onClick={() => {
              setOpenCart(true);
            }}
          >Cart</button>
        </div>
      </header>
    </>
  );
};

export default Header;
