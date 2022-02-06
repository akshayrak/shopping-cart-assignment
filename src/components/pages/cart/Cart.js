import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {
    updateCartItem,
    removeCartItem, S
} from "../../../redux/actions/rootAction";
import MyCart from '../../myCart/MyCart';
import "./Cart.scss"

const Cart = () => {

    return <>
        <div className='cart-container'>
            <MyCart />
        </div>
    </>;
};

export default Cart;
