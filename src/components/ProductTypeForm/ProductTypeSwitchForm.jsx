import React, { useState, useEffect } from 'react'
import BookForm from './BookForm'
import DvdForm from './DvdForm'
import FurnitureForm from './FurnitureForm'
 
  
  function ProductTypeSwitchForm() {

    const [form, setForm] = useState("DVD");

    const [dvdFormVisible, setDvdFormVisible] = useState(false);
    const [furnitureFormVisible, setFurnitureFormVisible] = useState(false);
    const [bookFormVisible, setBookFormVisible] = useState(false);

    useEffect(() => {
      form === "DVD"
        ? setDvdFormVisible(true)
        : setDvdFormVisible(false);
      form === "Furniture" 
        ? setFurnitureFormVisible(true) 
        : setFurnitureFormVisible(false);
      form === "Book" 
        ? setBookFormVisible(true) 
        : setBookFormVisible(false);
    }, [form]);

    const handleOnChange = (e) => {
      setForm(e.target.value);
    };


    return (
      <div id='product-type-switch'>
          <label>Product type</label>
              <form id='productType'>
                <select value={form} onChange={handleOnChange}>
                  {/* <option value="selectProductType">Select your product type!</option> */}
                  <option value="DVD">DVD</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Book">Book</option>
                </select>             
              </form>
          <div>
            {dvdFormVisible && <DvdForm />}
            {furnitureFormVisible && <FurnitureForm />}
            {bookFormVisible && <BookForm />}
           </div>
      </div>
    )
  }

export default ProductTypeSwitchForm