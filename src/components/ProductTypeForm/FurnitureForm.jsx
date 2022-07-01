import React from 'react'
import '../../css/AddProduct.css'

function FurnitureForm()  { 
    return (
      <div id='furniture'>
        <div id='height'>
          <label>Height (CM)</label>
          <input></input>
        </div> 
        <div id='width'>  
          <label>Width (CM)</label>
          <input></input>
        </div>  
        <div id='length'>  
          <label>Length (CM)</label>
          <input></input>
        </div>
        <div id='prodDescription'>  
          <label>Product description:</label>
          <input></input>
        </div>  
      </div>
    )
  }


export default FurnitureForm