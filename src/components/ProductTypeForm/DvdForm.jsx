import React from 'react'
import '../../css/AddProduct.css'

function DvdForm() {
    return (
      <div id='dvd'>
        <div id='size'>
          <label>Size (MB)</label>
          <input type="text" />
        </div> 
        <div id='prodDescription'>
          <label>Product<br />description:</label>
          <input type="text" />
        </div>
      </div>
    )
  }


export default DvdForm