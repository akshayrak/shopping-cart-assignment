import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCartItem, updateCartItem } from '../../redux/actions/cartAction';
import "./MyCart.scss"

const MyCart = () => {
    
    const { item, cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate()
  return <div className='my-cart-container'>
      <header class="cart-header">
                <h2>My cart {item > 0 ? `(${item} Item)` : null}</h2>
            </header>

            <ul className="cart-list">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <li
                            className="cart-list-item"
                            key={item.id}
                            data-product-id={item.id}
                        >
                            <img
                                src={`https://raw.githubusercontent.com/akshayrak/shopping-cart-assignment/master${item.imageURL}`}
                                className="cart_list-img"
                                alt={item.name}
                            />

                            <div className="cart_list-details">
                                <h4 className="cart_list-name">{item.name}</h4>
                                <div className="cart-price-details">
                                    <div className='price-quantity'>
                                <button
                                    type="button"
                                    className="btn-decrement"
                                    data-product-id={item.id}
                                    onClick={() => dispatch(removeCartItem(item))}
                                >
                                    -
                                </button>
                                <span className="quantiy">{item.quantity}</span>
                                <button
                                    type="button"
                                    className="btn-increment"
                                    data-product-id={item.id}
                                    onClick={() => dispatch(updateCartItem(item))}
                                >
                                    +
                                </button>
                                <span className="into-qty">X</span>
                                <span className="cart_list-price">Rs. {item.price}</span>
                                </div>
                                <span className="cart_list-item-total">
                                    Rs. {item.quantity * item.price}
                                </span>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <div className="text-center">
                        <strong>No items in your cart</strong>
                        <p>Your favourite items are just a click away</p>
                    </div>
                )}
            </ul>
            <div className="checkout">
                <p className="checkout-heading">
                    Promo code can be applied on the checkout page
                </p>
                {item > 0 ? (
                    <button
                        type="button"
                        name="button"
                        className="checkout-button"
                        onClick={()=>navigate("/")}
                    >
                        <span className="checkout-text">Proceed to checkout</span>{" "}
                        <span className="checkout-price">
                            Rs.
                            {cart.reduce(function (total, item) {
                                return total + item.price * item.quantity;
                            }, 0)}
                        </span>
                    </button>
                ) : (
                    <button
                        type="button"
                        name="button"
                        className="checkout-button"
                        onClick={()=>navigate("/")}
                    >
                        <span className="checkout-text">Start Shopping</span>
                    </button>
                )}
            </div>

  </div>;
};

export default MyCart;
