import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Logo from "../../../static/images/logo.png";
import { setFilter } from '../../redux/actions/productAction';
import './Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { item } = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <>
    <div className='header'>
      <header className='header-container'>
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
              <Link to="/products" role="link" onClick={()=>dispatch(setFilter(null))}>
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          
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
         
          <div className='cart-box'>
            <Link 
            to="/cart"
            className='cart-btn'>
              <FontAwesomeIcon
              icon={faShoppingCart}
              alt="Cart Icon"
              className="cart-icon"
            />
              {item ? item : 0} items
            </Link>
          </div>
        </div>
      </header>
      </div>
    </>
  );
};

export default Header;
