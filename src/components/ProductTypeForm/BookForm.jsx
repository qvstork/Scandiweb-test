import React from 'react'
import '../../css/AddProduct.css'

function BookForm()  {
    return (
      <div id='book'>
        <div  id='weight'>  
          <label>Weight (KG)</label>
          <input></input>
        </div>
        <div id='prodDescription'>
          <label>Product<br />description:</label>
          <input type="text" />
        </div>  
      </div>
    )
}

export default BookForm