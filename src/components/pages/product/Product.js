import React, { useEffect, useState } from 'react';
import ProductCard from '../../productCard/ProductCard';
import ProductList from '../../productList/ProductList';
import service from '../../../services/api'
import "./Product.scss"
import { useSelector } from 'react-redux';

const Product = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const { filter } = useSelector(state => state)
  useEffect(() => {

    fetch(service.productsURL)
      .then(res => res.json())
      .then(data => {
        setProductDetails(data)
        data = filter ? data.filter(product => product.category === filter) : data
        return setFilteredProducts(data)
      })

    fetch(service.categoriesURL)
      .then(res => res.json())
      .then(data => setCategoriesData(data))

  }, []);

  useEffect(() => {
    if (filter === null) {
      setFilteredProducts(productDetails)
    } else {
      setFilteredProducts(productDetails.filter(product => product.category === filter))
    }
  }, [filter])

  return (
    <>
      <div className='product-page-container'>
        <main className='product-page-main'>
          <aside className="categories-section">
            <ProductList categoriesData={categoriesData} />
          </aside>
          <section className='cards-section'>
            <ProductCard productDetails={filteredProducts} />
          </section>
        </main>
      </div>
    </>
  )
};

export default Product;
