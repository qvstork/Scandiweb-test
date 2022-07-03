import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductContainer from '../components/ProductContainer/ProductContainer'
import '../css/ProductList.css'
import Header from '../components/header'
import useFetch from '../useFetch'



function ProductList() {

  const { data, isLoading } = useFetch('http://localhost:8000/products');

  const deleteProductByIds = () => {
    let productIds = [];
    data.forEach(data => {
      if(data.selected) {
        productIds.push(data.id);
      }
    });
    console.log(productIds);

  
  // fetch.delete('http://localhost:8000/products/{productIds}')
  //   .then(data => {
  //     console.log(data);
  //     setProducts(data);  
  //   })
  };

  return (
    <div>
      <div id='product-list-header'>
        <Header />
        <h2>I'M A PRODUCT LIST PAGE</h2>
        <button type='button' id='add-product-btn'><Link to='/add-product'>Add
        </Link></button>
        <button type='button' id='delete-product-btn'
        onClick={() => deleteProductByIds()}
        >Delete</button>
      </div>
       <div className="grid-container">
        { isLoading && <div>Loading...</div> }
        {Array.isArray(data)
          ? data.map(product => (
            data && <ProductContainer {...product} key={product.id} /> 
          ))
        : null}
       </div>
    </div>  
  )
}

export default ProductList