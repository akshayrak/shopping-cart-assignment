import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilter } from '../../redux/actions/productAction';
import "./ProductList.scss"

const ProductList = ({ categoriesData }) => {
    const {filter} = useSelector(state=>state)
    const dispatch = useDispatch()
    const handleCategorySelect = (id)=>{
        if (id !== filter) {
            dispatch(setFilter(id));
          } else {
            dispatch(setFilter(null));
          }
    }
    return (
        <>
                <ul className="category-list">
                   {categoriesData.map(data=>(
                       <>
                        {data.order!==-1&&<li
                        key={data.id}
                        style={{ color: data.id === filter ? "red" : "black" }}
                        className="catagory-name">
                            <Link to="/products" onClick={()=>handleCategorySelect(data.id)}>
                            {data.name}
                            </Link>
                        </li>}
                       </>
                   ))}
                </ul>

                <select className="category-list-select">
                   {categoriesData.map(data=>(
                       <>
                        {data.order!==-1&&<option
                        key={data.id}
                        className="catagory-name-select"
                        onClick={()=>handleCategorySelect(data.id)}
                        >
                            {data.name}
                        </option>}
                       </>
                   ))}
                </select>
        </>
    );
};

export default ProductList;
