import React from 'react'
import { useState } from 'react';
import './ProductContainer.css'


const ProductContainer = ( { products, setProducts, deleteProductsByIds,
  sku, title, price, param, id } ) =>  {
  
        return (
        <div className="container">
           <input type="checkbox" 
            className='delete-checkbox' onChange={deleteProductsByIds} />
          <div className='productPreview' key={ id }>
            <h2> { sku }</h2>
            <h3>{ title }</h3>
            <h3>{ price }$</h3>
            <h4>{ param }</h4>
          </div>
        </div>
        );
    }



export default ProductContainer;
