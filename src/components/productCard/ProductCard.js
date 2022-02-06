import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../redux/actions/rootAction';
import "./ProductCard.scss"

const ProductCard = ({ productDetails }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (card) => {
        cartItems.push(card)
        setCartItems(cartItems)
        console.log(cartItems)
    }

    return (
        <>
            {productDetails.map(card => (
                <div className="card">
                    <div className="card-heading">
                        <h3>{card.name}</h3>
                    </div>
                    <div className="card-contents">
                        <img src={`https://raw.githubusercontent.com/akshayrak/shopping-cart-assignment/master${card.imageURL}`}
                            alt="fruits"
                            className="product-img" />
                        <div className="card-details">
                            <p className="card-text">
                                {card.description}
                            </p>
                            <button onClick={() => dispatch(updateCartItem(card))} className="buy-btn-mobile">Buy Now @ Rs.{card.price}</button>
                            <div className="price-details-desktop">
                                <span className="rate">MRP Rs.{card.price}</span>
                                <button onClick={() => dispatch(updateCartItem(card))} className="buy-btn-desktop">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => dispatch(updateCartItem(card))} className="buy-btn-tablet">Buy Now @ Rs.{card.price}</button>
                </div>))}
        </>
    );
};

export default ProductCard;
