import React from 'react'
import './ProductContainer.css'


class ProductContainer extends React.Component {
  state = { 
    id: 1
  }    

  render() { 
        return  <div className="container">
                    <input type="checkbox" className='delete-checkbox'></input>
                  <div className='productHeader'>
                    <h2>Name</h2>
                    <h3>Model</h3>
                    <h3>Price</h3>
                    <h3>Size</h3>
                  </div>
                </div>
   
    }
}


export default ProductContainer;
