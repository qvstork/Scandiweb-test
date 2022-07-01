import React from 'react'
import { Link } from 'react-router-dom'
import ProductContainer from '../components/ProductContainer/ProductContainer'
import '../css/ProductList.css'
import Header from '../components/header'


function ProductList() {




  return (
    <div>
      <div id='product-list-header'>
        <Header />
        <h2>I'M A PRODUCT LIST PAGE</h2>
        <button type='button' id='add-product-btn'><Link to='/add-product'>Add
        </Link></button>
        <button type='button' id='delete-producr-btn'>Mass Delete</button>
      </div>
       <ul className="grid-container">
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
       </ul>
    </div>  
  )
}

export default ProductList