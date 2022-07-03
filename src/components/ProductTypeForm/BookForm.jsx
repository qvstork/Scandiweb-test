import React from 'react'
import { useState } from 'react'
import '../../css/AddProduct.css'

function BookForm()  {

  const [weight, setWeight] = useState('')
  const [description, setDescription] = useState('')

    return (
      <div id='book'>
        <div  id='weight'>  
          <label>Weight (KG)</label>
          <input type="number"
          required
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div id='prodDescription'>
          <label>Product<br />description:</label>
          <textarea 
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
        </div>  
      </div>
    )
}

export default BookForm