import React from 'react'
import { useState } from 'react'
import '../../css/AddProduct.css'

function DvdForm() {

  const [size, setSize] = useState('')
  const [description, setDescription] = useState('')

    return (
      <div id='dvd'>
        <div id='size'>
          <label>Size (MB)</label>
          <input 
          type="number"
          required
          value={size}
          onChange={(e) => setSize(e.target.value)}
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


export default DvdForm