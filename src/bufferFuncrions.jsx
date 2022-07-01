    // const [selectedFormName, setSelectedForm] = useState({DvdForm})
    // const selectedForm  = form.find(form => form.name === selectedFormName)

    // function formRender() {
    //   if(form.name === "Furniture") {
    //     return {FurnitureForm}
    //   }
    //   if(form.name === " Book") {
    //     return {BookForm}
    //   }
    //   else {
    //     return {DvdForm}
    //   }
    // }

    
    //     const [currForm, setForm] = useState([
    //   {name: "DVD", formName: {DvdForm}},
    //   {name: "Furniture", formName: {FurnitureForm}},
    //   {name: "Book", formName: {BookForm}}
    // ]);



    // function setDvdForm(currForm) {
    //   setForm(currForm => DvdForm)
    // }
    
    // function setFurnitureForm(currForm) {
    //   setForm(currForm => DvdForm)
    // }

    // function setBookForm(currForm) {
    //   setForm(currForm => DvdForm)
    // }


    
    // const [currForm, setForm] = useState([
    //   {form: {DvdForm}},
    //   {form: {FurnitureForm}},
    //   {form: {BookForm}}
    // ]);


    setPreferences(prevPreferences => {
        return { ...prevPreferences, theme: 'dark' }
      })


function setForm(name) {
    if (name === "DVD") {
        return ({DvdForm})
    }
    if (name === "Furniture") {
        return ({FurnitureForm})
    }
    if (name === "Book") {
        return ({BookForm})
    }
}
      
<div><DvdForm setForm={false}  /></div>
<div><FurnitureForm setForm={false} /></div>
<div><BookForm setForm={false} /></div>

    // function formRender(value) {
    //   const setForm = value.setForm;
    //   if (value === "DVD") {
    //     return (<DvdForm />)
    //   }
    //   if (value === "Furniture") {
    //     return (<FurnitureForm />)
    //   }
    //   if (value === "Book") {
    //     return (<BookForm />)
    //   }
} 

    
//   function setFormRender(value) {
//     if (value === "DvdForm") {
//         return ({DvdForm})
//     }
//     if (value === "FurnitureForm") {
//         return ({FurnitureForm})
//     }
//     if (value === "BookForm") {
//         return ({BookForm})
//     }
// }

