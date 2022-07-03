import React from 'react'
import { useState } from 'react'
import '../../css/AddProduct.css'

function FurnitureForm()  { 

  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [length, setLength] = useState('')
  const [description, setDescription] = useState('')


    return (
      <div id='furniture'>
        <div id='height'>
          <label>Height (CM)</label>
          <input 
          type="number"
          required
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
        </div> 
        <div id='width'>  
          <label>Width (CM)</label>
          <input 
          type="number"
          required
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          />
        </div>  
        <div id='length'>  
          <label>Length (CM)</label>
          <input 
          type="number"
          required
          value={length}
          onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div id='prodDescription'>  
          <label>Product description:</label>
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


export default FurnitureForm