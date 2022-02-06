import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilter } from '../../redux/actions/productAction';
import "./CategoryBanner.scss"

const CatagoryBanner = ({ catagoryData }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='category-container'>
                {catagoryData.map(data => (
                    data.imageUrl && <div className="banner-component">
                        <div className="image-container">
                            <img
                                loading="lazy"
                                src={`https://raw.githubusercontent.com/akshayrak/shopping-cart-assignment/master${data.imageUrl}`}
                                alt={data.name}
                                className="banner-image"
                                width="100%"
                                height="auto"
                            />
                        </div>
                        <div className="content-container">
                            <h2 className="heading">{data.name}</h2>
                            <p className="desc">{data.description}</p>
                            <Link to="/products" role="link" onClick={() => dispatch(setFilter(data.id))} className="link-button">
                                Explore {data.key}
                            </Link>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    );
};

export default CatagoryBanner;