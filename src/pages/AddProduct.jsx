import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AddProduct.css'
import Header from '../components/header'
import ProductTypeSwitchForm from '../components/ProductTypeForm/ProductTypeSwitchForm'


function AddProduct() {

  return (
    <div>
      <div id='add-product-header'>
        <Header />
        <h2>Here You can add Your product!</h2>
        <button type='button' id='home-btn'><Link to='/'>
          Home</Link></button>
        
        <button type='button' id='cancel-btn'>Cancel</button>
        <button type='button' id='submit'>Save</button>
      </div>
      <div id='product-form'>
        <div className='product-info-inputs'>
          <div id='sku'>
            <label>SKU</label> 
            <input placeholder='SKU'></input>
          </div>
          <div id='name'>
            <label>Name</label>
            <input placeholder='Name'></input>
          </div>
          <div id='price'>
            <label>Price</label>
            <input placeholder='Price'></input>
          </div>  
          <ProductTypeSwitchForm />
        </div>
      </div>
    </div>
  )
}


export default AddProduct